import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from '../styles/RecipeCard.module.css'

import Link from 'next/link';

const RecipeCard = (props) => {
  const { fields } = props;

  return (
    <div className={styles['recipe-card']}>
      <h2 className="recipe-title">
        <Link href={`/recipe/${fields.slug}`}>
          <a>{fields.title}</a>
        </Link>
      </h2>
      <span>{fields.date}</span>
      <div className="description">{documentToReactComponents(fields.description)}</div>
    </div>
  )
}

export default RecipeCard