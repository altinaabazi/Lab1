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




/*namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public BookController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        [Route("GetBook")]
        public JsonResult GetBook() {
            string query = "select * from dbo.Libri";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LibraTechConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand=new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();



                }
            }
            return new JsonResult(table);   
        }

        [HttpPost]
        [Route("PostBook")]
        public JsonResult PostBook(Book b)
        {
            string query =@"INSERT INTO dbo.Libri(ID,Titulli,Autori,VitiPublikimit,Cmimi,Sasia)
                         values
                           ('" + b.ID + @"'
                           ,'" + b.Titulli + @"'
                           ,'" + b.Autori + @"'
                           ,'" + b.VitiPublikimit + @"'
                           ,'" + b.Cmimi + @"'
                           ,'" + b.Sasia + @"'
                           

                            )";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LibraTechConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();



                }
            }
            return new JsonResult("Added successfully");
        }

        [HttpPut]
        [Route("PutBook")]
        public JsonResult PutBook(Book b)
        {
            string query = @"UPDATE  dbo.Libri set
               
           
                   Titulli = '" + b.Titulli + @"',
                   Autori = '" + b.Autori + @"',
                   VitiPublikimit = '" + b.VitiPublikimit + @"',
                   Cmimi = '" + b.Cmimi + @"',
                   Sasia = '" + b.Sasia + @"',
                  

                   where ISBN = '" + b.ID + @"'";
            

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LibraTechConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();



                }
            }
            return new JsonResult("Update successfully");
        }

        //[Route("DeleteBook")]
        [HttpDelete("{id}")]
       
        public JsonResult DeleteBook(int id)
        {
            string query = @"delete from  dbo.Libri   
                   where ID = " + id + @"";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("LibraTechConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();



                }
            }
            return new JsonResult("Delete successfully");
        }
    }


    }
*/