using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Net;
using System.Net.Http;
using System.Data.SqlClient;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KlientiController : ControllerBase
    {
        /*SqlConnection LibraTechConn = new SqlConnection(ConfigurationManager.ConnectionString["LibraTechConn"].ConnectionString);*/


        private readonly IConfiguration _configuration;
        public KlientiController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetKlienti")]
        public JsonResult GetKlienti()
        {
            string query = "SELECT ID, Emri, Mbiemri, Email FROM Klienti";
            // Modify the query to retrieve only necessary fields
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
            return new JsonResult(table);
        }


        [HttpPost]
        [Route("PostKlienti")]
        public IActionResult PostKlienti([FromBody] Klienti k)
        {
            try
            {
                string query = @"INSERT INTO Klienti (Emri, Mbiemri, Email, Password)
                 VALUES (@firstName, @lastName, @email, @password)";

                string sqlDataSource = _configuration.GetConnectionString("LibraTechConn");
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@firstName", k.Emri);
                        myCommand.Parameters.AddWithValue("@lastName", k.Mbiemri);
                        myCommand.Parameters.AddWithValue("@email", k.Email);
                        myCommand.Parameters.AddWithValue("@password", k.Password);
                        myCon.Open();
                        myCommand.ExecuteNonQuery();
                        myCon.Close();
                    }
                }
                return Ok("Registration successful");
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error registering user: {ex.Message}");
            }
        }



        [HttpPost]
        [Route("Login")]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            try
            {
                // Query your database to check if the provided credentials are valid
                string query = @"SELECT ID FROM Klienti WHERE Email = @Email AND Password = @Password";
                string sqlDataSource = _configuration.GetConnectionString("LibraTechConn");

                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@Email", loginModel.Email);
                        myCommand.Parameters.AddWithValue("@Password", loginModel.Password);
                        myCon.Open();
                        var result = myCommand.ExecuteScalar();
                        myCon.Close();

                        if (result != null)
                        {
                            // Authentication successful
                            // Here, you can create a session or issue a token to the user
                            return Ok("Login successful");
                        }
                        else
                        {
                            // Authentication failed
                            return Unauthorized("Invalid email or password");
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error during login: {ex.Message}");
            }
        }




        [HttpPut]
        [Route("PutKlienti")]
        public JsonResult PutKlienti(Klienti k)
        {
            string query = @"UPDATE Klienti SET 
                      Emri = @Emri,
                      Mbiemri = @Mbiemri,
                      Email = @Email
                      -- Add other fields here if needed
                      WHERE ID = @ID";

            string sqlDataSource = _configuration.GetConnectionString("LibraTechConn");
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Emri", k.Emri);
                    myCommand.Parameters.AddWithValue("@Mbiemri", k.Mbiemri);
                    myCommand.Parameters.AddWithValue("@Email", k.Email);
                    myCommand.Parameters.AddWithValue("@ID", k.ID);
                    // Add parameters for other fields if needed
                    myCon.Open();
                    myCommand.ExecuteNonQuery();
                    myCon.Close();
                }
            }
            return new JsonResult("Updated successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult DeleteKlienti(int id)
        {
            string query = @"DELETE FROM Klienti WHERE ID = @ID";
                
            string sqlDataSource = _configuration.GetConnectionString("LibraTechConn");
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ID", id);
                    myCon.Open();
                    myCommand.ExecuteNonQuery();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted successfully");
        }
    }
}
