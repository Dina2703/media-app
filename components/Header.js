import Image from "next/image";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";
import Logo from "../static/logo.png";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Link from "next/link";
import PostModal from "./articles/PostModal";

//set Modal in Nextjs
Modal.setAppElement("#__next");
//Modal styling
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    bottom: "auto",
    right: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: 0,
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(10, 11, 13, 0.55)",
  },
};

const styles = {
  wrapper: "flex justify-center gap-10 p-5 bg-[#fcc017]",
  content: "max-w-7xl flex-1 flex justify-between gap-10",
  logoContainer: "flex items-center flex-start",
  logo: "cursor-pointer object-contain",
  navBanner: "cursor-pointer items-center space-x-5 hidden md:flex",
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
  accentedButtonMobile:
    "flex items-center bg-black text-sm text-white py-1 px-3 rounded-full md:hidden",
};

function Header() {
  const { handleUserAuth, currentUser } = useContext(MediumContext);

  const router = useRouter();

  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            priority
            src={Logo}
            width={400}
            height={200}
            alt="test-pic"
            className={styles.logo}
          />
        </div>

        {currentUser ? (
          <div className={styles.navBanner}>
            <div>Our Story</div>
            <div>Membership</div>
            <Link href={"/?addNew=1"}>
              <div className={styles.accentedButton}>Write</div>
            </Link>
            <div className={styles.accentedButton}>Get Unlimited Access</div>
          </div>
        ) : (
          <div className={styles.navBanner}>
            <div>Our Story</div>
            <div>Membership</div>
            <div onClick={handleUserAuth}>Sign In</div>
            <div className={styles.accentedButton}>Get Started</div>
          </div>
        )}

        <div className={styles.accentedButtonMobile}>Get Started</div>
      </div>
      <Modal
        style={customStyles}
        isOpen={Boolean(router.query.addNew)}
        onRequestClose={() => router.push("/")}
      >
        <PostModal />
      </Modal>
    </header>
  );
}

export default Header;
