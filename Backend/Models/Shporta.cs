using System.ComponentModel.DataAnnotations;

namespace Lab1_Backend.Models
{
    public class Shporta
    {
        [Key]
        public int ID { get; set; }
        public int KlientiID { get; set; }
        public int LibriID { get; set; }
        public int MjeteShkolloreID { get; set; }
        public int Sasia { get; set; }
        public DateTime DataShtimit { get; set; }

        public virtual Klienti Klienti { get; set; }
        public virtual Libri Libri { get; set; }
        public virtual MjeteShkollore MjeteShkollore { get; set; }
    }
}
