using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NgjyraMShController : ControllerBase
    {
        private readonly LibrariaContext _context;

        public NgjyraMShController(LibrariaContext context)
        {
            _context = context;
        }

        // GET: api/Tipi
        [HttpGet]
        public ActionResult<IEnumerable<NgjyraMSh>> GetNgjyra()
        {
            return _context.NgjyraMSh.ToList();
        }

        // GET: api/Tipi/5
        [HttpGet("{id}")]
        public ActionResult<NgjyraMSh> GetNgjyra(int id)
        {
            var ngjyra = _context.NgjyraMSh.Find(id);

            if (ngjyra == null)
            {
                return NotFound();
            }

            return ngjyra;
        }

        // POST: api/Tipi
        [HttpPost]
        public async Task<ActionResult<NgjyraMSh>> PostNgjyra(NgjyraMSh ngjyra)
        {
            _context.NgjyraMSh.Add(ngjyra);
            await _context.SaveChangesAsync();


            return CreatedAtAction(nameof(GetNgjyra), new { id = ngjyra.ID }, ngjyra);
        }
        [HttpPut]
        public IActionResult PutTipi(NgjyraMSh ngjyra)
        {
            if (ngjyra == null)
            {
                return BadRequest("Invalid object.");
            }

      

            _context.Entry(ngjyra).State = EntityState.Modified;
            try
            {
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return NoContent();
        }


        // DELETE: api/Tipi/5
        [HttpDelete("{id}")]
        public IActionResult DeleteNgjyra(int id)
        {
            var ngjyra = _context.NgjyraMSh.Find(id);
            if (ngjyra == null)
            {
                return NotFound();
            }

            _context.NgjyraMSh.Remove(ngjyra);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
