import Image from "next/image";
import Link from "next/link";
import { BsBookmark } from "react-icons/bs";

const styles = {
  wrapper: ` max-w-[26rem] h-[10rem] flex  items-center gap-3 cursor-pointer  `,
  authorContainer: `flex gap-2 items-center `,
  authorImage: `rounded-full object-cover `,
  postDetails: ` flex flex-col  flex-[2.5]`,
  title: `font-bold text-[1rem]`,
  briefing: `text-[#787878] text-[.8rem]`,
  authorName: `font-semibold text-[.8rem]`,
  articleDetails: `text-[#787878] text-[.7rem]  flex space-between items-center gap-3 my-2`,
  bookmarkIcon: `ml-auto cursor-pointer`,
  thumnailContainer: "flex-1",
};

function PostCard({ post }) {
  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <Image
              alt="test-pic"
              className={styles.authorImage}
              src={
                "https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png"
              }
              width={40}
              height={40}
            />
            <div className={styles.authorName}>Person Name</div>
          </div>
          <h3 className={styles.title}>{post.data.title}</h3>
          <p className={styles.briefing}>{post.data.brief}</p>
          <div className={styles.articleDetails}>
            <span>
              {new Date(post.data.postedOn.seconds * 1000).toLocaleString(
                "en-US",
                {
                  day: "numeric",
                  month: "short",
                }
              )}
              &#8226;
            </span>
            <span>{post.data.postLength} min read</span>
            <span className="bg-[#efeaea] px-1 rounded-md">
              {post.data.category}
            </span>
            <span className={styles.bookmarkIcon}>
              <BsBookmark />
            </span>
          </div>
        </div>
        <div className={styles.thumnailContainer}>
          <Image
            className="object-cover"
            alt="test-pic"
            src={post.data.bannerImage}
            width={200}
            height={200}
          />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
