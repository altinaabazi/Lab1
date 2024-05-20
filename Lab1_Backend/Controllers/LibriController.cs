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
    public class LibriController : ControllerBase
    {
        private readonly LibrariaContext _bookContext;
        private readonly IWebHostEnvironment _env;
        public LibriController(LibrariaContext bookContext, IWebHostEnvironment env)
        {
            _bookContext = bookContext;
            _env = env;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Libri>>> GetLibri()
        {
            if (_bookContext.Libri == null)
            {
                return NotFound();
            }
            return await _bookContext.Libri.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Libri>> GetLibri(int id)
        {
            if (_bookContext.Libri == null)
            {
                return NotFound();
            }
            var book = await _bookContext.Libri.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            return book;

        }

        [HttpPost]
        public async Task<ActionResult<Libri>> PostLibri(Libri book)
        {
            _bookContext.Libri.Add(book);
            await _bookContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLibri), new { id = book.ID }, book);
        }

        [HttpPut]
        public async Task<ActionResult> PutLibri(Libri libri)
        {
            if (libri == null || libri.ID == 0)
            {
                return BadRequest("Invalid object or ID.");
            }

            _bookContext.Entry(libri).State = EntityState.Modified;
            try
            {
                await _bookContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteLibri(int id)
        {
            if (_bookContext.Libri == null)
            {
                return NotFound();
            }
            var book = await _bookContext.Libri.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            _bookContext.Libri.Remove(book);
            await _bookContext.SaveChangesAsync();
            return Ok();
        }
        [HttpPost("SaveFile")]
        public IActionResult SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Request;
                var postedFile = httpRequest.Form.Files[0];

                // Sigurohuni që të krijoni një emër unik për imazhin
                string filename = Guid.NewGuid().ToString() + Path.GetExtension(postedFile.FileName);

                var physicalPath = Path.Combine(_env.ContentRootPath, "Photos", filename);

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                // Kthe rrugën e ruajtjes së imazhit si përgjigje
                return Ok(new { filePath = "/Photos/" + filename });
            }
            catch (Exception ex)
            {
                // Kthe një mesazh gabimi në rast se ndodh një problem gjatë ngarkimit
                return BadRequest(new { message = "Problem gjatë ngarkimit të skedarit: " + ex.Message });
            }
        }
    }
}