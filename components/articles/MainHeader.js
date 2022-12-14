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
  authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden `,
  column: `flex flex-1 flex-col justify-center`,
  postDetails: `flex gap-[.2rem] text-[#787878]`,
  listenBtn: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: `flex items-center gap-[1rem] text-[#787878] cursor-pointer`,
  space: `w-[.5rem]`,
};

function MainHeader() {
  return (
    <header>
      <div className={styles.postHeaderContainer}>
        <div className={styles.authorContainer}>
          <div className={styles.authorProfileImageContainer}>
            <Image
              alt="test-pic"
              className="object-cover"
              src={
                "https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png"
              }
              width={100}
              height={100}
            />
          </div>
          <div className={styles.column}>
            <p>Author Name</p>
            <div className={styles.postDetails}>
              <span>June 15 &#8226; 7min read &#8226;</span>
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
