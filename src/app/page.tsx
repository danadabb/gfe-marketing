import styles from "./homepage.module.css";
import BlogCard from "@/components/BlogCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <BlogCard
        image={{
          url: "/living-room.jpg",
          alt: "living room",
        }}
        category={"Interior"}
        title={"Top 5 Living Room Inspirations"}
        description={
          "Curated vibrants colors for your living, make it pop & calm in the same time."
        }
      />
    </div>
  );
}
