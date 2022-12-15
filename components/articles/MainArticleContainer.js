import React from "react";
import Image from "next/image";

const styles = {
  articleMainContainer: `flex flex-col gap-[1rem] pb-[1rem]`,
  bannerContainer: `overflow-hidden mb-[2rem] `,
  title: `font-bold text-3xl`,
  subtitle: `text-[1.4rem] text-[#292929] charterBoldItalic`,
  articleText: `charterItalic text-[1rem] text-[#292929]`,
};

function MainArticleContainer({ post, author }) {
  console.log(post);
  return (
    <section className={styles.articleMainContainer}>
      <div className={styles.bannerContainer}>
        <Image
          priority
          alt="test-pic"
          className="object-fill h-[12rem] w-full "
          src={
            "https://www.svgheart.com/wp-content/uploads/2021/11/alphabet-letters-font-free-svg-files-SvgHeart.Com.png"
          }
          width={500}
          height={500}
        />
      </div>
      <h1 className={styles.title}>{post?.data?.title}</h1>
      <h4 className={styles.subtitle}>
        <div>
          {author?.data?.name}, {"  "}
          {new Date(post?.data?.postedOn.seconds * 1000).toLocaleString(
            "en-US",
            {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
          )}{" "}
        </div>
        <div>{post?.data?.brief}</div>
      </h4>
      <div className={styles.articleText}>{post?.data?.body}</div>
    </section>
  );
}

export default MainArticleContainer;
