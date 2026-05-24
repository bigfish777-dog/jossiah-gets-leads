import styles from "./nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.row}>
        <a href="#" className={styles.logo}>
          JOSSIAH GETS<span className={styles.arrow}>&#x2197;</span>LEADS
        </a>
        <div className={styles.links}>
          <a href="#offer">The offer</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className={styles.right}>
          <span className={styles.status}>
            <span className={styles.pulse} />
            3 founding slots open
          </span>
          <a href="#apply" className={styles.cta}>
            Plot a call &#x2197;
          </a>
        </div>
      </div>
    </nav>
  );
}
