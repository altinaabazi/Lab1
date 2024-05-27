using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Lab1Backend.Migrations.Stafi
{
    /// <inheritdoc />
    public partial class AddStafiGjinia : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           /* migrationBuilder.DropPrimaryKey(
                name: "PK_Stafis",
                table: "Stafis");

            migrationBuilder.RenameTable(
                name: "Stafis",
                newName: "Stafi");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Stafi",
                table: "Stafi",
                column: "IDStafi");
           */

            migrationBuilder.CreateTable(
                name: "StafiGjinia",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Emri = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StafiGjinia", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StafiGjinia");

          /*  migrationBuilder.DropPrimaryKey(
                name: "PK_Stafi",
                table: "Stafi");
          */

          //  migrationBuilder.RenameTable(
            //    name: "Stafi",
              //  newName: "Stafis");
                
          //  migrationBuilder.AddPrimaryKey(
            //    name: "PK_Stafis",
              //  table: "Stafis",
                //column: "IDStafi");
        }
    }
}
