import { Image } from 'react-datocms';
import ReactMarkdown from 'react-markdown';

import Attribution from '@components/Attribution';

import styles from '@styles/RecipeCard.module.css';

import Link from 'next/link';

const RecipeCard = (recipe) => {
  return (
    <div className={styles['recipe-card']}>
      <h2 className={styles.title}>
        <Link href={`/recipe/${recipe.slug}`}>{recipe.title}</Link>
      </h2>
      <Attribution {...recipe} className={styles.attribution}></Attribution>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {recipe.cover && <Image data={recipe.cover.responsiveImage} className={styles.image} />}
      <ReactMarkdown>{recipe.description}</ReactMarkdown>
    </div>
  );
};

export default RecipeCard;
