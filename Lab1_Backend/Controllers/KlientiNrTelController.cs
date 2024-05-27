/*using Lab1_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KlientiNrTelController : ControllerBase
    {
        private readonly KlientiContext _dbContext;

        public KlientiNrTelController(KlientiContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<KlientiNrTel>>> GetKlientiNrTelList()
        {
            var klientinrtelList = await _dbContext.KlientiNrTel.ToListAsync();
            if (klientinrtelList == null || !klientinrtelList.Any())
            {
                return NotFound();
            }
            return Ok(klientinrtelList);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<KlientiNrTel>> GetKlientiNrTel(int id)
        {
            var klientinrtel = await _dbContext.KlientiNrTel.FindAsync(id);
            if (klientinrtel == null)
            {
                return NotFound();
            }
            return Ok(klientinrtel);
        }

        [HttpPost]
        public async Task<ActionResult<KlientiNrTel>> PostNrTel(KlientiNrTel klientinrtel)
        {
            _dbContext.KlientiNrTel.Add(klientinrtel);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetKlientiNrTel), new { id = klientinrtel.Id }, klientinrtel);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutNrTel(int id, KlientiNrTel klientinrtel)
        {
            if (id != klientinrtel.Id)
            {
                return BadRequest();
            }
            _dbContext.Entry(klientinrtel).State = EntityState.Modified;
            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KlientiNrTelExists(id))
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
        public async Task<IActionResult> DeleteKlientiNrTel(int id)
        {
            var klientinrtel = await _dbContext.KlientiNrTel.FindAsync(id);
            if (klientinrtel == null)
            {
                return NotFound();
            }
            _dbContext.KlientiNrTel.Remove(klientinrtel);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }

        private bool KlientiNrTelExists(int id)
        {
            return _dbContext.KlientiNrTel.Any(e => e.Id == id);
        }
    }
}
*/