import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Link from 'next/link';

const IngredientsList = (props) => {
  console.log(props)
  const { ingredients } = props;

  return (
    <ol className="ingredients-list">
      {ingredients.map(row => {
        return (<li className="ingredient">
          <span className="ingredient-name">{row.ingredient} - </span>
          <span className="ingredient-amount">{row.amount}</span>
        </li>)
      })}
    </ol>
  )
}

export default IngredientsList