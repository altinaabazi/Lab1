using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PorosiaController : ControllerBase
    {
        private readonly LibrariaContext _context; // MyDbContext është konteksti i bazës së të dhënave

        public PorosiaController(LibrariaContext context)
        {
            _context = context;
        }

        // GET: api/Porosia
        [HttpGet]
        public IEnumerable<Porosia> GetPorosite()
        {
            return _context.Porosia;
        }

        // GET: api/Porosia/5
        [HttpGet("{id}")]
        public IActionResult GetPorosia(int id)
        {
            var porosia = _context.Porosia.Find(id);

            if (porosia == null)
            {
                return NotFound();
            }

            return Ok(porosia);
        }

        // POST: api/Porosia
        [HttpPost]
        public IActionResult PostPorosia(Porosia porosia)
        {
            porosia.Data = DateTime.Now; // Vendos datën aktuale për porosinë

            _context.Porosia.Add(porosia);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetPorosia), new { id = porosia.ID }, porosia);
        }

        // PUT: api/Porosia/5
        [HttpPut("{id}")]
        public IActionResult PutPorosia(int id, Porosia porosia)
        {
            if (id != porosia.ID)
            {
                return BadRequest();
            }

            _context.Entry(porosia).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/Porosia/5
        [HttpDelete("{id}")]
        public IActionResult DeletePorosia(int id)
        {
            var porosia = _context.Porosia.Find(id);

            if (porosia == null)
            {
                return NotFound();
            }

            _context.Porosia.Remove(porosia);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
