import styles from "./navbar.module.css"

function NavBar(props) {
  return <div className={`${styles.navbar}`}>{props.children}</div>
}

export default NavBar
