namespace Lab1_Backend.Models
{
    public class Libri
    {
        public int ID { get; set; }
        public string ISBN { get; set; }
        public string? Titulli { get; set; }
        public string? Pershkrimi { get; set; }
        public string? Autori { get; set; }
        public int VitiPublikimit { get; set; }
        public string? ShtepiaBotuese { get; set; }
        public double Cmimi { get; set; }
        public int Sasia { get; set; }

        public string ImgPath { get; set; }



    }
}
