using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectAPI.Migrations
{
    /// <inheritdoc />
    public partial class updated5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TypeOfBooking",
                table: "Requests");

            migrationBuilder.AddColumn<int>(
                name: "TypeOfBookingid",
                table: "Requests",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Requests_TypeOfBookingid",
                table: "Requests",
                column: "TypeOfBookingid");

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_CommonTypes_TypeOfBookingid",
                table: "Requests",
                column: "TypeOfBookingid",
                principalTable: "CommonTypes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_CommonTypes_TypeOfBookingid",
                table: "Requests");

            migrationBuilder.DropIndex(
                name: "IX_Requests_TypeOfBookingid",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "TypeOfBookingid",
                table: "Requests");

            migrationBuilder.AddColumn<string>(
                name: "TypeOfBooking",
                table: "Requests",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
