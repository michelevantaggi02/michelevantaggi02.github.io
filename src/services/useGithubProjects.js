import { useState, useEffect } from 'react';
import { fetchUserProjects, GITHUB_USERNAME } from './githubService';

export function useGithubProjects() {
  const [state, setState] = useState({
    projects: [],
    loading: true,
    error: null,
    isFallback: false,
    fromCache: false,
    username: GITHUB_USERNAME,
  });

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const result = await fetchUserProjects();
        if (isMounted) {
          setState({
            projects: result.projects,
            loading: false,
            error: null,
            isFallback: result.isFallback,
            fromCache: result.fromCache,
            username: GITHUB_USERNAME,
          });
        }
      } catch (err) {
        if (isMounted) {
          setState((prev) => ({
            ...prev,
            loading: false,
            error: err.message || 'Errore nel caricamento dei progetti',
          }));
        }
      }
    }

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}
