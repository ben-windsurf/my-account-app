using MyAccountApp.Data;
using MyAccountApp.Models;
using Microsoft.EntityFrameworkCore;

namespace MyAccountApp.Services;

public class AuthService
{
    private readonly AppDbContext _context;
    
    public AuthService(AppDbContext context)
    {
        _context = context;
    }
    
    public async Task<User?> ValidateUserAsync(string email, string password)
    {
        var user = await _context.Users
            .FirstOrDefaultAsync(u => u.Email == email && u.IsActive);
            
        if (user == null)
            return null;
            
        bool isValidPassword = BCrypt.Net.BCrypt.Verify(password, user.PasswordHash);
        return isValidPassword ? user : null;
    }
    
    public async Task<User?> CreateUserAsync(string email, string password)
    {
        if (await _context.Users.AnyAsync(u => u.Email == email))
            return null;
            
        var user = new User
        {
            Email = email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(password),
            CreatedAt = DateTime.UtcNow,
            IsActive = true
        };
        
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return user;
    }
}
