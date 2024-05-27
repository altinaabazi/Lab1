using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations.Klienti
{
    /// <inheritdoc />
    public partial class AddKlientiRoli : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            /*migrationBuilder.CreateTable(
                name: "KlientiRoli",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Mbiemri = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GjiniaId = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false),
                    QytetiId = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false),
                    RoliId = table.Column<int>(type: "int", unicode: false, maxLength: 50, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Klienti", x => x.ID);
                });*/

            /*migrationBuilder.CreateTable(
                name: "KlientiGjinia",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KlientiGjinia", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "KlientiQyteti",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KlientiQyteti", x => x.Id);
                });*/

            migrationBuilder.CreateTable(
                name: "KlientiRoli",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KlientiRoli", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            /*migrationBuilder.DropTable(
                name: "Klienti");

            migrationBuilder.DropTable(
                name: "KlientiGjinia");

            migrationBuilder.DropTable(
                name: "KlientiQyteti");*/

            migrationBuilder.DropTable(
                name: "KlientiRoli");
        }
    }
}
