import ArticleMain from "../../components/articles/ArticleMain";
import ReaderNav from "../../components/articles/ReaderNav";
import Recommendations from "../../components/articles/Recommendations";

const styles = {
  content: `flex`,
};

function Post() {
  return (
    <div className={styles.content}>
      <ReaderNav />
      <ArticleMain />
      <Recommendations />
    </div>
  );
}

export default Post;
