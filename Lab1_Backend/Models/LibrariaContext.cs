
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

    }
}