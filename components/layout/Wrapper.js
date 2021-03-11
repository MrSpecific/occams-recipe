import styles from '@styles/layout/Wrapper.module.css'

const Wrapper = (props) => {
  const { width = 'standard' } = props
  return <div className={`${styles[width]} wrapper`}>{props.children}</div>
}

export default Wrapper