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
    public class StafiController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public StafiController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Get all staff
        [HttpGet]
        [Route("GetStafi")]
        public JsonResult GetStafi()
        {
            string query = "select * from dbo.Stafi";
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

        // Add a new staff member
        [HttpPost]
        [Route("PostStafi")]
        public JsonResult PostStafi(Stafi s)
        {
            
            string query = @"INSERT INTO dbo.Stafi (Emri, Mbiemri, ZipCode, Gjinia, Pervoja, IDLibrari)
                              VALUES 

                                       ('" + s.Emri + @"', 
                                       ,'" + s.Mbiemri + @"'
                                       ,'" + s.ZipCode + @" 
                                       ,'" + s.Gjinia + @"'   
                                       ,'" + s.Pervoja + @"'
                                       ,'" + s.IDLibrari + @"
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

        // Update a staff member
        [HttpPut]
        [Route("PutStafi")]
        public JsonResult PutStafi(Stafi s)
        {
            string query = @"UPDATE  dbo.Stafi SET 
                             
                              Emri = '" + s.Emri + @"'
                              Mbiemri = '"+s.Mbiemri + @"' 
                              ZipCode = '"+s.ZipCode + @"' 
                              Gjinia = '"+s.Gjinia + @"'
                              Pervoja = '"+s.Pervoja + @"' 
                              IDLibrari = '"+s.IDLibrari+ @"' 
                              WHERE IDStafi = '"+s.IDStafi + @"'";

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

        // Delete a staff member
        [HttpDelete("{id}")]
        public JsonResult DeleteStafi(int id)
        {
            string query = @"DELETE FROM dbo.Stafi WHERE IDStafi= " + id + @"";
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
