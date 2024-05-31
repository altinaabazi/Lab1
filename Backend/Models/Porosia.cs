namespace Lab1_Backend.Models
{
    public class Porosia
    {
        public int ID { get; set; }
        public Klienti Klienti { get; set; }  // Referenca tek klienti
        public List<Libri> Librat { get; set; }  // Lista e librave te porositura
        public double CmimiTotal { get; set; }
        public DateTime Data { get; set; }
    }

}