import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
};

function Card(props: CardProps) {
  const { children } = props;
  return <article className={styles.card}>{children}</article>;
}

export default Card;
