﻿using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Http;

namespace Lab1_Backend.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly KlientiContext _dbContext;
        private readonly IConfiguration _configuration;
        private readonly IHttpContextAccessor _httpContextAccessor; // Inject HttpContextAccessor

        public AuthenticationService(KlientiContext dbContext, IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
        {
            _dbContext = dbContext;
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<string> AuthenticateAndGetJwtToken(LoginModel loginModel)
        {
            var user = await _dbContext.Klienti.FirstOrDefaultAsync(x => x.Email == loginModel.Email);

            if (user != null && user.Password == loginModel.Password)
            {
                var token = GenerateJwtToken(user);
                return token;
            }

            return null;
        }

        public async Task<bool> RegisterUser(RegisterModel registerModel)
        {
            var existingUser = await _dbContext.Klienti.FirstOrDefaultAsync(x => x.Email == registerModel.Email);

            if (existingUser != null)
            {
                return false; // User already exists
            }

            var newUser = new Klienti
            {
                Emri = registerModel.Emri,
                Mbiemri = registerModel.Mbiemri,
                GjiniaId = registerModel.GjiniaId,
                QytetiId = registerModel.QytetiId,
                RoliId = 2, // Default role ID for 'User'
                Email = registerModel.Email,
                Password = registerModel.Password
            };

            _dbContext.Klienti.Add(newUser);
            await _dbContext.SaveChangesAsync();

            return true;
        }

        public async Task<bool> AssignRole(AssignRoleModel assignRoleModel)
        {
            var user = await _dbContext.Klienti.FirstOrDefaultAsync(x => x.ID == assignRoleModel.UserId);

            if (user != null)
            {
                user.RoliId = assignRoleModel.RoleId;
                await _dbContext.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<bool> Logout()
        {
            try
            {
                // Clear JWT token from the client-side (e.g., remove cookie, clear local storage)
                _httpContextAccessor.HttpContext.Response.Cookies.Delete("jwtToken");

                return true;
            }
            catch (Exception ex)
            {
                // Log any errors
                Console.WriteLine($"Error during logout: {ex.Message}");
                return false;
            }
        }

        private string GenerateJwtToken(Klienti user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: new[] {
                    new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                },
                expires: DateTime.UtcNow.AddMinutes(Convert.ToDouble(_configuration["Jwt:ExpiryMinutes"])),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
