﻿using System.ComponentModel.DataAnnotations;

namespace Lab1_Backend.Models
{
    public class StafiGjinia
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Gjinia { get; set; }
        
    }
}
