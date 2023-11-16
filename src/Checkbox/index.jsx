import styles from './styles.module.scss'


export const Checkbox = (props) => {



    return (
      <input type="checkbox"
      checked={props.status} onChange={()=> props.handleChange()}
      />

    )
  }

export default Checkbox