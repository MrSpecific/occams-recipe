import classNames from 'classnames';
import humanizeDuration from 'humanize-duration';

const minutesToMs = (minutes) => minutes * 60000;

const DisplayTime = ({ label, time }) => {
  if (!time) return null;

  return (
    <span className="time-label">
      <style jsx>{`
        .time-label {
          display: block;
        }

        .time-text {
          font-weight: 700;
        }
      `}</style>
      {label}: <span className="time-text">{humanizeDuration(minutesToMs(time))}</span>
    </span>
  );
};

const EstimatedTime = ({ recipe, className }) => {
  return (
    <div className={classNames(['estimated-time', { [className]: !!className }])}>
      <DisplayTime label="Prep time" time={recipe.prepTime} />
      <DisplayTime label="Cook time" time={recipe.cookingTime} />
      {recipe.prepTime && recipe.cookingTime && (
        <DisplayTime label="Total time" time={recipe.prepTime + recipe.cookingTime} />
      )}
    </div>
  );
};

export default EstimatedTime;
