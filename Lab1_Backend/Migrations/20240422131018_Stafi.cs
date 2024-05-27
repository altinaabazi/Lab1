using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations.Stafi
{
    /// <inheritdoc />
    public partial class Stafi : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
               name: "Stafi",
               columns: table => new
               {
                   IDStafi = table.Column<int>(type: "int", nullable: false)
                       .Annotation("SqlServer:Identity", "1, 1"),
                   Emri = table.Column<string>(type: "nvarchar(max)", nullable: false),
                   Mbiemri = table.Column<string>(type: "nvarchar(max)", nullable: false),
                   ZipCode = table.Column<int>(type: "int", nullable: false),
                   Gjinia = table.Column<string>(type: "nvarchar(1)", nullable: false),
                   Pervoja = table.Column<string>(type: "nvarchar(max)", nullable: false),

               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_Stafi", x => x.IDStafi);
               });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Stafi");
        }
    }
}
