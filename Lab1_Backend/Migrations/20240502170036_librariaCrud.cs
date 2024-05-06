using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations.Libraria
{
    /// <inheritdoc />
    public partial class librariaCrud : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Rruga",
                table: "libraria",
                newName: "Lokacioni");

            migrationBuilder.RenameColumn(
                name: "Emri",
                table: "libraria",
                newName: "Furnizimi");

            migrationBuilder.CreateTable(
                name: "Autori",
                columns: table => new
                {
                    AutoriID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Autori", x => x.AutoriID);
                });

            migrationBuilder.CreateTable(
                name: "Furnizimi",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Kompania = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Furnizimi", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Libri",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ISBN = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Titulli = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pershkrimi = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Autori = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VitiPublikimit = table.Column<int>(type: "int", nullable: false),
                    ShtepiaBotuese = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Cmimi = table.Column<double>(type: "float", nullable: false),
                    Sasia = table.Column<int>(type: "int", nullable: false),
                    ImgPath = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Libri", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "LokacioniLibraria",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Lokacioni = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LokacioniLibraria", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "QytetiLibraria",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Qyteti = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_QytetiLibraria", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Autori");

            migrationBuilder.DropTable(
                name: "Furnizimi");

            migrationBuilder.DropTable(
                name: "Libri");

            migrationBuilder.DropTable(
                name: "LokacioniLibraria");

            migrationBuilder.DropTable(
                name: "QytetiLibraria");

            migrationBuilder.RenameColumn(
                name: "Lokacioni",
                table: "libraria",
                newName: "Rruga");

            migrationBuilder.RenameColumn(
                name: "Furnizimi",
                table: "libraria",
                newName: "Emri");
        }
    }
}
