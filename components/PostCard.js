import Image from "next/image";
import Link from "next/link";
import { BsBookmark } from "react-icons/bs";

const styles = {
  wrapper: ` max-w-[26rem] h-[10rem] flex  items-center gap-6 cursor-pointer `,
  authorContainer: `flex gap-2 items-center `,
  authorImage: `rounded-full object-cover `,
  postDetails: ` flex-flex-col `,
  title: `font-bold text-[1rem]`,
  briefing: `text-[#787878] text-[.8rem]`,
  authorName: `font-semibold text-[.8rem]`,
  articleDetails: `text-[#787878] text-[.7rem]  flex space-between items-center gap-3 my-2`,
  bookmarkIcon: `ml-auto cursor-pointer`,
};

function PostCard() {
  return (
    <Link href={`/post/1`}>
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
          <h3 className={styles.title}>
            7 Free Tools That Will Make You More Productive In 2022
          </h3>
          <p className={styles.briefing}>
            Productivity is a skill that can be learned
          </p>
          <div className={styles.articleDetails}>
            <span>Jun 15 *</span>
            <span>5 min read</span>
            <span className="bg-[#efeaea] px-1 rounded-md">productivity</span>
            <span className={styles.bookmarkIcon}>
              <BsBookmark />
            </span>
          </div>
        </div>
        <div className={styles.thumnailContainer}>
          <Image
            alt="test-pic"
            src={
              "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            }
            width={140}
            height={140}
          />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
