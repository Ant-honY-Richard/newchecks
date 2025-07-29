"use client";

import { useEffect, useState } from 'react';

export function useSecretAdmin() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [keySequence, setKeySequence] = useState('');

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only track letter keys
      if (event.key.length === 1 && event.key.match(/[a-zA-Z]/)) {
        const newSequence = (keySequence + event.key.toLowerCase()).slice(-5); // Keep last 5 characters
        setKeySequence(newSequence);
        
        // Check if the sequence ends with "admin"
        if (newSequence === 'admin') {
          setIsAdminOpen(true);
          setKeySequence(''); // Reset sequence
        }
      }
    };

    // Reset sequence after 3 seconds of inactivity
    const resetTimer = setTimeout(() => {
      setKeySequence('');
    }, 3000);

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      clearTimeout(resetTimer);
    };
  }, [keySequence]);

  const closeAdmin = () => {
    setIsAdminOpen(false);
    setKeySequence('');
  };

  return {
    isAdminOpen,
    closeAdmin
  };
}