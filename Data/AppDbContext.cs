using Microsoft.EntityFrameworkCore;
using MyAccountApp.Models;

namespace MyAccountApp.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
    
    public DbSet<User> Users { get; set; }
    public DbSet<HelpArticle> HelpArticles { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasIndex(e => e.Email).IsUnique();
        });
        
        SeedData(modelBuilder);
    }
    
    private static void SeedData(ModelBuilder modelBuilder)
    {
        var testUserPasswordHash = BCrypt.Net.BCrypt.HashPassword("password123");
        
        modelBuilder.Entity<User>().HasData(
            new User
            {
                Id = 1,
                Email = "test@example.com",
                PasswordHash = testUserPasswordHash,
                CreatedAt = DateTime.UtcNow,
                IsActive = true
            }
        );
        
        modelBuilder.Entity<HelpArticle>().HasData(
            new HelpArticle
            {
                Id = 1,
                Title = "How do I get my tickets I bought on StubHub?",
                Content = "After purchasing tickets, you'll receive them via email or mobile transfer. Check your email for delivery instructions.",
                Category = "Tickets",
                IsPopular = true,
                IsTrending = false,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 2,
                Title = "What if my event is cancelled or postponed?",
                Content = "If your event is cancelled, you'll receive a full refund. For postponed events, your tickets remain valid for the new date.",
                Category = "Events",
                IsPopular = true,
                IsTrending = false,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 3,
                Title = "How do I get my mobile transfer tickets I bought on StubHub?",
                Content = "Mobile transfer tickets are sent directly to your mobile device. Download the venue's app or check your email for transfer instructions.",
                Category = "Mobile Tickets",
                IsPopular = false,
                IsTrending = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 4,
                Title = "Can I resell my tickets on StubHub?",
                Content = "Yes, you can list your tickets for resale on StubHub. Go to 'My Account' and select 'Sell Tickets' to get started.",
                Category = "Selling",
                IsPopular = false,
                IsTrending = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            }
        );
    }
}
