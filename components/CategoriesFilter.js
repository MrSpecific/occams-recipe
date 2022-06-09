import styles from '@styles/components/CategoriesFilter.module.css';

export const matchesFilter = ({ filter, recipe }) => {
  if (!filter) return true;

  return !!recipe.categories.find((category) => category.slug === filter);
};

const CategoriesFilter = ({ categories, filter, setFilter }) => {
  if (!categories) return null;

  const changeCategory = (event) => {
    setFilter(event.target.value);
  };

  return (
    <ul className={styles.categoriesFilter}>
      <li className={styles.filterItem}>
        <input
          type="radio"
          id="all-categories"
          name="categories"
          value=""
          className={styles.filterInput}
          checked={!filter}
          onChange={changeCategory}
        />
        <label htmlFor="all-categories" className={styles.filterLabel}>
          All
        </label>
      </li>
      {categories.map((category) => (
        <li key={category.slug} className={styles.filterItem}>
          <input
            type="radio"
            id={category.slug}
            name="categories"
            value={category.slug}
            className={styles.filterInput}
            checked={filter === category.slug}
            onChange={changeCategory}
          />
          <label htmlFor={category.slug} className={styles.filterLabel}>
            {category.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesFilter;
