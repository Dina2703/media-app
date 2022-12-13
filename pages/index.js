import Banner from "../components/Banner";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

export default function Home() {
  const styles = {
    wrapper: "mx-auto",
    main: `flex justify-center`,
    container: `max-w-7xl flex-1`,
    postList: `flex flex-col gap-3 p-5  sm:grid-cols-2 md:gap-6 md:px-16 lg:grid-cols-3`,
  };
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
