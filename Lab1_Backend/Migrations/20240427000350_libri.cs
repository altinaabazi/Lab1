using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations.Libraria
{
    /// <inheritdoc />
    public partial class libri : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Pershkrimi",
                table: "Libri",
                newName: "Pershrkimi");

            migrationBuilder.AlterColumn<string>(
                name: "ShtepiaBotuese",
                table: "Libri",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "ISBN",
                table: "Libri",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

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

            migrationBuilder.RenameColumn(
                name: "Pershrkimi",
                table: "Libri",
                newName: "Pershkrimi");

            migrationBuilder.AlterColumn<int>(
                name: "ShtepiaBotuese",
                table: "Libri",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "ISBN",
                table: "Libri",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }
    }
}
