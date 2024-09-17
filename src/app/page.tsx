import Button from "@/components/Button";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      Homepage
      <br />
      <Button>Magenta Button</Button>
      <br />
      <a href="/about">Go to about page</a>
    </div>
  );
}
