import Card from "./Card/Card";
import Image from "next/image";
import styles from "./BlogCard.module.css";
import Badge from "./Badge/Badge";
import Link from "next/link";
import ArrowLeft from "./Icons/ArrowLeft";

type BlogCardProps = {
  image: {
    url: string;
    alt: string;
  };
  category: string;
  title: string;
  description: string;
};

function BlogCard(props: BlogCardProps) {
  const { category, description, title, image } = props;

  return (
    <Card className={styles.card}>
      <figure className={styles.blogImage}>
        <Image src={image.url} alt={image.alt} fill />
      </figure>
      <div className={styles.mainContent}>
        <Badge text={category} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Link className={styles.button} href={"/"} aria-label="Read more">
          Read more
          <ArrowLeft />
        </Link>
      </div>
    </Card>
  );
}

export default BlogCard;
