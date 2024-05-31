﻿/*using Lab1_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KlientiGjiniaController : ControllerBase
    {
        private readonly LibrariaContext _dbContext;

        public KlientiGjiniaController(LibrariaContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<KlientiGjinia>>> GetKlientiGjiniaList()
        {
            var klientigjiniaList = await _dbContext.KlientiGjinia.ToListAsync();
            if (klientigjiniaList == null || !klientigjiniaList.Any())
            {
                return NotFound();
            }
            return Ok(klientigjiniaList);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<KlientiGjinia>> GetKlientiGjinia(int id)
        {
            var klientigjinia = await _dbContext.KlientiGjinia.FindAsync(id);
            if (klientigjinia == null)
            {
                return NotFound();
            }
            return Ok(klientigjinia);
        }

        [HttpPost]
        public async Task<ActionResult<KlientiGjinia>> PostGjinia(KlientiGjinia klientigjinia)
        {
            _dbContext.KlientiGjinia.Add(klientigjinia);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetKlientiGjinia), new { id = klientigjinia.Id }, klientigjinia);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutGjinia(int id, KlientiGjinia klientigjinia)
        {
            if (id != klientigjinia.Id)
            {
                return BadRequest();
            }
            _dbContext.Entry(klientigjinia).State = EntityState.Modified;
            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KlientiGjiniaExists(id))
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
        public async Task<IActionResult> DeleteKlientiGjinia(int id)
        {
            var klientigjinia = await _dbContext.KlientiGjinia.FindAsync(id);
            if (klientigjinia == null)
            {
                return NotFound();
            }
            _dbContext.KlientiGjinia.Remove(klientigjinia);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }

        private bool KlientiGjiniaExists(int id)
        {
            return _dbContext.KlientiGjinia.Any(e => e.Id == id);
        }
    }
}
*/
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
    public class KlientiGjiniaController : ControllerBase
    {
        private readonly LibrariaContext _context;

        public KlientiGjiniaController(LibrariaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<KlientiGjinia>> GetKlientiGjinia()
        {
            return _context.KlientiGjinia.ToList();
        }


        [HttpGet("{id}")]
        public ActionResult<KlientiGjinia> GetKlientiGjinia(int id)
        {
            var gj = _context.KlientiGjinia.Find(id);

            if (gj == null)
            {
                return NotFound();
            }

            return gj;
        }




        [HttpPost]
        public async Task<ActionResult<KlientiGjinia>> PostKlientiGjinia(KlientiGjinia s)
        {
            _context.KlientiGjinia.Add(s);
            await _context.SaveChangesAsync();


            return CreatedAtAction(nameof(GetKlientiGjinia), new { id = s.Id }, s);
        }
        [HttpPut]
        public IActionResult PutKlientiGjinia(KlientiGjinia s)
        {
            if (s == null)
            {
                return BadRequest("Invalid object.");
            }



            _context.Entry(s).State = EntityState.Modified;
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
        public IActionResult DeleteKlientiGjinia(int id)
        {
            var gj = _context.KlientiGjinia.Find(id);
            if (gj == null)
            {
                return NotFound();
            }

            _context.KlientiGjinia.Remove(gj);
            _context.SaveChanges();

            return NoContent();
        }
    }
}

