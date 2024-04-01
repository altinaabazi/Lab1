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



namespace Lab1_Backend.Controllers
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
            string query = "select * from dbo.Libraria";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DB_BookStoreAppCon");
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
            string query =@"INSERT INTO dbo.Libraria(IDLibrari,Emri,Rruga,Qyteti)
                         values
                           ('" + b.IDLibrari + @"'
                           ,'" + b.Emri + @"'
                           ,'" + b.Rruga + @"'
                           ,'" + b.Qyteti + @"'
                            )";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DB_BookStoreAppCon");
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
            string query = @"UPDATE  dbo.Libraria set
               
                   Emri = '" + b.Emri + @"',
                   Rruga = '" + b.Rruga + @"',
                   Qyteti = '" + b.Qyteti + @"'
                   where IDLibrari = '" + b.IDLibrari + @"'";
            

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DB_BookStoreAppCon");
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
            string query = @"delete from  dbo.Libraria   
                   where IDLibrari = " + id + @"";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DB_BookStoreAppCon");
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
