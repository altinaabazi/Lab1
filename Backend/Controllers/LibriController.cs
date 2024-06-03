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


        [HttpGet("GetAllLibri")]
        public async Task<ActionResult<IEnumerable<Libri>>> GetAllLibri()
        {
            return await _bookContext.Libri.ToListAsync();
        }

        [HttpGet]
        [Route("GetFoto/{id}")]
        public IActionResult GetFoto(int id)
        {
            var libri = _bookContext.Libri.FirstOrDefault(l => l.ID == id);
            if (libri == null || string.IsNullOrEmpty(libri.ImgPath))
            {
                return NotFound();
            }

            var imagePath = Path.Combine("Photos", libri.ImgPath);
            if (!System.IO.File.Exists(imagePath))
            {
                return NotFound();
            }

            var image = System.IO.File.OpenRead(imagePath);
            return File(image, "image/jpeg");
        }

        [HttpGet("TotalLibrat")]
        public async Task<ActionResult<int>> GetTotalLibrat()
        {
            var totalLibrat = await _bookContext.Libri.CountAsync();
            return totalLibrat;
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

        [HttpGet("GetLibratMeTeRinje")]
        public async Task<ActionResult<IEnumerable<Libri>>> GetNewestBooks()
        {
           
            var newestBooks = await _bookContext.Libri.OrderByDescending(l => l.ID).Take(6).ToListAsync();
            if (newestBooks == null)
            {
                return NotFound();
            }
            return newestBooks;
        }
       [HttpGet("kategoria/{kategoria}")]
        public ActionResult<IEnumerable<Libri>> GetLibratByKategoria(string kategoria)
        {
            var librat = _bookContext.Libri.Where(l => l.Kategoria == kategoria).ToList();

            if (librat == null || librat.Count == 0)
            {
                return NotFound();
            }

            return librat;
        }

       
        [HttpPost("SaveFile")]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {

                return new JsonResult("./img.png");
            }
        }
    }
}