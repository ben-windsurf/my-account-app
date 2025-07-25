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
                Title = "How do I get my mobile transfer tickets I bought on StubHub?",
                Content = "Mobile transfer tickets are sent directly to your mobile device. Download the venue's app or check your email for transfer instructions.",
                Category = "Mobile Tickets",
                IsPopular = true,
                IsTrending = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 2,
                Title = "I bought tickets on StubHub as a guest. How do I see my order?",
                Content = "As a guest, you can view your order by entering your email and order number on the 'Find My Order' page.",
                Category = "Orders",
                IsPopular = true,
                IsTrending = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 3,
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
                Id = 4,
                Title = "How do I sell tickets on StubHub?",
                Content = "To sell tickets, create an account, go to 'Sell Tickets', enter your event details, set your price, and list them for sale.",
                Category = "Selling",
                IsPopular = true,
                IsTrending = false,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 5,
                Title = "I sold a type of mobile ticket on StubHub. How do I deliver it to the buyer?",
                Content = "For mobile tickets, you'll need to transfer them through the original ticket provider's app or website to the buyer's email.",
                Category = "Selling",
                IsPopular = true,
                IsTrending = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 6,
                Title = "My tickets say they are mobile. Can I print them instead?",
                Content = "Most mobile tickets cannot be printed. You'll need to use your mobile device to enter the venue. Contact the venue if you have accessibility needs.",
                Category = "Mobile Tickets",
                IsPopular = true,
                IsTrending = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 7,
                Title = "I bought mobile transfer tickets on StubHub but haven't received the ticket transfer offer email.",
                Content = "Check your spam folder first. If still not found, contact the seller through StubHub or reach out to customer support.",
                Category = "Mobile Tickets",
                IsPopular = true,
                IsTrending = false,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 8,
                Title = "How can I send tickets I bought on StubHub to a friend?",
                Content = "You can transfer tickets to a friend through the original ticket provider's transfer system or by forwarding the mobile tickets.",
                Category = "Tickets",
                IsPopular = true,
                IsTrending = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 9,
                Title = "Why did I get a text saying my StubHub account info changed?",
                Content = "This notification is sent when account details like password, email, or payment info are updated for security purposes.",
                Category = "Account",
                IsPopular = true,
                IsTrending = false,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 10,
                Title = "The Rolling Stones tour",
                Content = "Find information about The Rolling Stones tour dates, venues, and ticket availability on StubHub.",
                Category = "Events",
                IsPopular = false,
                IsTrending = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 11,
                Title = "I sold tickets on StubHub. When do I have to deliver them to the buyer?",
                Content = "Tickets must be delivered according to the delivery deadline shown in your seller account, typically 1-3 days before the event.",
                Category = "Selling",
                IsPopular = false,
                IsTrending = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 12,
                Title = "What happens if events are postponed or rescheduled?",
                Content = "If an event is postponed, your tickets remain valid for the new date. If cancelled, you'll receive a full refund.",
                Category = "Events",
                IsPopular = false,
                IsTrending = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            },
            new HelpArticle
            {
                Id = 13,
                Title = "I sold mobile transfer or Flash Seats (AXS) tickets on StubHub and transferred them to the buyer. They haven't accepted the tickets yet.",
                Content = "Contact the buyer through StubHub messaging to remind them to accept the transfer. If they don't respond, contact customer support.",
                Category = "Selling",
                IsPopular = false,
                IsTrending = true,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            }
        );
    }
}
