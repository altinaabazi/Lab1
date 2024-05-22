﻿using Microsoft.EntityFrameworkCore;

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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Klienti>(entity =>
            {
                entity.HasKey(e => e.ID);
                entity.ToTable("Klienti");
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

            // Map the "GjiniaId" property to the database column
            modelBuilder.Entity<Klienti>()
                .Property(e => e.GjiniaId)
                .IsRequired() // Ensure the property is required
                .HasMaxLength(50) // Set maximum length if needed
                .IsUnicode(false); // Ensure non-unicode if needed

            // Map the "QytetiId" property to the database column
            modelBuilder.Entity<Klienti>()
                .Property(e => e.QytetiId)
                .IsRequired() // Ensure the property is required
                .HasMaxLength(50) // Set maximum length if needed
                .IsUnicode(false); // Ensure non-unicode if needed
        }
    }
}