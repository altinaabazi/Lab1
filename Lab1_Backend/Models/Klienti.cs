namespace Lab1_Backend.Models
{
    public class Klienti
    {
        public int ID { get; set; }
        public string Emri { get; set; }
        public string Mbiemri { get; set; }
        public DateTime Datelindja { get; set; }
        public string Email { get; set; }
        public string Qyteti { get; set; }
        public string Rruga { get; set; }
        public int? ZipCode { get; set; }
        public int LibrariaID { get; set; }
    }
}
