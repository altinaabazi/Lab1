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
    public class BookController : ControllerBase
    {
        private readonly BookContext _bookContext;
        public BookController(BookContext bookContext)
        {
            _bookContext = bookContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBook()
        {
            if (_bookContext.Books == null)
            {
                return NotFound();
            }
            return await _bookContext.Books.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            if (_bookContext.Books == null)
            {
                return NotFound();
            }
            var book = await _bookContext.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            return book;

        }

        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {
            _bookContext.Books.Add(book);
            await _bookContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetBook), new { id = book.ID }, book);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutBook(int id, Book book)
        {
            if (id != book.ID)
            {
                return BadRequest();

            }
            _bookContext.Entry(book).State = EntityState.Modified;
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
        public async Task<ActionResult> DeleteBook(int id)
        {
            if (_bookContext.Books == null)
            {
                return NotFound();
            }
            var book = await _bookContext.Books.FindAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            _bookContext.Books.Remove(book);
            await _bookContext.SaveChangesAsync();
            return Ok();
        }
    }
}



