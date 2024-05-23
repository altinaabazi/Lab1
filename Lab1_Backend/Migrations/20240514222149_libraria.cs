using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations.Libraria
{
    /// <inheritdoc />
    public partial class libraria : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            

            migrationBuilder.AddColumn<string>(
                name: "Gjuha",
                table: "Libri",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Kategoria",
                table: "Libri",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "NrFaqeve",
                table: "Libri",
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
                name: "Gjuha",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    gjuha = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gjuha", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Kategoria",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    kategoria = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kategoria", x => x.ID);
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
                name: "NrFaqeve",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nrfaqeve = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NrFaqeve", x => x.ID);
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
                name: "ShtepiaBotuese",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    shtepiaBotuese = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ShtepiaBotuese", x => x.ID);
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
                name: "Gjuha");

            migrationBuilder.DropTable(
                name: "Kategoria");

            migrationBuilder.DropTable(
                name: "NgjyraMSh");

            migrationBuilder.DropTable(
                name: "NrFaqeve");

            migrationBuilder.DropTable(
                name: "ProdhuesiMSh");

            migrationBuilder.DropTable(
                name: "ShtepiaBotuese");

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

            migrationBuilder.DropColumn(
                name: "Gjuha",
                table: "Libri");

            migrationBuilder.DropColumn(
                name: "Kategoria",
                table: "Libri");

            migrationBuilder.DropColumn(
                name: "NrFaqeve",
                table: "Libri");
        }
    }
}
