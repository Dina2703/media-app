import Image from "next/image";
import Logo from "../static/logo.png";

function Header() {
  const styles = {
    wrapper: "flex justify-center gap-10 p-5 bg-[#fcc017]",
    content: "max-w-7xl flex-1 flex justify-between gap-10",
    logoContainer: "flex items-center flex-start",
    logo: "cursor-pointer object-contain",
    navBanner: "flex cursor-pointer items-center space-x-5",
    accentedButton: "bg-black text-white py-2 px-4 rounded-full",
  };
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image src={Logo} width={200} height={40} className={styles.logo} />
        </div>
        <div className={styles.navBanner}>
          <div>Our Story</div>
          <div>Membership</div>
          <div>Sign In</div>
          <div className={styles.accentedButton}>Get Started</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
