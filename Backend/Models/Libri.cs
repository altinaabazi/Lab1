using System.ComponentModel.DataAnnotations.Schema;

namespace Lab1_Backend.Models
{
    public class Libri
    {
        public int ID { get; set; }
        public string ISBN { get; set; }
        public string? Titulli { get; set; }
        public string? Pershkrimi { get; set; }
        public int? AutoriID { get; set; }

        [ForeignKey("AutoriID")]
        public Autori Autori { get; set; }
        public string NrFaqeve { get; set; }
        public string Kategoria { get; set; }
        public int VitiPublikimit { get; set; }
        public string? ShtepiaBotuese { get; set; }
        public string Gjuha { get; set; }
        public double Cmimi { get; set; }
        public int Sasia { get; set; }
        public string ImgPath { get; set; }



    }
}
