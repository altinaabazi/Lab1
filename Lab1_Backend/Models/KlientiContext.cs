using Microsoft.EntityFrameworkCore;

namespace Lab1_Backend.Models
{
    public class KlientiContext : DbContext
    {
        public KlientiContext(DbContextOptions<KlientiContext> options) : base(options)
        {

        }
        
        public DbSet<Klienti> Klienti { get; set; }
        public DbSet<KlientiGjinia> KlientiGjinia { get; set; } // Add DbSet for Gjinia if it's a separate entity
        public DbSet<KlientiQyteti> KlientiQyteti { get; set; }

        public DbSet<KlientiRoli> KlientiRoli { get; set; } 
        /*public DbSet<KlientiNrTel> KlientiNrTel { get; set; }*/



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Klienti>(entity =>
            {
                entity.HasKey(e => e.ID);
                entity.ToTable("Klienti");

                // Map the "Gjinia" property to the database column
                entity.Property(e => e.GjiniaId)
                    .IsRequired() // Ensure the property is required
                    .HasMaxLength(50) // Set maximum length if needed
                    .IsUnicode(false); // Ensure non-unicode if needed
                entity.Property(e => e.QytetiId)
                    .IsRequired() // Ensure the property is required
                    .HasMaxLength(50) // Set maximum length if needed
                    .IsUnicode(false); // Ensure non-unicode if needed
                entity.Property(e => e.RoliId)
                    .IsRequired() // Ensure the property is required
                    .HasMaxLength(50) // Set maximum length if needed
                    .IsUnicode(false); // Ensure non-unicode if needed
               /* entity.Property(e => e.NrTelId)
                    .IsRequired() // Ensure the property is required
                    .HasMaxLength(50) // Set maximum length if needed
                    .IsUnicode(false); // Ensure non-unicode if needed  */
            });
     

            modelBuilder.Entity<KlientiGjinia>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("KlientiGjinia");
                // Add additional configurations if needed
            });

            modelBuilder.Entity<KlientiQyteti>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("KlientiQyteti");
                // Add additional configurations if needed
            });
            modelBuilder.Entity<KlientiRoli>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("KlientiRoli");
                // Add additional configurations if needed
            });
            /*modelBuilder.Entity<KlientiNrTel>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.ToTable("KlientiNrTel");
                // Add additional configurations if needed
            });*/

            // Map the "GjiniaId" property to the database column
            modelBuilder.Entity<Klienti>()
                .Property(e => e.GjiniaId)
                .IsRequired() // Ensure the property is required
                .HasMaxLength(50) // Set maximum length if needed
                .IsUnicode(false); // Ensure non-unicode if needed
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
           /* modelBuilder.Entity<Klienti>()
                .Property(e => e.NrTelId)
                .IsRequired()
                .HasMaxLength(50)
                .IsUnicode(false); */
        }
    }
}
