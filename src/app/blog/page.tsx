import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";


const Blogs = async () => {

  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();



  console.log(data);

  return (
    <div className={styles.blog}>
      <p>Danh sách các bài viết</p>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
