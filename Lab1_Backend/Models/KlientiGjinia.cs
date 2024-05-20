using System.ComponentModel.DataAnnotations;

namespace Lab1_Backend.Models
{
    public class KlientiGjinia
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Emri { get; set; }

       
    }
}
