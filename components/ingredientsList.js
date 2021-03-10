const IngredientsList = (props) => {
  // console.log(props)
  const { ingredients } = props;

  return (
    <ol className="ingredients-list">
      {ingredients.map(row => {
        return (<li className="ingredient">
          <span className="ingredient-amount">{row.amount}</span>
          <span className="ingredient-name"> {row.ingredient}</span>
        </li>)
      })}
    </ol>
  )
}

export default IngredientsList