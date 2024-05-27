using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Models
{
    public class StafiContext : DbContext 
    {

        public StafiContext(DbContextOptions<StafiContext> options) : base(options)
        {

        }
        public DbSet<Stafi> Stafi {  get; set; }
        public DbSet<StafiGjinia> StafiGjinia { get; set; }

        public DbSet<StafiOrari> StafiOrari { get; set; }
        public DbSet<StafiLloji> StafiLloji { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder); 

            
            modelBuilder.Entity<Stafi>().HasKey(s => s.IDStafi);
            modelBuilder.Entity<Stafi>().ToTable("Stafi");

        }
    }
}
