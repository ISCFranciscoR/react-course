import { createContext, useState } from 'react';

// 1.- Crear el contexto. Son los datos que se conumen.
export const FiltersContext = createContext();

// 2.- Crear el Provider para limitar el acceso al contexto. Brinda acceso a los datos
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
