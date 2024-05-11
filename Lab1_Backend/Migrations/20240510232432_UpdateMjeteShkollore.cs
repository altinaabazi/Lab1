using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations.Libraria
{
    /// <inheritdoc />
    public partial class UpdateMjeteShkollore : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DimensionetMSh",
                table: "MjeteShkollore",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NgjyraMSh",
                table: "MjeteShkollore",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProdhuesiMSh",
                table: "MjeteShkollore",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ShtetiMSh",
                table: "MjeteShkollore",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "DimensionetMSh",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Dimensione = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DimensionetMSh", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "NgjyraMSh",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ngjyra = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NgjyraMSh", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ProdhuesiMSh",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Prodhuesi = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProdhuesiMSh", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ShtetiMSh",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Shteti = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShtetiMSh", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DimensionetMSh");

            migrationBuilder.DropTable(
                name: "NgjyraMSh");

            migrationBuilder.DropTable(
                name: "ProdhuesiMSh");

            migrationBuilder.DropTable(
                name: "ShtetiMSh");

            migrationBuilder.DropColumn(
                name: "DimensionetMSh",
                table: "MjeteShkollore");

            migrationBuilder.DropColumn(
                name: "NgjyraMSh",
                table: "MjeteShkollore");

            migrationBuilder.DropColumn(
                name: "ProdhuesiMSh",
                table: "MjeteShkollore");

            migrationBuilder.DropColumn(
                name: "ShtetiMSh",
                table: "MjeteShkollore");
        }
    }
}
