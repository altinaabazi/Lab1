using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations
{
    /// <inheritdoc />
    public partial class MjeteShkollore : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "libraria",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Rruga = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Qyteti = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_libraria", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "MjeteShkollore",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Pershkrimi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tipi = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImgPath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cmimi = table.Column<double>(type: "float", nullable: false),
                    Sasia = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MjeteShkollore", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Tipi",
                columns: table => new
                {
                    TipiID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TipiEmri = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tipi", x => x.TipiID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "libraria");

            migrationBuilder.DropTable(
                name: "MjeteShkollore");

            migrationBuilder.DropTable(
                name: "Tipi");
        }
    }
}
