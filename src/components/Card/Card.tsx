import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
};

function Card(props: CardProps) {
  const { children } = props;
  return <div className={styles.card}>{children}</div>;
}

export default Card;
