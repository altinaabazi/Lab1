using Lab1_Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StafiController : ControllerBase
    {
        private readonly StafiContext _dbContext;

        public StafiController(StafiContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Stafi>>> GetStafis()
        {
            var stafiList = await _dbContext.Stafi.ToListAsync();

            if (stafiList == null || stafiList.Count == 0)
            {
                return NotFound();
            }

            return stafiList;
        }

        [HttpGet("{id}")]


        public async Task<ActionResult<Stafi>> GetStafi(int id)
        {
            if (_dbContext.Stafi == null)
            {
                return NotFound();
            }

            var stafi = await _dbContext.Stafi.FindAsync(id);
            if (stafi == null)
            {
                return NotFound();
            }

            return stafi;
        }

        [HttpPost]

        public async Task<ActionResult<Stafi>> PostStafi(Stafi stafi)
        {
            _dbContext.Stafi.Add(stafi);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStafi), new { id = stafi.IDStafi }, stafi);
        }

        [HttpPut]
        public async Task<ActionResult<Stafi>> PutStafi(int id,  Stafi stafi)
        {
            if (id != stafi.IDStafi)
            {
                return BadRequest();
            }
            _dbContext.Entry(stafi).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StafiAvailable(id))
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

        private bool StafiAvailable(int id)
        {
            return (_dbContext.Stafi?.Any(x => x.IDStafi == id)).GetValueOrDefault();
        }

        [HttpDelete("{id}")]
   
        public async Task<ActionResult> DeleteStafi(int id)
        { 
            if(_dbContext.Stafi == null)
            {
                return NotFound();
            }

            var stafi = await _dbContext.Stafi.FindAsync(id);
            if (stafi == null) 
            {
                return NotFound();
            }

            _dbContext.Stafi.Remove(stafi);

            await _dbContext.SaveChangesAsync();

            return Ok();
        }




    }
}
