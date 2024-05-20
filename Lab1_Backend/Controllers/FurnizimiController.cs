using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FurnizimiController : ControllerBase
    {
        private readonly LibrariaContext _context;

        public FurnizimiController(LibrariaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Furnizimi>> GetFurnizimi()
        {
            return _context.Furnizimi.ToList();
        }

        // GET: api/Tipi/5
        [HttpGet("{id}")]
        public ActionResult<Furnizimi> GetFurnizimi(int id)
        {
            var furnizimi = _context.Furnizimi.Find(id);

            if (furnizimi == null)
            {
                return NotFound();
            }

            return furnizimi;
        }

        [HttpPost]
        public async Task<ActionResult<Furnizimi>> PostFurnizmi(Furnizimi furnizimi)
        {
            _context.Furnizimi.Add(furnizimi);
            await _context.SaveChangesAsync();


            return CreatedAtAction(nameof(GetFurnizimi), new { id = furnizimi.ID }, furnizimi);
        }
        [HttpPut]
        public IActionResult PutTipi(Furnizimi furnizimi)
        {
            if (furnizimi == null)
            {
                return BadRequest("Invalid object.");
            }

            _context.Entry(furnizimi).State = EntityState.Modified;
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
        public IActionResult DeleteFurnizimi(int id)
        {
            var furnizimi = _context.Furnizimi.Find(id);
            if (furnizimi == null)
            {
                return NotFound();
            }

            _context.Furnizimi.Remove(furnizimi);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
