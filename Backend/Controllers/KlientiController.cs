/*using Lab1_Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KlientiController : ControllerBase
    {
        private readonly KlientiContext _dbContext;
        private readonly IConfiguration _configuration;

        public KlientiController(KlientiContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _configuration = configuration;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Klienti>>> GetKlients()
        {
            var klientiList = await _dbContext.Klienti.ToListAsync();

            if (klientiList == null || klientiList.Count == 0)
            {
                return NotFound();
            }

            return klientiList;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Klienti>> GetKlienti(int id)
        {
            var klienti = await _dbContext.Klienti.FindAsync(id);
            if (klienti == null)
            {
                return NotFound();
            }

            return klienti;
        }

        [HttpPost]
        public async Task<ActionResult<Klienti>> PostKlienti(Klienti klienti)
        {
            _dbContext.Klienti.Add(klienti);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetKlienti), new { id = klienti.ID }, klienti);
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginModel loginModel)
        {
            var user = await _dbContext.Klienti.FirstOrDefaultAsync(x => x.Email == loginModel.Email);

            if (user != null && user.Password == loginModel.Password)
            {
                var token = GenerateJwtToken(user);
                return Ok(new { Token = token });
            }
            else
            {
                return Unauthorized();
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

        [HttpPut("{id}")]
        public async Task<ActionResult<Klienti>> PutKlienti(int id, Klienti klienti)
        {
            if (id != klienti.ID)
            {
                return BadRequest();
            }

            _dbContext.Entry(klienti).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KlientiExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteKlienti(int id)
        {
            var klienti = await _dbContext.Klienti.FindAsync(id);
            if (klienti == null)
            {
                return NotFound();
            }

            _dbContext.Klienti.Remove(klienti);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }

        private bool KlientiExists(int id)
        {
            return _dbContext.Klienti.Any(e => e.ID == id);
        }
    }
}
*/

using Lab1_Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Lab1_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class KlientiController : ControllerBase
    {
        private readonly LibrariaContext _dbContext;
        private readonly IConfiguration _configuration;

        public KlientiController(LibrariaContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _configuration = configuration;
        }

        // GET: api/Klienti
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Klienti>>> GetKlients()
        {
            return await _dbContext.Klienti.ToListAsync();
        }

        // GET: api/Klienti/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Klienti>> GetKlienti(int id)
        {
            var klienti = await _dbContext.Klienti.FindAsync(id);

            if (klienti == null)
            {
                return NotFound();
            }

            return klienti;
        }
        [HttpPut]
        public async Task<ActionResult> PutKlienti(Klienti k)
        {
            if (k == null || k.ID == 0)
            {
                return BadRequest("Invalid object or ID.");
            }

            _dbContext.Entry(k).State = EntityState.Modified;
            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

        // PUT: api/Klienti/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKlienti(int id, Klienti klienti)
        {
            if (id != klienti.ID)
            {
                return BadRequest();
            }

            _dbContext.Entry(klienti).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KlientiExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Klienti
        [HttpPost]
        public async Task<ActionResult<Klienti>> PostKlienti(Klienti klienti)
        {
            _dbContext.Klienti.Add(klienti);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction("GetKlienti", new { id = klienti.ID }, klienti);
        }

        // DELETE: api/Klienti/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKlienti(int id)
        {
            var klienti = await _dbContext.Klienti.FindAsync(id);
            if (klienti == null)
            {
                return NotFound();
            }

            _dbContext.Klienti.Remove(klienti);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginModel loginModel)
        {
            var user = await _dbContext.Klienti.FirstOrDefaultAsync(x => x.Email == loginModel.Email);

            if (user != null && user.Password == loginModel.Password)
            {
                var token = GenerateJwtToken(user);
                return Ok(new { Token = token });
            }
            else
            {
                return Unauthorized();
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
        private bool KlientiExists(int id)
        {
            return _dbContext.Klienti.Any(e => e.ID == id);
        }
    }
}
