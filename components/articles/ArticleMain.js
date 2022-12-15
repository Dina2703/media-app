import MainArticleContainer from "./MainArticleContainer";
import MainHeader from "./MainHeader";

const styles = {
  wrapper: `flex items-start justify-center flex-[3] border-l border-r `,
  content: ` p-[3rem] w-full `,
};

function ArticleMain({ post, author }) {
  console.log(post, "post");
  console.log(author, "author");
  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <MainHeader post={post} author={author} />
        <MainArticleContainer post={post} author={author} />
      </div>
    </main>
  );
}

export default ArticleMain;
