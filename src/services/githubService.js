import fallbackProjects from '../data/fallback-projects.json';

export const GITHUB_USERNAME = 'michelevantaggi02';
const CACHE_KEY = `github_repos_${GITHUB_USERNAME}`;
const CACHE_EXPIRY_KEY = `github_repos_${GITHUB_USERNAME}_timestamp`;
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes TTL

/**
 * Fetches public repositories for michelevantaggi02 with sessionStorage caching and fallback
 */
export async function fetchUserProjects() {
  // Check sessionStorage cache first
  try {
    const cachedData = sessionStorage.getItem(CACHE_KEY);
    const cachedTimestamp = sessionStorage.getItem(CACHE_EXPIRY_KEY);

    if (cachedData && cachedTimestamp) {
      const age = Date.now() - parseInt(cachedTimestamp, 10);
      if (age < CACHE_TTL_MS) {
        return {
          projects: JSON.parse(cachedData),
          isFallback: false,
          fromCache: true,
        };
      }
    }
  } catch (e) {
    console.warn('Storage read warning:', e);
  }

  // Attempt live API fetch
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=30`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API HTTP ${response.status}`);
    }

    const repos = await response.json();

    // Clean & filter repositories (exclude forks if desired, sort by last pushed)
    const cleanedRepos = repos
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description || 'Repository di codice su GitHub',
        html_url: repo.html_url,
        homepage: repo.homepage || null,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language || 'Code',
        topics: repo.topics || [],
        updated_at: repo.updated_at || repo.pushed_at,
      }));

    // Cache successful response
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(cleanedRepos));
      sessionStorage.setItem(CACHE_EXPIRY_KEY, Date.now().toString());
    } catch (e) {
      console.warn('Storage write warning:', e);
    }

    return {
      projects: cleanedRepos,
      isFallback: false,
      fromCache: false,
    };
  } catch (err) {
    console.warn('GitHub API fetch failed, loading local fallback data:', err);
    return {
      projects: fallbackProjects,
      isFallback: true,
      fromCache: false,
    };
  }
}
