using Microsoft.EntityFrameworkCore.Migrations;

namespace Lab1Backend.Migrations.Klienti
{
    public partial class AddQytetiToKlienti : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Create Gjinia table
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
                });

            // Insert specific values into Gjinia table
            migrationBuilder.InsertData(
                table: "KlientiQyteti",
                columns: new[] { "Emri" },
                values: new object[,]
                {
                    { "Prishtine" },
                    { "Gjilan" }
                });

            // Add GjiniaId column to Klienti table as nullable foreign key
            migrationBuilder.AddColumn<int>(
                name: "QytetiId",
                table: "Klienti",
                type: "int",
                nullable: true); // Changed to nullable

            // Add foreign key constraint to Klienti table
            migrationBuilder.AddForeignKey(
                name: "FK_Klienti_KlientiQyteti_QytetiId",
                table: "Klienti",
                column: "QytetiId",
                principalTable: "KlientiQyteti",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict); // Changed to ReferentialAction.Restrict if you want nulls, or use a different action as needed
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Drop foreign key constraint from Klienti table
            migrationBuilder.DropForeignKey(
                name: "FK_Klienti_KlientiQyteti_QytetiId",
                table: "Klienti");

            // Drop GjiniaId column from Klienti table
            migrationBuilder.DropColumn(
                name: "QytetiId",
                table: "Klienti");

            // Drop Gjinia table
            migrationBuilder.DropTable(
                name: "KlientiQyteti");
        }
    }
}
