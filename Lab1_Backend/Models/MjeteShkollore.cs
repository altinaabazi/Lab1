using System.ComponentModel.DataAnnotations;

namespace Lab1_Backend.Models
{
    public class MjeteShkollore
    {
        [Key]
        public int ID { get; set; }
        public string Pershkrimi {  get; set; }
        public string Tipi { get; set; }
        public string ImgPath { get; set; }
        public double Cmimi { get; set; }
        public int Sasia { get; set; }
    }
}
