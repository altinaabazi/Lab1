using Lab1_Backend.Models;

namespace Lab1_Backend.Services
{
    public interface IAuthenticationService
    {
        Task<string> AuthenticateAndGetJwtToken(LoginModel loginModel);
        Task<bool> RegisterUser(RegisterModel registerModel);
        Task<bool> AssignRole(AssignRoleModel assignRoleModel);
    }
}
