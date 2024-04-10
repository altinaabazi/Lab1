using Newtonsoft.Json.Serialization;
using Lab1_Backend.Models;
using Microsoft.EntityFrameworkCore;
using Lab1_Backend.Controllers;
using Microsoft.Extensions.DependencyInjection;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<BookContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("LibraTechConn")));


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//JSON Serializer
builder.Services.AddControllers().AddNewtonsoftJson(options =>
options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore).AddNewtonsoftJson(
   options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

builder.Services.AddCors();

var app = builder.Build();

//Enable CORS
//app.UseCors(c=>c.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder =>
{
    builder
    .AllowAnyHeader()
    .AllowAnyOrigin()
    .AllowAnyMethod();

});
if (!app.Environment.IsDevelopment()) 
{
    app.UseExceptionHandler("Home/Error");
    app.UseHsts();

}

app.UseStaticFiles();
app.UseRouting();


app.UseAuthorization();

app.MapControllers();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
