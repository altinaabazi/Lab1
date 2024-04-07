﻿// <auto-generated />
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Lab1Backend.Migrations
{
    [DbContext(typeof(BookContext))]
    [Migration("20240407003905_initial")]
    partial class initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Lab1_Backend.Models.Book", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Autori")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Cmimi")
                        .HasColumnType("float");

                    b.Property<int>("Sasia")
                        .HasColumnType("int");

                    b.Property<string>("Titulli")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("VitiPublikimit")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Books");
                });
#pragma warning restore 612, 618
        }
    }
}
