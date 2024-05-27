using System.ComponentModel.DataAnnotations;

namespace Lab1_Backend.Models
{
    public class StafiOrari
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public String Orari { get; set; }
    }
}
