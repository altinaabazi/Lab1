using System.ComponentModel.DataAnnotations;

namespace Lab1_Backend.Models
{
    public class KlientiRoli
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Roli { get; set; }


    }
}
