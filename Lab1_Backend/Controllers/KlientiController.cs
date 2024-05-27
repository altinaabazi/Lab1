using Lab1_Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KlientiController : ControllerBase
    {
        private readonly KlientiContext _dbContext;
        public KlientiController(KlientiContext dbContext)
        {
            _dbContext = dbContext;
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

        /*[HttpGet]
        public async Task<ActionResult<IEnumerable<Klienti>>> GetKlients()
        {
            var klientiList = await _dbContext.Klienti
                .Include(k => k.GjiniaId) // Include the related Gjinia entity
                .ToListAsync();

            if (klientiList == null || !klientiList.Any())
            {
                return NotFound();
            }

            return klientiList;
        }
        */

        /*[HttpGet]
        public async Task<ActionResult<IEnumerable<Klienti>>> GetKlients()
        {
            if (_dbContext.Klienti == null)
            {
                return NotFound();
            }
            return await _dbContext.Klienti.ToListAsync();
        }*/

        [HttpGet("{id}")]
        public async Task<ActionResult<Klienti>> GetKlienti(int id)
        {
            if (_dbContext.Klienti == null)
            {
                return NotFound();
            }

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
        /*post per login*/
        [HttpPost("login")]
        public async Task<ActionResult<Klienti>> Login(LoginModel loginModel)
        {
            // Find the user in the database based on the provided email
            var user = await _dbContext.Klienti.FirstOrDefaultAsync(x => x.Email == loginModel.Email);

            // Check if the user exists and if the provided password matches the stored password
            if (user != null && user.Password == loginModel.Password)
            {
                // If authentication is successful, return the user data
                return Ok(user);
            }
            else
            {
                // If authentication fails (incorrect email or password), return Unauthorized status
                return Unauthorized();
            }
        }

        [HttpPut]
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
                if (!KlientiAvailable(id))
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
        private bool KlientiAvailable(int id)
        {
            return (_dbContext.Klienti?.Any(x => x.ID == id)).GetValueOrDefault();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteKlienti(int id)
        {
            if (_dbContext.Klienti == null)
            {
                return NotFound();
            }
            var klienti = await _dbContext.Klienti.FindAsync(id);
            if (klienti == null)
            {
                return NotFound();
            }

            _dbContext.Klienti.Remove(klienti);

            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}