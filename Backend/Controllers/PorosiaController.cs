using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lab1_Backend.Models;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PorosiaController : ControllerBase
    {
        private readonly PorosiaContext _context;

        public PorosiaController(PorosiaContext context)
        {
            _context = context;
        }

        // GET: api/Porosia
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Porosia>>> GetPorosite()
        {
            return await _context.Porosite.ToListAsync();
        }

        // GET: api/Porosia/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Porosia>> GetPorosia(int id)
        {
            var porosia = await _context.Porosite.FindAsync(id);

            if (porosia == null)
            {
                return NotFound();
            }

            return porosia;
        }

        // POST: api/Porosia
        [HttpPost]
        public async Task<ActionResult<Porosia>> PostPorosia(Porosia porosia)
        {
            _context.Porosite.Add(porosia);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPorosia), new { id = porosia.ID }, porosia);
        }

        // DELETE: api/Porosia/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePorosia(int id)
        {
            var porosia = await _context.Porosite.FindAsync(id);
            if (porosia == null)
            {
                return NotFound();
            }

            _context.Porosite.Remove(porosia);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
