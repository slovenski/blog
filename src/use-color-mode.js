/**
 * [Modified]
 * Based on https://github.com/system-ui/theme-ui/blob/9656dba5f22205427d4c36dd9181b6a24b85dd91/packages/theme-ui/src/color-modes.js
 */
import React, { useState, useEffect, createContext } from 'react';

const STORAGE_KEY = 'svarga-theme-ui-color-mode';

const storage = {
  get: init => window.localStorage.getItem(STORAGE_KEY) || init,
  set: value => window.localStorage.setItem(STORAGE_KEY, value),
};

const getMediaQuery = () => {
  const darkQuery = '(prefers-color-scheme: dark)';
  const mql = window.matchMedia ? window.matchMedia(darkQuery) : {};
  const dark = mql.media === darkQuery;
  return dark && mql.matches;
};

export const useColorMode = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    // initialize
    const stored = storage.get();
    const dark = getMediaQuery();
    if (!stored && dark) return setModeWithSideEffects('dark');
    if (!stored || stored === mode) return;
    setModeWithSideEffects(stored);
  }, []);

  const setModeWithSideEffects = () => {
    setMode(state => {
      const nextMode = state === 'light' ? 'dark' : 'light';
      document.body.classList.remove('svarga-theme-ui-' + state);

      document.body.classList.add('svarga-theme-ui-' + nextMode);
      storage.set(nextMode);

      return nextMode;
    });
  };

  return [mode, setModeWithSideEffects];
};

export const InitializeColorMode = () => (
  <script
    key="svarga-theme-ui-no-flash"
    dangerouslySetInnerHTML={{
      __html: `(function() { try {
        var mode = localStorage.getItem('${STORAGE_KEY}');
        if (!mode) return
        document.body.classList.add('svarga-theme-ui-' + mode);
      } catch (e) {} })();`,
    }}
  />
);

export const ColorModeContext = createContext({
  mode: 'light',
  setColorMode: () => {},
});
