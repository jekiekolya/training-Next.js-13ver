import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Home page</p>
      <Link href="/signUp"> Link to signUp page</Link>
    </main>
  );
}
