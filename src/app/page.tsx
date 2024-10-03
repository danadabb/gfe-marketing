import TestimonialCard from "@/components/TestimonialCard";
import styles from "./homepage.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <TestimonialCard className={styles.testimonial} />
    </div>
  );
}
