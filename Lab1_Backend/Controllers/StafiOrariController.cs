using Lab1_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StafiOrariController : Controller
    {
        private readonly StafiContext _dbContext;

        public StafiOrariController(StafiContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<StafiOrari>>> GetStafiOrariList()
        {
            var stafiOrariList = await _dbContext.StafiOrari.ToListAsync();
            if (stafiOrariList == null || !stafiOrariList.Any())
            {
                return NotFound();
            }
            return Ok(stafiOrariList);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StafiOrari>> GetStafiOrari(int id)
        {
            var stafiorari = await _dbContext.StafiOrari.FindAsync(id);
            if (stafiorari == null)
            {
                return NotFound();
            }
            return Ok(stafiorari);
        }

        [HttpPost]
        public async Task<ActionResult<StafiOrari>> PostOrari(StafiOrari stafiorari)
        {
            _dbContext.StafiOrari.Add(stafiorari);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetStafiOrari), new { id = stafiorari.Id }, stafiorari);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrari(int id, StafiOrari stafiorari)
        {
            if (id != stafiorari.Id)
            {
                return BadRequest();
            }
            _dbContext.Entry(stafiorari).State = EntityState.Modified;
            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StafiOrariExists(id))
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
        public async Task<IActionResult> DeleteStafiOrari(int id)
        {
            var stafiorari = await _dbContext.StafiOrari.FindAsync(id);
            if (stafiorari == null)
            {
                return NotFound();
            }
            _dbContext.StafiOrari.Remove(stafiorari);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }

        private bool StafiOrariExists(int id)
        {
            return _dbContext.StafiOrari.Any(e => e.Id == id);
        }


    }
}
