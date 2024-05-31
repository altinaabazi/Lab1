using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Models
{
    public class PorosiaContext : DbContext
    {
        public PorosiaContext(DbContextOptions<PorosiaContext> options) : base(options)
        {
        }

        public DbSet<Porosia> Porosite { get; set; }
    }
}
