import styles from "./Badge.module.css";

type BadgeProps = {
  text: string;
};

function Badge(props: BadgeProps) {
  const { text } = props;
  return <div className={styles.badge}>{text}</div>;
}

export default Badge;
