import Image from "next/image";
import Link from "next/link";
import Logo from "../../static/smallLogo.png";
import { HiOutlineHome } from "react-icons/hi";
import { FiBell } from "react-icons/fi";
import { BiBookmarks } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";

const styles = {
  wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem] `,
  logoContainer: `cursor-pointer`,
  iconsContainer: `flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]`,
  divider: `border-b`,
  profileImageContainer: `w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden place-items-center `,
  profileImage: `object-cover`,
};

function ReaderNav() {
  return (
    <div className={styles.wrapper}>
      <Link href={"/"}>
        <div className={styles.logoContainer}>
          <Image src={Logo} height={70} />
        </div>
      </Link>
      <div className={styles.iconsContainer}>
        <HiOutlineHome />
        <FiBell />
        <BiBookmarks />
        <RiArticleLine />
        <div className={styles.divider} />
        <BsPencilSquare />
      </div>
      <div className={styles.profileImageContainer}>
        <Image
          className={styles.profileImage}
          src={
            "https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png"
          }
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default ReaderNav;
