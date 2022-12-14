import MainArticleContainer from "./MainArticleContainer";
import MainHeader from "./MainHeader";

const styles = {
  wrapper: `flex items-start justify-center flex-[3] border-l border-r `,
  content: ` p-[3rem] w-full `,
};

function ArticleMain() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <MainHeader />
        <MainArticleContainer />
      </div>
    </main>
  );
}

export default ArticleMain;
