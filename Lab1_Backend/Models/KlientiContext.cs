using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Models
{
    public class KlientiContext : DbContext
    {
        public KlientiContext(DbContextOptions<KlientiContext> options) : base(options)
        {

        }
        
        public DbSet<Klienti> Klienti { get; set; }
        public DbSet<KlientiGjinia> KlientiGjinia { get; set; } 
        public DbSet<KlientiQyteti> KlientiQyteti { get; set; }

        public DbSet<KlientiRoli> KlientiRoli { get; set; } 
      



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Klienti>(entity =>
            {
                entity.HasKey(e => e.ID);
                entity.ToTable("Klienti");

                
                entity.Property(e => e.GjiniaId)
                    .IsRequired() 
                    .HasMaxLength(50) 
                    .IsUnicode(false); 
                entity.Property(e => e.QytetiId)
                    .IsRequired() 
                    .HasMaxLength(50)
                    .IsUnicode(false); 
                entity.Property(e => e.RoliId)
                    .IsRequired()
                    .HasMaxLength(50) 
                    .IsUnicode(false); 
               
            });
     

            modelBuilder.Entity<KlientiGjinia>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("KlientiGjinia");
               
            });

            modelBuilder.Entity<KlientiQyteti>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("KlientiQyteti");
                
            });
            modelBuilder.Entity<KlientiRoli>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("KlientiRoli");
               
            });
           
            modelBuilder.Entity<Klienti>()
                .Property(e => e.GjiniaId)
                .IsRequired() 
                .HasMaxLength(50) 
                .IsUnicode(false); 
           modelBuilder.Entity<Klienti>()
                .Property(e => e.QytetiId)
                .IsRequired() 
                .HasMaxLength(50) 
                .IsUnicode(false); 
            modelBuilder.Entity<Klienti>()
                .Property(e => e.RoliId)
                .IsRequired() 
                .HasMaxLength(50)
                .IsUnicode(false);
           
        }
    }
}
