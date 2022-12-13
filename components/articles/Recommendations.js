import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";

const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem] `,
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
        <div className={styles.articleContainer}>
          <div className={styles.articleContentWrapper}>
            <div className={styles.articleContent}>
              <div className={styles.recommendAuthContent}>
                <div className={styles.recommendAuthorImage}>
                  <Image
                    src={
                      "https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png"
                    }
                    width={100}
                    height={100}
                  />
                </div>
                <div className={styles.recommendAuthorName}>Author Name</div>
              </div>
              <div className={styles.recommendTitle}>
                The Ultimate Javascript Course for Beginners by Clever
                Programmer
              </div>
            </div>

            <div className={styles.recommendThumbnailContainer}>
              <Image
                className={styles.recommendThumbnail}
                src={
                  "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                }
                width={200}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
