import { useCallback, useState, useId, useContext } from 'react';
import './Filters.css';
import debounce from 'just-debounce-it';
import useFilters from '../hooks/useFilters';

export default function Filters() {
  const { filters, setFilters } = useFilters();
  const [minPrice, setMinPrice] = useState(filters.minPrice);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const rangeDebounce = useCallback(
    debounce((newMinPrice) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        minPrice: newMinPrice,
      }));
    }, 300),
    []
  );

  const handleChangeMinPrice = (event) => {
    const newMinPrice = event.target.value;
    setMinPrice(newMinPrice);
    rangeDebounce(newMinPrice);
  };

  const handleChangeCategory = (event) => {
    const newCategory = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: newCategory,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio mínimo</label>
        <input
          type="range"
          name=""
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={minPrice}
        />
        <span>$ {filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select name="" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
}
