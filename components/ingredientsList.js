const IngredientsList = (props) => {
  const { ingredients } = props;

  return (
    <ol className="ingredients-list">
      {ingredients.map(row => {
        return (
          <li key={row.id} className="ingredient">
            <span className="ingredient-amount">{row.amount}</span>
            <span className="ingredient-name"> {row.ingredient}</span>
          </li>
        )
      })}
    </ol>
  )
}

export default IngredientsList