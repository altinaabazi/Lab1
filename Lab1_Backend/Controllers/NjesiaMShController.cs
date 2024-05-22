using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NjesiaMShController : ControllerBase
    {
        private readonly LibrariaContext _context;

        public NjesiaMShController(LibrariaContext context)
        {
            _context = context;
        }

        // GET: api/Tipi
        [HttpGet]
        public ActionResult<IEnumerable<NjesiaMSh>> GetNjesia()
        {
            return _context.NjesiaMSh.ToList();
        }

        // GET: api/Tipi/5
        [HttpGet("{id}")]
        public ActionResult<NjesiaMSh> GetNjesia(int id)
        {
            var njesia = _context.NjesiaMSh.Find(id);

            if (njesia == null)
            {
                return NotFound();
            }

            return njesia;
        }

        // POST: api/Tipi
        [HttpPost]
        public async Task<ActionResult<NjesiaMSh>> PostNjesiaMSh(NjesiaMSh njesia)
        {
            _context.NjesiaMSh.Add(njesia);
            await _context.SaveChangesAsync();


            return CreatedAtAction(nameof(GetNjesia), new { id = njesia.ID }, njesia);
        }
        [HttpPut]
        public IActionResult PutNjesia(NjesiaMSh njesia)
        {
            if (njesia == null)
            {
                return BadRequest("Invalid object.");
            }



            _context.Entry(njesia).State = EntityState.Modified;
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
        public IActionResult DeleteNjesia(int id)
        {
            var njesia = _context.NjesiaMSh.Find(id);
            if (njesia == null)
            {
                return NotFound();
            }

            _context.NjesiaMSh.Remove(njesia);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
