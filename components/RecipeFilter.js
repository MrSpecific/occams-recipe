import { useAppContext } from '@data/context';
import CategoriesFilter from '@components/CategoriesFilter';
import styles from '@styles/components/RecipeFilter.module.css';

export default function RecipeFilter({ categories }) {
  const { categoryFilter, setCategoryFilter } = useAppContext();

  return (
    <section className={styles.recipeFilter}>
      <CategoriesFilter
        categories={categories}
        filter={categoryFilter}
        setFilter={setCategoryFilter}
        styles={styles}
      />
    </section>
  );
}
