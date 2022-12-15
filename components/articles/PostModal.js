import { useState, useContext } from "react";
import { MediumContext } from "../../context/MediumContext";

const styles = {
  wrapper: `w-[60rem] h-[40rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-regular overflow-scroll `,
  title: `my-[2rem] font-bold text-3xl`,
  smallField: `w-full flex justify-between gap-[1rem]`,
  fieldTitle: `flex-1 text-end`,
  inputContainer: `flex-[5] h-min border-2 border-[#787878]`,
  inputField: "outline-none w-[full] border-0 bg-transparent pl-3",
};

function PostModal() {
  const { user } = useContext(MediumContext);
  const [article, setArticle] = useState({
    title: "",
    brief: "",
    category: "",
    postLength: "",
    bannerImage: "",
    body: "",
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Create a New Post</div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Title</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            placeholder="post title"
            className={styles.inputField}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            placeholder="post brief"
            className={styles.inputField}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image URL</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            placeholder="upload banner image"
            className={styles.inputField}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            placeholder="post category"
            className={styles.inputField}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Estimated Read Length <br /> (in minutes)
        </span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            placeholder="post title"
            className={styles.inputField}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Post Text</span>
        <span className={styles.inputContainer}>
          <textarea
            placeholder="post"
            className={styles.inputField}
            rows={10}
          />
        </span>
      </div>
    </div>
  );
}

export default PostModal;
