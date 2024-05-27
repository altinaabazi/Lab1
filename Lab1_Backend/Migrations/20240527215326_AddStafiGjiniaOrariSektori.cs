using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations.Stafi
{
    /// <inheritdoc />
    public partial class AddStafiGjiniaOrariSektori : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            

            migrationBuilder.RenameColumn(
                name: "Emri",
                table: "StafiGjinia",
                newName: "Gjinia");

            migrationBuilder.AddColumn<int>(
                name: "SektoriId",
                table: "Stafi",
                type: "int",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "StafiSektori",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Sektori = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StafiSektori", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StafiSektori");

            migrationBuilder.DropColumn(
                name: "SektoriId",
                table: "Stafi");

            migrationBuilder.RenameColumn(
                name: "Gjinia",
                table: "StafiGjinia",
                newName: "Emri");

            migrationBuilder.AddColumn<int>(
                name: "IDLibrari",
                table: "Stafi",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LlojiId",
                table: "Stafi",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "StafiLloji",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Lloji = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StafiLloji", x => x.Id);
                });
        }
    }
}
