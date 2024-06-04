using Lab1_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShportaController : ControllerBase
    {
        private readonly LibrariaContext _context;

        public ShportaController(LibrariaContext context)
        {
            _context = context;
        }

        // GET: api/Shporta
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shporta>>> GetShporta()
        {
            return await _context.Shporta.ToListAsync();
        }

        // POST: api/Shporta
        [HttpPost]
        public async Task<ActionResult<Shporta>> PostShporta(Shporta shporta)
        {
            _context.Shporta.Add(shporta);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetShporta), new { id = shporta.ID }, shporta);
        }

        // DELETE: api/Shporta/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShporta(int id)
        {
            var shporta = await _context.Shporta.FindAsync(id);
            if (shporta == null)
            {
                return NotFound();
            }

            _context.Shporta.Remove(shporta);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
