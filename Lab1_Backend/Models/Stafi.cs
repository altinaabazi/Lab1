namespace Lab1_Backend.Models
{
    public class Stafi
    {
        public int IDStafi { get; set; }
        public string Emri { get; set; }
        public string Mbiemri { get; set; }
        public int ZipCode { get; set; }
        public char Gjinia { get; set; }
        public string Pervoja { get; set; }
        public int? IDLibrari { get; set; } // Assuming IDLibrari can be null if not all staff are linked to a library
    }
}
