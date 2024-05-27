using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations.Stafi
{
    /// <inheritdoc />
    public partial class AddStafiLloji : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
          /*  migrationBuilder.DropColumn(
                name: "Orari",
                table: "Stafi");

            migrationBuilder.AddColumn<int>(
                name: "LlojiId",
                table: "Stafi",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OrariId",
                table: "Stafi",
                type: "int",
                nullable: false,
                defaultValue: 0);*/

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StafiLloji");

         /*   migrationBuilder.DropColumn(
                name: "LlojiId",
                table: "Stafi");

            migrationBuilder.DropColumn(
                name: "OrariId",
                table: "Stafi");

            migrationBuilder.AddColumn<string>(
                name: "Orari",
                table: "Stafi",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");*/
        }
    }
}
