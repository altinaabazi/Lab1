using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;


namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NrFaqeveController : ControllerBase
    {
        private readonly LibrariaContext _context;

        public NrFaqeveController(LibrariaContext context)
        {
            _context = context;
        }

        // GET: api/NrFaqeve
        [HttpGet]
        public ActionResult<IEnumerable<NrFaqeve>> GetNrFaqeve()
        {
            return _context.NrFaqeve.ToList();
        }

        // GET: api/NrFaqeve/5
        [HttpGet("{id}")]
        public ActionResult<NrFaqeve> GetNrFaqeve(int id)
        {
            var gj = _context.NrFaqeve.Find(id);

            if (gj == null)
            {
                return NotFound();
            }

            return gj;
        }



        // POST: api/NrFaqeve
        [HttpPost]
        public async Task<ActionResult<NrFaqeve>> PostGjuha(NrFaqeve n)
        {
            _context.NrFaqeve.Add(n);
            await _context.SaveChangesAsync();


            return CreatedAtAction(nameof(GetNrFaqeve), new { id = n.ID }, n);
        }
        [HttpPut]
        public IActionResult PutGjuha(NrFaqeve n)
        {
            if (n == null)
            {
                return BadRequest("Invalid object.");
            }



            _context.Entry(n).State = EntityState.Modified;
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


        // DELETE: api/NrFaqeve/5
        [HttpDelete("{id}")]
        public IActionResult DeleteAutori(int id)
        {
            var gj = _context.NrFaqeve.Find(id);
            if (gj == null)
            {
                return NotFound();
            }

            _context.NrFaqeve.Remove(gj);
            _context.SaveChanges();

            return NoContent();
        }
    }
}


