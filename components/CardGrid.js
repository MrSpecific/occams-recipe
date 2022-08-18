import { motion, LayoutGroup } from 'framer-motion';

import { useAppContext } from '@data/context';
import RecipeCard from '@components/RecipeCard';
import filter from '@utils/filter';
import styles from '@styles/Home.module.css';

export default function CardGrid({ recipes }) {
  const { categoryFilter } = useAppContext();

  return (
    <ol className={styles.cardList}>
      <LayoutGroup>
        {recipes.map((recipe) => {
          if (!filter.category({ category: categoryFilter, recipe })) return null;
          return (
            <motion.li
              key={recipe.id}
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              // transition={{ duration: 0.25 }}
            >
              <RecipeCard {...recipe} key={`${recipe.id}-card`}></RecipeCard>
            </motion.li>
          );
        })}
      </LayoutGroup>
    </ol>
  );
}
