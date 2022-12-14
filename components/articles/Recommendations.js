import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";

const styles = {
  wrapper: ` min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem] `,
  accentedButton: `flex items-center justify-center text-sm bg-black my-[2rem] py-[.6rem] text-white rounded-full`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
  searchInput: `border-none outline-none bg-non w-full`,
  authorContainer: `my-[2rem]`,
  authorProfileImageContainer: `h-[5rem], w-[5rem] overflow-hidden rounded-full`,
  authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing: `text-[#787878]`,
  authorActions: `flex  items-center gap-[.6rem] my-[1rem]`,
  authorBtn: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm`,
  title: "",
  recommendAuthorImage: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  recommendAuthorName: `text-sm`,
  recommendAuthContent: `flex items-center gap-[.6rem]`,
  recommendTitle: `font-bold`,
  recommendThumbnailContainer: `flex flex-1 h-[4.2rem] w-[4.6rem] `,
  recommendThumbnail: `object-cover`,
  articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem] `,
  articleContent: `flex-[4]`,
};

function Recommendations() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get Unlimited Access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
      </div>

      <div className={styles.authorContainer}>
        <div className={styles.authorProfileImageContainer}>
          <Image
            src={
              "https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png"
            }
            width={100}
            height={100}
          />
        </div>
        <div className={styles.authorName}>User Name</div>
        <div className={styles.authorFollowing}>100 followers</div>
        <div className={styles.authorActions}>
          <button className={styles.authorBtn}>Follow</button>
          <button className={styles.authorBtn}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>

      <div className={styles.recommendationContainer}>
        <div className={styles.title}>More from Medium</div>
        <div className={styles.articlesContainer}>
          {recommendedPosts.map((post) => (
            <div className={styles.articleContentWrapper} key={post.id}>
              <div className={styles.articleContent}>
                <div className={styles.recommendAuthContent}>
                  <div className={styles.recommendAuthorImage}>
                    <Image src={post.author.image} width={100} height={100} />
                  </div>
                  <div className={styles.recommendAuthorName}>
                    {post.author.name}
                  </div>
                </div>
                <div className={styles.recommendTitle}>{post.title}</div>
              </div>

              <div className={styles.recommendThumbnailContainer}>
                <Image
                  className={styles.recommendThumbnail}
                  src={post.image}
                  width={200}
                  height={150}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendations;

const recommendedPosts = [
  {
    id: 1,
    title: "The Ultimate Javascript Course for Beginners by Clever Programmer",
    image:
      "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    author: {
      name: "Clever Programmer",
      image:
        "https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png",
    },
  },
  {
    id: 2,
    title: "Don’t Just LeetCode; Follow the Coding Patterns Instead",
    image:
      "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWN0JTIwJTIwcHJvZ3JhbW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    author: {
      name: "Arslan Ahmad",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
  {
    id: 3,
    title: "Which Database Should You Use for Your Next.js App?",
    image:
      "https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJlYWN0JTIwJTIwcHJvZ3JhbW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    author: {
      name: "Fernando Doglio",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  },
];
