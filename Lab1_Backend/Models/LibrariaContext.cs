
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
        public DbSet<NjesiaMSh> NjesiaMSh { get; set; }

        public DbSet<ProdhuesiMSh> ProdhuesiMSh { get; set; }
      

    }
}