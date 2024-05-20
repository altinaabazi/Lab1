using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Libri",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ISBN = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Titulli = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Pershkrimi = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Autori = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VitiPublikimit = table.Column<int>(type: "int", nullable: false),
                    ShtepiaBotuese = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Cmimi = table.Column<double>(type: "float", nullable: false),
                    Sasia = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Libri", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Libri");
        }
    }
}
