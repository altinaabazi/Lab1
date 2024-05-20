/*using Microsoft.AspNetCore.Http;
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
    public class LibrariaController : ControllerBase
    {
        private readonly LibrariaContext _librariaContext;
        public LibrariaController(LibrariaContext librariaContext)
        {
            _librariaContext = librariaContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Libraria>>> GetLibraria()
        {
            if (_librariaContext.libraria == null)
            {
                return NotFound();
            }
            return await _librariaContext.libraria.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Libraria>> GetLibraria(int id)
        {
            if (_librariaContext.libraria == null)
            {
                return NotFound();
            }
            var libraria = await _librariaContext.libraria.FindAsync(id);
            if (libraria == null)
            {
                return NotFound();
            }
            return libraria;

        }

        [HttpPost]
        public async Task<ActionResult<Libraria>> PostLibraria(Libraria libraria)
        {
            _librariaContext.libraria.Add(libraria);
            await _librariaContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLibraria), new { id = libraria.ID }, libraria);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutLibraria(int id, Libraria libraria)
        {
            if (id != libraria.ID)
            {
                return BadRequest();

            }
            _librariaContext.Entry(libraria).State = EntityState.Modified;
            try
            {
                await _librariaContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteLibraria(int id)
        {
            if (_librariaContext.libraria == null)
            {
                return NotFound();
            }
            var libraria = await _librariaContext.libraria.FindAsync(id);
            if (libraria == null)
            {
                return NotFound();
            }
            _librariaContext.libraria.Remove(libraria);
            await _librariaContext.SaveChangesAsync();
            return Ok();
        }
    }
}



*/