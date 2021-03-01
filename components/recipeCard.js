import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Link from 'next/link';

const RecipeCard = (props) => {
  console.log(props)
  const { fields } = props;

  return (
    <div className="recipe">
      <h2 className="recipe-title">
        <Link href={`/recipe/${fields.slug}`}>
          <a>{fields.title}</a>
        </Link>
      </h2>
      <a href={fields.url}>{fields.title}</a>
      <span>{fields.date}</span>
      <div className="description">{documentToReactComponents(fields.description)}</div>
    </div>
  )
}

export default RecipeCard