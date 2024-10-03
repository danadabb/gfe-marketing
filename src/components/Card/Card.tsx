import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

function Card(props: CardProps) {
  const { children, className } = props;
  return (
    <article className={`${styles.card} ${className}`}>{children}</article>
  );
}

export default Card;
