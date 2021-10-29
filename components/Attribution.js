const Attribution = (props) => {
  const authors = props.author && props.author.map((singleAuthor) => singleAuthor.name);
  return (
    <div className="attribution">
      <style jsx>{`
        .attribution {
          display: block;
          margin-bottom: 10px;
          color: var(--grey);
          font-style: italic;
          font-size: 12px;
        }
      `}</style>
      {authors && <span className="author">By {authors.join(', ')}</span>}
      {authors && props.date && ' on '}
      {props.date && <span className="date">{props.date}</span>}
    </div>
  );
};

export default Attribution;
