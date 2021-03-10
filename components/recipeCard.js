import { Image } from 'react-datocms'
import ReactMarkdown from 'react-markdown'

import styles from '@styles/RecipeCard.module.css'

import Link from 'next/link';

const RecipeCard = (recipe) => {

  return (
    <div className={styles['recipe-card']}>
      <h2 className={styles.title}>
        <Link href={`/recipe/${recipe.slug}`}>
          <a>{recipe.title}</a>
        </Link>
      </h2>
      <span>{recipe.date}</span>
      <Image data={recipe.cover.responsiveImage} />
      <ReactMarkdown>{recipe.description}</ReactMarkdown>
    </div>
  )
}

export default RecipeCard