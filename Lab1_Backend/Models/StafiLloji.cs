using System.ComponentModel.DataAnnotations;

namespace Lab1_Backend.Models
{
    public class StafiLloji
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Lloji { get; set; }
    }
}
