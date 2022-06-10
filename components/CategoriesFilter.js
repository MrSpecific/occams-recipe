const CategoriesFilter = ({ categories, filter, setFilter, styles }) => {
  if (!categories) return null;

  const changeCategory = (event) => {
    setFilter(event.target.value);
  };

  return (
    <label className={styles.filterWrapper}>
      <span className={styles.filterLabel}>Category:</span>
      <select className={styles.filterSelect} onChange={changeCategory} defaultValue={filter}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.title}
          </option>
        ))}
      </select>
    </label>
  );
};

export default CategoriesFilter;
