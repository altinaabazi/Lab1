using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QytetiController : ControllerBase
    {
        private readonly LibrariaContext _context;

        public QytetiController(LibrariaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<QytetiLibraria>> GetQyteti()
        {
            return _context.QytetiLibraria.ToList();
        }

        // GET: api/Qyteti/5
        [HttpGet("{id}")]
        public ActionResult<QytetiLibraria> GetQyteti(int id)
        {
            var qyteti = _context.QytetiLibraria.Find(id);

            if (qyteti == null)
            {
                return NotFound();
            }

            return qyteti;
        }

        [HttpPost]
        public async Task<ActionResult<QytetiLibraria>> PostQyteti(QytetiLibraria qyteti)
        {
            _context.QytetiLibraria.Add(qyteti);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetQyteti), new { id = qyteti.ID }, qyteti);
        }

        [HttpPut("{id}")]
        public IActionResult PutQyteti(int id, QytetiLibraria qyteti)
        {
            if (id != qyteti.ID)
            {
                return BadRequest("ID mismatch.");
            }

            _context.Entry(qyteti).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteQyteti(int id)
        {
            var qyteti = _context.QytetiLibraria.Find(id);
            if (qyteti == null)
            {
                return NotFound();
            }

            _context.QytetiLibraria.Remove(qyteti);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
