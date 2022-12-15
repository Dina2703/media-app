import Image from "next/image";
import Logo from "../static/logo.png";
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
        <div className={styles.navBanner}>
          <div>Our Story</div>
          <div>Membership</div>
          <div>Sign In</div>
          <div className={styles.accentedButton}>Get Started</div>
        </div>
        <div className={styles.accentedButtonMobile}>Get Started</div>
      </div>
    </header>
  );
}

export default Header;
