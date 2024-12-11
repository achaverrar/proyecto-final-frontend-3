import { useEffect } from 'react';

export const useDocumentTitle = (title) => {
  useEffect(() => {
    if (!title) return;
    document.title = `${title} - PizzaYa`;
    return () => {
      document.title = 'PizzaYa';
    };
  }, [title]);
};
