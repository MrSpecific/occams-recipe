import fractionize from '@utils/fractionize';

import styles from '@styles/components/IngredientsList.module.css';

const IngredientsList = (props) => {
  const { ingredients } = props;

  if (!ingredients || !ingredients.length) return null;

  return (
    <ol className={`ingredients-list ${styles.ingredientsList}`}>
      <style jsx>{`
        .ingredients-list {
          list-style: disc;
        }

        .ingredient-name {
          // font-weight: bold;
          color: var(--nearly-black);
        }

        .ingredient-amount {
          font-weight: bold;
        }
      `}</style>
      {ingredients.map((row) => {
        return (
          <li key={row.id} className={`ingredient ${styles.ingredient}`}>
            <span className="ingredient-amount">{fractionize(row.amount)}</span>
            <span className="ingredient-name"> {row.ingredient}</span>
          </li>
        );
      })}
    </ol>
  );
};

export default IngredientsList;
