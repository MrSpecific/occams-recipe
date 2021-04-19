import humanizeDuration from 'humanize-duration';

const minutesToMs = (minutes) => minutes * 60000;

const DisplayTime = ({ label, time }) => {
  if (!time) return null

  return (
    <span className="time-label">{label}: {humanizeDuration(minutesToMs(time))}</span>
  )
}

const EstimatedTime = (recipe) => {
  return (
    <div className="estimated-time">
      <DisplayTime label="Prep time" time={recipe.prepTime}></DisplayTime>
      <DisplayTime label="Cook time" time={recipe.cookingTime}></DisplayTime>
      {recipe.prepTime && recipe.cookingTime && <DisplayTime label="Total time" time={recipe.prepTime + recipe.cookingTime}></DisplayTime>}
    </div>
  )
}

export default EstimatedTime