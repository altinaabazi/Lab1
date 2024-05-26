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
    public class StafiGjiniaController : ControllerBase
    {
        private readonly StafiContext _dbContext;

        public StafiGjiniaController(StafiContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<StafiGjinia>>> GetStafiGjiniaList()
        {
            var stafiGjiniaList = await _dbContext.StafiGjinia.ToListAsync();
            if (stafiGjiniaList == null || !stafiGjiniaList.Any())
            {
                return NotFound();
            }
            return Ok(stafiGjiniaList);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StafiGjinia>> GetStafiGjinia(int id)
        {
            var stafigjinia = await _dbContext.StafiGjinia.FindAsync(id);
            if (stafigjinia == null)
            {
                return NotFound();
            }
            return Ok(stafigjinia);
        }

        [HttpPost]
        public async Task<ActionResult<StafiGjinia>> PostGjinia(StafiGjinia stafigjinia)
        {
            _dbContext.StafiGjinia.Add(stafigjinia);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetStafiGjinia), new { id = stafigjinia.Id }, stafigjinia);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutGjinia(int id, StafiGjinia stafigjinia)
        {
            if (id != stafigjinia.Id)
            {
                return BadRequest();
            }
            _dbContext.Entry(stafigjinia).State = EntityState.Modified;
            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StafiGjiniaExists(id))
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
        public async Task<IActionResult> DeleteStafiGjinia(int id)
        {
            var stafigjinia = await _dbContext.StafiGjinia.FindAsync(id);
            if (stafigjinia == null)
            {
                return NotFound();
            }
            _dbContext.StafiGjinia.Remove(stafigjinia);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }

        private bool StafiGjiniaExists(int id)
        {
            return _dbContext.StafiGjinia.Any(e => e.Id == id);
        }
    }
}