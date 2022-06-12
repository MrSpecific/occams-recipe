// import { useState } from 'react';
import convert from 'convert-units';
import units from '@utils/units';
import styles from '@styles/components/Measure.module.css';

// const { log } = console;

// const RadioControl = ({ name, label, value, onChange, currentSystem }) => {
//   return (
//     <label>
//       <input
//         type="radio"
//         name={name}
//         value={value}
//         checked={currentSystem === value}
//         onChange={onChange}
//       />
//       {label || value || name}
//     </label>
//   );
// };

const SystemControl = ({ system, setSystem }) => {
  const handleSystemChange = (e) => {
    setSystem(e.target.value);
  };

  return (
    <label className={styles.filterWrapper}>
      <span className={styles.filterLabel}>System:</span>
      <select value={system} className={styles.filterSelect} onChange={handleSystemChange}>
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>
    </label>
  );
};

export const MeasuresList = ({ measures, className, system, setSystem }) => {
  // const [system, setSystem] = useState('imperial');

  if (!measures.length) return null;

  return (
    <div className={className}>
      <SystemControl system={system} setSystem={setSystem} />
      <ul className={styles.measuresList}>
        {measures.map((measure) => {
          return (
            <li key={measure.id}>
              <Measure measure={measure} system={system} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function Measure({ measure, system = 'metric' }) {
  const { note, ingredient } = measure;
  const { amount, unit } = measure;
  const abbrUnit = units.abbr(unit);
  let displayAmount = amount;
  let unitInfo;

  if (units.isExcluded(abbrUnit)) {
    unitInfo = { abbr: abbrUnit };
  } else {
    unitInfo = convert().describe(abbrUnit);

    if (unitInfo.system !== system) {
      const converted = units.switchSystem({ unit: abbrUnit, system });
      unitInfo = convert().describe(converted);
    }
  }

  if (abbrUnit !== unitInfo.abbr) {
    // log(`Converting ${amount} ${abbrUnit} to ${unitInfo.abbr}`);
    displayAmount = convert(amount)
      .from(abbrUnit === 'oz' ? 'fl-oz' : abbrUnit)
      .to(unitInfo.abbr === 'oz' ? 'fl-oz' : unitInfo.abbr);

    displayAmount = Math.round(displayAmount);
  }

  return (
    <div className={styles.measure}>
      <span className={styles.measureDetails}>
        <span className={styles.amountLockup}>
          {displayAmount} {unitInfo.abbr}
        </span>
        &nbsp;
        <span className={styles.ingredient}>{ingredient.title}</span>
      </span>
      {note && <span className={styles.note}>{note}</span>}
    </div>
  );
}
