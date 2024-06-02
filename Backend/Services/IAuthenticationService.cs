//IAuthenticationServices.cs
using Lab1_Backend.Models;

namespace Lab1_Backend.Services
{
    public interface IAuthenticationService
    {
        Task<(string Token, string Roli)> AuthenticateAndGetJwtToken(LoginModel loginModel); // Ndryshoni këtu
        Task<bool> RegisterUser(RegisterModel registerModel);
        Task<bool> AssignRole(AssignRoleModel assignRoleModel);
        Task<bool> Logout();
    }
}