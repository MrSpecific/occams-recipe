import fractionize from '@lib/utils/fractionize'

const IngredientsList = (props) => {
  const { ingredients } = props;

  return (
    <ol className="ingredients-list">
      <style jsx>{`
        .ingredients-list {
          list-style: disc;
        }

        .ingredient-name {
          font-weight: bold;
        }
      `}</style>
      {ingredients.map(row => {
        return (
          <li key={row.id} className="ingredient">
            <span className="ingredient-amount">{fractionize(row.amount)}</span>
            <span className="ingredient-name"> {row.ingredient}</span>
          </li>
        )
      })}
    </ol>
  )
}

export default IngredientsList
