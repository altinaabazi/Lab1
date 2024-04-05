using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Lab1_Backend.Models;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KlientiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public KlientiController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetKlienti")]
        public JsonResult GetKlienti()
        {
            string query = "SELECT * FROM dbo.Klienti";
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
            return new JsonResult(table);
        }

        [HttpPost]
        [Route("PostKlienti")]
        public JsonResult PostKlienti(Klienti k)
        {
            string query = @"INSERT INTO dbo.Klienti (Emri, Mbiemri, Datelindja, Email, Qyteti, Rruga, ZipCode, LibrariaID)
                              VALUES 
                                       ('" + k.Emri + @"', 
                                       ,'" + k.Mbiemri + @"'
                                       ,'" + k.Datelindja.ToString("yyyy-MM-dd") + @"'
                                       ,'" + k.Email + @"'
                                       ,'" + k.Qyteti + @"'
                                       ,'" + k.Rruga + @"'
                                       ,'" + k.ZipCode + @"'
                                       ,'" + k.LibrariaID + @"'
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
        [Route("PutKlienti")]
        public JsonResult PutKlienti(Klienti k)
        {
            string query = @"UPDATE dbo.Klienti SET 
                              Emri = '" + k.Emri + @"',
                              Mbiemri = '" + k.Mbiemri + @"',
                              Datelindja = '" + k.Datelindja.ToString("yyyy-MM-dd") + @"',
                              Email = '" + k.Email + @"',
                              Qyteti = '" + k.Qyteti + @"',
                              Rruga = '" + k.Rruga + @"',
                              ZipCode = '" + k.ZipCode + @"',
                              LibrariaID = '" + k.LibrariaID + @"' 
                              WHERE ID = '" + k.ID + @"'";

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
            return new JsonResult("Updated successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult DeleteKlienti(int id)
        {
            string query = @"DELETE FROM dbo.Klienti WHERE ID = " + id + @"";
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
            return new JsonResult("Deleted successfully");
        }
    }
}
