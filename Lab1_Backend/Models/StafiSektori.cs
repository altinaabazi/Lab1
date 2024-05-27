using System.ComponentModel.DataAnnotations;

namespace Lab1_Backend.Models
{
    public class StafiSektori
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Sektori { get; set; }
    }
}
