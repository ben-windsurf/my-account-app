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
            <img src="/images/logos/logo.png" alt="StubHub" className="logo" />
            <span className="help-center-text">Help Center</span>
          </Link>
        </nav>
        
        <div className="search-container">
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Search for help"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button" disabled={loading}>
              {loading ? '...' : '🔍'}
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
          
          <Link to="/help/category/my-account" className="category-card">
            <img src="/images/icons/my-account.png" alt="My Account" className="category-icon" />
            <h3 className="category-title">My Account</h3>
          </Link>
          
          <Link to="/help/category/events" className="category-card">
            <img src="/images/icons/events.png" alt="Events" className="category-icon" />
            <h3 className="category-title">Events</h3>
          </Link>
        </div>

        <div className="help-sections">
          <section className="help-section">
            <h2>Popular</h2>
            <ul>
              {popularArticles.map((article) => (
                <li key={article.id}>
                  <Link to={`/help/${article.id}`}>{article.title}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="help-section">
            <h2>Trending</h2>
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
