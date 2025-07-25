using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using MyAccountApp.Models;
using MyAccountApp.Services;

namespace MyAccountApp.Pages;

public class IndexModel : PageModel
{
    private readonly HelpArticleService _helpArticleService;

    public IndexModel(HelpArticleService helpArticleService)
    {
        _helpArticleService = helpArticleService;
    }

    [BindProperty]
    public string SearchQuery { get; set; } = string.Empty;

    public List<HelpArticle> PopularArticles { get; set; } = new();
    public List<HelpArticle> TrendingArticles { get; set; } = new();
    public List<HelpArticle> SearchResults { get; set; } = new();

    public async Task OnGetAsync()
    {
        PopularArticles = await _helpArticleService.GetPopularArticlesAsync();
        TrendingArticles = await _helpArticleService.GetTrendingArticlesAsync();
    }

    public async Task<IActionResult> OnPostAsync()
    {
        PopularArticles = await _helpArticleService.GetPopularArticlesAsync();
        TrendingArticles = await _helpArticleService.GetTrendingArticlesAsync();
        
        if (!string.IsNullOrWhiteSpace(SearchQuery))
        {
            SearchResults = await _helpArticleService.SearchArticlesAsync(SearchQuery);
        }
        
        return Page();
    }
}
