using Microsoft.EntityFrameworkCore;
using MyAccountApp.Data;
using MyAccountApp.Services;
using Microsoft.AspNetCore.Authentication.Cookies;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("MyAccountAppDb"));

builder.Services.AddScoped<AuthService>();
builder.Services.AddScoped<HelpArticleService>();

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/Login";
        options.LogoutPath = "/Logout";
        options.AccessDeniedPath = "/Login";
    });

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    context.Database.EnsureCreated();
}

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapRazorPages();

app.MapGet("/api/help/popular", async (HelpArticleService service) =>
{
    var articles = await service.GetPopularArticlesAsync();
    return Results.Ok(articles);
});

app.MapGet("/api/help/trending", async (HelpArticleService service) =>
{
    var articles = await service.GetTrendingArticlesAsync();
    return Results.Ok(articles);
});

app.MapGet("/api/help/search", async (string query, HelpArticleService service) =>
{
    var articles = await service.SearchArticlesAsync(query);
    return Results.Ok(articles);
});

app.MapGet("/api/help/{id:int}", async (int id, HelpArticleService service) =>
{
    var article = await service.GetArticleByIdAsync(id);
    return article != null ? Results.Ok(article) : Results.NotFound();
});

app.Run();
