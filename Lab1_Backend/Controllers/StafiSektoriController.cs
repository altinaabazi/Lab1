using Lab1_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StafiSektoriController : Controller
    {
        private readonly StafiContext _dbContext;

        public StafiSektoriController(StafiContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<StafiSektori>>> GetStafiSektoriList()
        {
            var stafiSektoriList = await _dbContext.StafiSektori.ToListAsync();
            if (stafiSektoriList == null || !stafiSektoriList.Any())
            {
                return NotFound();
            }
            return Ok(stafiSektoriList);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StafiSektori>> GetStafiSektori(int id)
        {
            var stafisektori = await _dbContext.StafiSektori.FindAsync(id);
            if (stafisektori == null)
            {
                return NotFound();
            }
            return Ok(stafisektori);
        }

        [HttpPost]
        public async Task<ActionResult<StafiSektori>> PostSektori(StafiSektori stafisektori)
        {
            _dbContext.StafiSektori.Add(stafisektori);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetStafiSektori), new { id = stafisektori.Id }, stafisektori);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutSektori(int id, StafiSektori stafisektori)
        {
            if (id != stafisektori.Id)
            {
                return BadRequest();
            }
            _dbContext.Entry(stafisektori).State = EntityState.Modified;
            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StafiSektoriExists(id))
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
        public async Task<IActionResult> DeleteStafiSektori(int id)
        {
            var stafisektori = await _dbContext.StafiSektori.FindAsync(id);
            if (stafisektori == null)
            {
                return NotFound();
            }
            _dbContext.StafiSektori.Remove(stafisektori);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }

        private bool StafiSektoriExists(int id)
        {
            return _dbContext.StafiSektori.Any(e => e.Id == id);
        }


    }
}
