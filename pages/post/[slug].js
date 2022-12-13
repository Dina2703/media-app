import ReaderNav from "../../components/articles/ReaderNav";
import Recommendations from "../../components/articles/Recommendations";

const styles = {
  content: `flex`,
};

function Post() {
  return (
    <div className={styles.content}>
      <ReaderNav />
      <div>main component</div>
      <Recommendations />
    </div>
  );
}

export default Post;
