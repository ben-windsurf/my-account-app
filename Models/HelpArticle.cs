using System.ComponentModel.DataAnnotations;

namespace MyAccountApp.Models;

public class HelpArticle
{
    public int Id { get; set; }
    
    [Required]
    public string Title { get; set; } = string.Empty;
    
    [Required]
    public string Content { get; set; } = string.Empty;
    
    public string Category { get; set; } = string.Empty;
    
    public bool IsPopular { get; set; }
    
    public bool IsTrending { get; set; }
    
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
