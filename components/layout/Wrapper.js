import styles from '@styles/layout/Wrapper.module.css';
import classNames from 'classnames';

const Wrapper = (props) => {
  const { width = 'standard' } = props;
  // const class = classNames('wrapper', {
  //   [styles[width]]: true,
  // })

  const className = classNames({
    wrapper: true,
    padding: props.padding,
    gutter: props.gutter,
    [styles[width]]: true,
  });
  // return <div className={`${styles[width]} wrapper`}>{props.children}</div>
  return <div className={className}>{props.children}</div>;
};

export default Wrapper;
