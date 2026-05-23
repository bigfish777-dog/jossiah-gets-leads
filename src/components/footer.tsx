import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <span>// JOSSIAH GETS LEADS &middot; LTD &middot; 2026</span>
        <div className={styles.links}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="mailto:hello@jossiahgetsleads.com">
            hello@jossiahgetsleads.com
          </a>
        </div>
      </div>
    </footer>
  );
}
