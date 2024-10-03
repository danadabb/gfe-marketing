import Image from "next/image";
import Card from "./Card/Card";
import styles from "./TestimonialCard.module.css";

function TestimonialCard() {
  return (
    <Card>
      <div className={styles.header}>
        <Image
          src="/profile-thumbnail.png"
          alt={"profile picture"}
          height={48}
          width={48}
        />
        <div className={styles.userDetails}>
          <h3>Sarah Doyle</h3>
          <span className={styles.userName}>@sarahdole</span>
        </div>
      </div>
      <p
        className={styles.cardBody}
      >{`I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`}</p>
    </Card>
  );
}

export default TestimonialCard;
