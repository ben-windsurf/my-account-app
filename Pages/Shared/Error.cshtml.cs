using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyAccountApp.Pages;

public class ErrorModel : PageModel
{
    [BindProperty]
    public string ErrorMessage { get; set; } = "The page you requested could not be found.";

    public void OnGet(string? error = null)
    {
        if (!string.IsNullOrEmpty(error))
        {
            ErrorMessage = error;
        }
    }
}
