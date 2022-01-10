const DetailList = ({ title, items, className, itemClass }) => {
  if (!items || items.length === 0) return null;

  return (
    <div>
      {title && <h2 className="h4 decorated">{title}</h2>}
      <ul className={className}>
        {items.map((item) => {
          return (
            <li key={item.title} className={itemClass}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailList;
