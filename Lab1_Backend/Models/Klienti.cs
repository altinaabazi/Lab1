using System.ComponentModel.DataAnnotations.Schema;

namespace Lab1_Backend.Models
{
    public class Klienti
    {
        public int ID { get; set; }
        public string Emri { get; set; }
        public string Mbiemri { get; set; }

        [ForeignKey("KlientiGjinia")]
        public int GjiniaId { get; set; }

        [ForeignKey("KlientiQyteti")]
        public int QytetiId { get; set; }

        [ForeignKey("KlientiRoli")]
        public int RoliId { get; set; }

        /*[ForeignKey("KlientiNrTel")]
        public int NrTelId { get; set; }*/
        public string Email { get; set; }
        public string Password { get; set; }



    }

}
