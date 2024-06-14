using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PorosiaController : ControllerBase
    {
        private readonly LibrariaContext _context;

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


        public class ShportaItem
        {
            public int Klienti { get; set; }
            public int Id { get; set; }
            public bool IsBook { get; set; }
        }
        // POST: api/Porosia
        [HttpPost]
        public async Task<IActionResult> Porosia(List<ShportaItem> resultArray)
        {
            try
            {
                if (resultArray != null)
                {

                    var porosia = new Porosia()
                    {
                        CmimiTotal = 3.4,
                        Data = DateTime.Now,
                        KlientiID = resultArray.Select(e => e.Klienti).FirstOrDefault(),
                        Produktet = resultArray.Select(item => new Produkti
                        {
                            LibriID = item.IsBook ? item.Id : null,
                            MjeteShkolloreID = !item.IsBook ? item.Id : null
                        }).ToList(),
                    };

                    await _context.Porosia.AddAsync(porosia);

                    await _context.SaveChangesAsync();
                }
            }catch(Exception ex)
            {

            }

            return Ok("Orders processed successfully.");
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
