import convert from 'convert-units';
import units from '@utils/units';
import styles from '@styles/components/Measure.module.css';

const { log } = console;

export const MeasuresList = ({ measures, className }) => {
  if (!measures.length) return null;

  return (
    <ul className={className}>
      {measures.map((measure) => {
        return (
          <li key={measure.id}>
            <Measure measure={measure} />
          </li>
        );
      })}
    </ul>
  );
};

export default function Measure({ measure, system = 'metric' }) {
  const { note, ingredient } = measure;
  const { amount, unit } = measure;
  const abbrUnit = units.abbr(unit);
  const newUnit = abbrUnit === 'ea' ? abbrUnit : 'oz';

  const convertedAmount =
    abbrUnit === newUnit || newUnit === 'ea'
      ? amount
      : convert(amount)
          .from(abbrUnit)
          .to(newUnit === 'oz' ? 'fl-oz' : newUnit);

  return (
    <div className={styles.measure}>
      <span className={styles.measureDetails}>
        <span className={styles.amountLockup}>
          {Math.round(convertedAmount)} {newUnit}
        </span>
        &nbsp;
        <span className={styles.ingredient}>{ingredient.title}</span>
      </span>
      {note && <span className={styles.note}>{note}</span>}
    </div>
  );
}