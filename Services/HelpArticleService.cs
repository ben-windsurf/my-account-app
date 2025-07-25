using MyAccountApp.Data;
using MyAccountApp.Models;
using Microsoft.EntityFrameworkCore;

namespace MyAccountApp.Services;

public class HelpArticleService
{
    private readonly AppDbContext _context;
    
    public HelpArticleService(AppDbContext context)
    {
        _context = context;
    }
    
    public async Task<List<HelpArticle>> GetPopularArticlesAsync()
    {
        return await _context.HelpArticles
            .Where(a => a.IsPopular)
            .OrderBy(a => a.Title)
            .ToListAsync();
    }
    
    public async Task<List<HelpArticle>> GetTrendingArticlesAsync()
    {
        return await _context.HelpArticles
            .Where(a => a.IsTrending)
            .OrderBy(a => a.Title)
            .ToListAsync();
    }
    
    public async Task<List<HelpArticle>> SearchArticlesAsync(string query)
    {
        if (string.IsNullOrWhiteSpace(query))
            return new List<HelpArticle>();
            
        return await _context.HelpArticles
            .Where(a => a.Title.Contains(query) || a.Content.Contains(query))
            .OrderBy(a => a.Title)
            .ToListAsync();
    }
    
    public async Task<HelpArticle?> GetArticleByIdAsync(int id)
    {
        return await _context.HelpArticles.FindAsync(id);
    }
}
