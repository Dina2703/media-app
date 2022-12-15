import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const styles = {
  postHeaderContainer: `flex justify-between items-center mt-[1.5rem] mb-[1.2rem]`,
  authorContainer: `flex gap-[1rem] mr-[8rem]`,
  authorProfileImageContainer: `h-[3rem] w-[3rem] rounded-full overflow-hidden flex `,
  column: `flex flex-1 flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenBtn: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex items-center gap-[1rem] text-[#787878] cursor-pointer`,
  space: `w-[.5rem]`,
};

function MainHeader({ author, post }) {
  return (
    <header>
      <div className={styles.postHeaderContainer}>
        <div className={styles.authorContainer}>
          <div className={styles.authorProfileImageContainer}>
            <Image
              alt="test-pic"
              className="object-cover"
              src={author?.data?.imageUrl}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.column}>
            <p>{author?.data?.name}</p>
            <div className={styles.postDetails}>
              <span>
                {new Date(post?.data?.postedOn.seconds * 1000).toLocaleString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "short",
                  }
                )}{" "}
                &#8226; {post?.data?.postLength} min read &#8226;
              </span>
              <span className={styles.listenBtn}>
                <AiFillPlayCircle />
                Listen
              </span>
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          <IoLogoTwitter />
          <FaFacebook />
          <GrLinkedin />
          <HiOutlineLink />
          <div className={styles.space} />
          <BiBookmarks />
          <FiMoreHorizontal />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
