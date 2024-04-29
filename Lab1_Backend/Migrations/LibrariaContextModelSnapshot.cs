﻿// <auto-generated />
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Lab1Backend.Migrations
{
    [DbContext(typeof(LibrariaContext))]
    partial class LibrariaContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Lab1_Backend.Models.Autori", b =>
                {
                    b.Property<int>("AutoriID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("AutoriID"));

                    b.Property<string>("Emri")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AutoriID");

                    b.ToTable("Autori");
                });

            modelBuilder.Entity("Lab1_Backend.Models.Libraria", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Emri")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Qyteti")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Rruga")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("libraria");
                });

            modelBuilder.Entity("Lab1_Backend.Models.Libri", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<string>("Autori")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Cmimi")
                        .HasColumnType("float");

                    b.Property<string>("ISBN")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImgPath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pershkrimi")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Sasia")
                        .HasColumnType("int");

                    b.Property<string>("ShtepiaBotuese")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Titulli")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("VitiPublikimit")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Libri");
                });

            modelBuilder.Entity("Lab1_Backend.Models.MjeteShkollore", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ID"));

                    b.Property<double>("Cmimi")
                        .HasColumnType("float");

                    b.Property<string>("ImgPath")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pershkrimi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Sasia")
                        .HasColumnType("int");

                    b.Property<string>("Tipi")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("MjeteShkollore");
                });

            modelBuilder.Entity("Lab1_Backend.Models.Tipi", b =>
                {
                    b.Property<int>("TipiID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TipiID"));

                    b.Property<string>("TipiEmri")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TipiID");

                    b.ToTable("Tipi");
                });
#pragma warning restore 612, 618
        }
    }
}
