using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyAccountApp.Pages;

public class IndexModel : PageModel
{
    [BindProperty]
    public string SearchQuery { get; set; } = string.Empty;

    public void OnGet()
    {
    }

    public IActionResult OnPost()
    {
        return Page();
    }
}
