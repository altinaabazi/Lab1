
using Microsoft.EntityFrameworkCore;
namespace Lab1_Backend.Models
{
    public class LibrariaContext : DbContext
    {
        public LibrariaContext(DbContextOptions<LibrariaContext> options) : base(options)
        {

        }
        public DbSet<Libraria> libraria { get; set; }
        public DbSet<MjeteShkollore> MjeteShkollore { get; set; }
        public DbSet<Tipi> Tipi { get; set; }

        public DbSet<Libri> Libri { get; set; }

        public DbSet<Autori> Autori { get; set; }
        public DbSet<QytetiLibraria> QytetiLibraria{ get; set; }
        public DbSet<LokacioniLibraria> LokacioniLibraria { get; set; }
        public DbSet<Furnizimi> Furnizimi { get; set; }
        public DbSet<DimensionetMSh> DimensionetMSh { get; set; }
        public DbSet<ShtetiMSh> ShtetiMSh { get; set; }
<<<<<<< HEAD
        public DbSet<NgjyraMSh> NgjyraMSh { get; set; }
        public DbSet<ProdhuesiMSh> ProdhuesiMSh { get; set; }
        public DbSet<ShtepiaBotuese> ShtepiaBotuese { get; set; }
        public DbSet<Gjuha> Gjuha { get; set; }
        public DbSet<Kategoria> Kategoria { get; set; }
        public DbSet<NrFaqeve> NrFaqeve { get; set; }






=======
        public DbSet<NjesiaMSh> NjesiaMSh { get; set; }
>>>>>>> f61140e16cebe2ce7f2dd11e722a631b74781b5e

        public DbSet<ProdhuesiMSh> ProdhuesiMSh { get; set; }
      

    }
}