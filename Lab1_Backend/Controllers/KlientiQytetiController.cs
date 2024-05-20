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
    public class KlientiQytetiController : ControllerBase
    {
        private readonly KlientiContext _dbContext;
        public KlientiQytetiController(KlientiContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<KlientiQyteti>>> GetKlientiQytetiList()
        {
            var klientiqytetiList = await _dbContext.KlientiQyteti.ToListAsync();
            if (klientiqytetiList == null || !klientiqytetiList.Any())
            {
                return NotFound();
            }
            return Ok(klientiqytetiList);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<KlientiQyteti>> GetKlientiQyteti(int id)
        {
            var klientiqyteti = await _dbContext.KlientiQyteti.FindAsync(id);
            if (klientiqyteti == null)
            {
                return NotFound();
            }
            return Ok(klientiqyteti);
        }

        [HttpPost]
        public async Task<ActionResult<KlientiQyteti>> PostKlientiQyteti(KlientiQyteti klientiqyteti)
        {
            _dbContext.KlientiQyteti.Add(klientiqyteti);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetKlientiQyteti), new { id = klientiqyteti.Id }, klientiqyteti);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutQyteti(int id, KlientiQyteti klientiqyteti)
        {
            if (id != klientiqyteti.Id)
            {
                return BadRequest();
            }
            _dbContext.Entry(klientiqyteti).State = EntityState.Modified;
            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KlientiQytetiExists(id))
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKlientiQyteti(int id)
        {
            var klientiqyteti = await _dbContext.KlientiQyteti.FindAsync(id);
            if (klientiqyteti == null)
            {
                return NotFound();
            }
            _dbContext.KlientiQyteti.Remove(klientiqyteti);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }

        private bool KlientiQytetiExists(int id)
        {
            return _dbContext.KlientiQyteti.Any(e => e.Id == id);
        }
    }
}
