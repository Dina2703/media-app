import Image from "next/image";
function Banner() {
  const styles = {
    wrapper:
      "h-max-[10rem] bg-[#fcc017] flex items-center justify-center border-y border-black",
    content: "max-w-7xl flex items-center justify-between px-10 my-4",
    accentedButton: "bg-black text-white py-2 px-4 rounded-full",
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="space-y-5 flex-[3]">
          <h1 className="max-w-xl text-[3rem] md:text-[6rem] font-charterBoldItalic ">
            Stay Curious
          </h1>
          <h3 className="text-2xl">
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>
          <button className={styles.accentedButton}>Start Reading</button>
        </div>
        <div>
          <Image
            className="hidden h-58 md:inline-flex object-contain flex-1"
            src={
              "https://www.svgheart.com/wp-content/uploads/2021/11/alphabet-letters-font-free-svg-files-SvgHeart.Com.png"
            }
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
