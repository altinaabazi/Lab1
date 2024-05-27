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
        public DbSet<StafiSektori> StafiSektori { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.Entity<Stafi>(entity =>
            {
                entity.HasKey(e => e.IDStafi);
                entity.ToTable("Stafi");


                entity.Property(e => e.GjiniaId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
                entity.Property(e => e.OrariId)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);
                entity.Property(e => e.SektoriId)
                   .IsRequired()
                   .HasMaxLength(50)
                   .IsUnicode(false);
            });
            modelBuilder.Entity<StafiGjinia>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("StafiGjinia");

            });
            modelBuilder.Entity<StafiOrari>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("StafiOrari");

            });
            modelBuilder.Entity<StafiSektori>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("StafiSektori");

            });
            modelBuilder.Entity<Stafi>()
               .Property(e => e.GjiniaId)
               .IsRequired()
               .HasMaxLength(50)
               .IsUnicode(false);
            modelBuilder.Entity<Stafi>()
               .Property(e => e.OrariId)
               .IsRequired()
               .HasMaxLength(50)
               .IsUnicode(false);
            modelBuilder.Entity<Stafi>()
              .Property(e => e.SektoriId)
              .IsRequired()
              .HasMaxLength(50)
              .IsUnicode(false);
        }



        
    }
}
