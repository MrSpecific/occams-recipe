const Attribution = (props) => {
  const authors = props.author && props.author.map(singleAuthor => singleAuthor.name)
  return (
    <div className="attribution">
      {authors && <span className="author">By {authors.join(', ')}</span>}
      {authors && props.date && ' on '}
      {props.date && <span className="date">{props.date}</span>}
    </div>
  )
}

export default Attribution