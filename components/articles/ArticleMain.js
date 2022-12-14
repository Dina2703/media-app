import MainArticleContainer from "./MainArticleContainer";
import MainHeader from "./MainHeader";

const styles = {
  wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
  content: `h-screen p-[2rem] w-`,
};

function ArticleMain() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <MainHeader />
        <MainArticleContainer />
      </div>
    </div>
  );
}

export default ArticleMain;
