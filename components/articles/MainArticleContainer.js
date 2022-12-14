import React from "react";
import Image from "next/image";

const styles = {
  articleMainContainer: `flex flex-col gap-[1rem] pb-[1rem]`,
  bannerContainer: `overflow-hidden mb-[2rem] `,
  title: `font-bold text-3xl`,
  subtitle: `text-[1.4rem] text-[#292929] charterBoldItalic`,
  articleText: `charterItalic text-[1rem] text-[#292929]`,
};

function MainArticleContainer() {
  return (
    <section className={styles.articleMainContainer}>
      <div className={styles.bannerContainer}>
        <Image
          className="object-fill h-[12rem] w-full "
          src={
            "https://www.svgheart.com/wp-content/uploads/2021/11/alphabet-letters-font-free-svg-files-SvgHeart.Com.png"
          }
          width={500}
          height={500}
        />
      </div>
      <h1 className={styles.title}>
        The Ultimate Javascript Course for Beginners by Clever Programmer
      </h1>
      <h4 className={styles.subtitle}>
        <div>Author Name, June 15, 2022</div>
        <div>
          Brief: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
      </h4>
      <div className={styles.articleText}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
        ducimus quam labore rem aliquid soluta autem nisi et magni deserunt
        recusandae repellat, voluptatibus facere est quia quisquam consectetur
        voluptas obcaecati.
      </div>
    </section>
  );
}

export default MainArticleContainer;
