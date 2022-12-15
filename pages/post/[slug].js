import { useContext, useEffect, useState } from "react";
import ArticleMain from "../../components/articles/ArticleMain";
import ReaderNav from "../../components/articles/ReaderNav";
import Recommendations from "../../components/articles/Recommendations";
import { MediumContext } from "../../context/MediumContext";
import { Router, useRouter } from "next/router";

const styles = {
  content: `flex`,
};

function Post() {
  const { posts, users } = useContext(MediumContext);
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState(null);

  // console.log(post, "post");
  // console.log(author, "author");

  const router = useRouter();

  useEffect(() => {
    if (posts.length === 0) {
      return;
    }
    // console.log(router.query.slug);
    setPost(posts.find((post) => post.id === router.query.slug));
  }, []);

  useEffect(() => {
    if (users.length === 0) {
      return;
    }
    setAuthor(users.find((user) => user.id === post?.data?.author));
  }, [post]);

  return (
    <main className={styles.content}>
      <ReaderNav />
      <ArticleMain post={post} author={author} />
      <Recommendations />
    </main>
  );
}

export default Post;
