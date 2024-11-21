import React, { createContext, useState } from "react";

interface FavoritesContextType {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

interface FavoritesContextProviderProps {
  children: React.ReactNode;
}

function FavoritesContextProvider({ children }: FavoritesContextProviderProps) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteMealIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteMealIds((prev) => prev.filter((mealId) => mealId !== id));
  };

  const value: FavoritesContextType = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContextProvider, FavoritesContext };
