using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations.Klienti
{
    /// <inheritdoc />
    public partial class AddKlientiNrTel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "NrTelId",
                table: "Klienti",
                type: "int",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "RoliId",
                table: "Klienti",
                type: "int",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "KlientiNrTel",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Hyrja = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KlientiNrTel", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "KlientiNrTel");

            migrationBuilder.DropColumn(
                name: "NrTelId",
                table: "Klienti");

            migrationBuilder.DropColumn(
                name: "RoliId",
                table: "Klienti");
        }
    }
}
