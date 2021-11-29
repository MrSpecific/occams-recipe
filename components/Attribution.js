import classNames from 'classnames';

const Attribution = ({ className, ...props }) => {
  const authors = props.author && props.author.map((singleAuthor) => singleAuthor.name);
  return (
    <div className={classNames(['attribution', [className]])}>
      <style jsx>{`
        .attribution {
          display: block;
          margin-bottom: 10px;
          color: var(--dark-grey);
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
