using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations.Stafi
{
    /// <inheritdoc />
    public partial class AddStafiOrari : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
         /*   migrationBuilder.DropColumn(
                name: "Gjinia",
                table: "Stafi");

            migrationBuilder.AddColumn<int>(
                name: "GjiniaId",
                table: "Stafi",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Orari",
                table: "Stafi",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
         */
            migrationBuilder.CreateTable(
                name: "StafiOrari",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Orari = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StafiOrari", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StafiOrari");

         /*   migrationBuilder.DropColumn(
                name: "GjiniaId",
                table: "Stafi");

            migrationBuilder.DropColumn(
                name: "Orari",
                table: "Stafi");

            migrationBuilder.AddColumn<string>(
                name: "Gjinia",
                table: "Stafi",
                type: "nvarchar(1)",
                nullable: false,
                defaultValue: "");*/
        }
    }
}
