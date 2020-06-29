import { useState, useEffect } from 'react';

// useLocal
export function useLocal(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

// useSession
export function useSession(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.sessionStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

// ex: const [state, setState] = useSession('default value', 'name to call item key')
// ex call: const [currentPage, setCurrentPage] = useSession(1, 'currentPage')
