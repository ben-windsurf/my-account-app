import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { helpAPI, HelpArticle } from '../services/api';
import '../styles/help-center.css';

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<HelpArticle[]>([]);
  const [popularArticles, setPopularArticles] = useState<HelpArticle[]>([]);
  const [trendingArticles, setTrendingArticles] = useState<HelpArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const [popular, trending] = await Promise.all([
          helpAPI.getPopularArticles(),
          helpAPI.getTrendingArticles()
        ]);
        setPopularArticles(popular);
        setTrendingArticles(trending);
      } catch (error) {
        console.error('Failed to load articles:', error);
      }
    };

    loadArticles();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const results = await helpAPI.searchArticles(searchQuery);
      setSearchResults(results);
      setShowResults(true);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="header">
        <nav className="nav-bar">
          <Link to="/home" className="logo-container">
            <img src="/images/logos/logo-white.png" alt="StubHub" className="logo" />
            <span className="help-center-text">Help Center</span>
          </Link>
        </nav>
        
        <div className="search-container">
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Search for a support topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button" disabled={loading}>
              {loading ? '...' : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              )}
            </button>
          </form>
        </div>
      </header>

      <main className="main-content">
        {showResults && (
          <div className="search-results">
            <h3>Search Results for "{searchQuery}"</h3>
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((article) => (
                  <li key={article.id}>
                    <Link to={`/help/${article.id}`}>
                      <strong>{article.title}</strong>
                      <p>{article.content.substring(0, 150)}...</p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No articles found matching your search.</p>
            )}
          </div>
        )}

        <div className="categories-grid">
          <Link to="/help/category/buying" className="category-card">
            <img src="/images/icons/buying.png" alt="Buying" className="category-icon" />
            <h3 className="category-title">Buying</h3>
          </Link>
          
          <Link to="/help/category/selling" className="category-card">
            <img src="/images/icons/selling.png" alt="Selling" className="category-icon" />
            <h3 className="category-title">Selling</h3>
          </Link>
          
          <Link to="/help/category/mobile-ticketing" className="category-card">
            <img src="/images/icons/mobile-ticketing.png" alt="Mobile Ticketing" className="category-icon" />
            <h3 className="category-title">Mobile Ticketing</h3>
          </Link>
          
          <Link to="/login" className="category-card">
            <img src="/images/icons/account-and-settings.png" alt="Account and Settings" className="category-icon" />
            <h3 className="category-title">Account and Settings</h3>
          </Link>
        </div>

        <div className="help-sections">
          <section className="help-section">
            <h2>Most popular answers</h2>
            <ul>
              {popularArticles.map((article) => (
                <li key={article.id}>
                  <Link to={`/help/${article.id}`}>{article.title}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="help-section">
            <h2>Trending questions</h2>
            <ul>
              {trendingArticles.map((article) => (
                <li key={article.id}>
                  <Link to={`/help/${article.id}`}>{article.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HelpCenter;
