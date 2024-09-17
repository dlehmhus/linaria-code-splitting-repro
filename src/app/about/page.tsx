import Button from "@/components/Button";
import styles from "./styles.module.css";

function AboutPage() {
  return (
    <div className={styles.aboutWrapper}>
      Hello World
      <br />
      <Button>Magenta button</Button>
      <br />
      <a href="/">Go to homepage</a>
    </div>
  );
}

export default AboutPage;
