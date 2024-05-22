using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations.Libraria
{
    /// <inheritdoc />
    public partial class libriupdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Pershkrimi",
                table: "Libri",
                newName: "Pershrkimi");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Pershrkimi",
                table: "Libri",
                newName: "Pershkrimi");
        }
    }
}
