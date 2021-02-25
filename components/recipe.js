const Recipe = ({ title, date, description, url, all }) => {
  console.log(all)
  return (
    <div className="recipe">
      <h2 className="recipe-title">{title}</h2>
      <a href={url}>{url}</a>
      <span>{date}</span>
      <div className="description">{description}</div>
    </div>
  )
}

export default Recipe