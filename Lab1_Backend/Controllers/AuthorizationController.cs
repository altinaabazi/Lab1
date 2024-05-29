using Lab1_Backend.Models;
using Lab1_Backend.Services; // Add this line
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Lab1_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthorizationController : ControllerBase
    {
        private readonly IAuthenticationService _authenticationService;

        public AuthorizationController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginModel loginModel)
        {
            var token = await _authenticationService.AuthenticateAndGetJwtToken(loginModel);

            if (token != null)
            {
                return Ok(new { Token = token });
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterModel registerModel)
        {
            var result = await _authenticationService.RegisterUser(registerModel);

            if (result)
            {
                return Ok("Registration successful");
            }
            else
            {
                return BadRequest("Registration failed");
            }
        }

        [HttpPost("logout")]
        public async Task<ActionResult> Logout()
        {
            // Implement logout logic here
            return Ok();
        }

        [HttpPost("assign-role")]
        public async Task<ActionResult> AssignRole(AssignRoleModel assignRoleModel)
        {
            var result = await _authenticationService.AssignRole(assignRoleModel);

            if (result)
            {
                return Ok("Role assigned successfully");
            }
            else
            {
                return BadRequest("Role assignment failed");
            }
        }
    }
}
