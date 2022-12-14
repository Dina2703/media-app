import Banner from "../components/Banner";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { MediumContext } from "../context/MediumContext";
import { useContext } from "react";

const styles = {
  wrapper: "mx-auto",
  main: `flex justify-center`,
  container: `max-w-7xl flex-1`,
  postList: `flex flex-col gap-3 p-5  sm:grid-cols-2 md:gap-6 md:px-16 lg:grid-cols-3`,
};

export default function Home() {
  const { users, posts } = useContext(MediumContext);

  console.log(users);
  console.log(posts);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postList}>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
}
