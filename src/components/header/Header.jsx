import styles from './Header.module.scss'
import logoRimac from '../../assets/logo-rimac.png'
import { FaPhoneAlt } from 'react-icons/fa'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.column1}>
        <img src={logoRimac} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.rightGroup}>
        <div className={styles.column2}>¡Compra por este medio!</div>
        <div className={styles.column3}>
          <FaPhoneAlt /> (01) 411 6001
        </div>
      </div>
    </header>
  )
}
