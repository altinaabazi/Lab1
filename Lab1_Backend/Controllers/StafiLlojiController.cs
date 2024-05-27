using Lab1_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StafiLlojiController : Controller
    {
        private readonly StafiContext _dbContext;

        public StafiLlojiController(StafiContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<StafiLloji>>> GetStafiLlojiList()
        {
            var stafiLlojiList = await _dbContext.StafiLloji.ToListAsync();
            if (stafiLlojiList == null || !stafiLlojiList.Any())
            {
                return NotFound();
            }
            return Ok(stafiLlojiList);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StafiLloji>> GetStafiLloji(int id)
        {
            var stafilloji = await _dbContext.StafiOrari.FindAsync(id);
            if (stafilloji == null)
            {
                return NotFound();
            }
            return Ok(stafilloji);
        }

        [HttpPost]
        public async Task<ActionResult<StafiLloji>> PostLloji(StafiLloji stafilloji)
        {
            _dbContext.StafiLloji.Add(stafilloji);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetStafiLloji), new { id = stafilloji.Id }, stafilloji);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutLloji(int id, StafiLloji stafilloji)
        {
            if (id != stafilloji.Id)
            {
                return BadRequest();
            }
            _dbContext.Entry(stafilloji).State = EntityState.Modified;
            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StafiLlojiExists(id))
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
        public async Task<IActionResult> DeleteStafiLloji(int id)
        {
            var stafilloji = await _dbContext.StafiLloji.FindAsync(id);
            if (stafilloji == null)
            {
                return NotFound();
            }
            _dbContext.StafiLloji.Remove(stafilloji);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }

        private bool StafiLlojiExists(int id)
        {
            return _dbContext.StafiLloji.Any(e => e.Id == id);
        }


    }
}
