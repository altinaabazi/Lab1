using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LokacioniLController : ControllerBase
    {
        private readonly LibrariaContext _context;

        public LokacioniLController(LibrariaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<LokacioniLibraria>> GetLokacioni()
        {
            return _context.LokacioniLibraria.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<LokacioniLibraria> GetLokacioniL(int id)
        {
            var lokacioni = _context.LokacioniLibraria.Find(id);

            if (lokacioni == null)
            {
                return NotFound();
            }

            return lokacioni;
        }

        [HttpPost]
        public async Task<ActionResult<LokacioniLibraria>> PostLokacioni(LokacioniLibraria lokacioniLibraria)
        {
            _context.LokacioniLibraria.Add(lokacioniLibraria);
            await _context.SaveChangesAsync();


            return CreatedAtAction(nameof(GetLokacioni), new { id = lokacioniLibraria.ID }, lokacioniLibraria);
        }
        [HttpPut]
        public IActionResult PutLokacioni(LokacioniLibraria lokacioniLibraria)
        {
            if (lokacioniLibraria== null)
            {
                return BadRequest("Invalid object.");
            }

            _context.Entry(lokacioniLibraria).State = EntityState.Modified;
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


        [HttpDelete("{id}")]
        public IActionResult DeleteLokacioniL(int id)
        {
            var lokacioniL = _context.LokacioniLibraria.Find(id);
            if (lokacioniL == null)
            {
                return NotFound();
            }

            _context.LokacioniLibraria.Remove(lokacioniL);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
