import styles from './index.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div>Logo</div>
      <div>
        <ul>
          <li>Products</li>
          <li>Who we are</li>
          <li>Let's Talk</li>
        </ul>
      </div>
    </div>
  )
}

export default Header