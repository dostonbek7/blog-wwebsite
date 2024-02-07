import { useState } from "react";
import { blogCards, title, blog, card } from "./Blogs.module.css";

function Blogs() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      name: "Jon Doe",
      date: "Aug 23, 2021",
      title: "A UX Case Study Creating a Studious Environment for Students: ",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      img: "./assets/first-blog-img.png",
    },
    {
      id: 2,
      name: "Jon Doe",
      date: "Aug 23, 2021",
      title: "A UX Case Study Creating a Studious Environment for Students: ",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      img: "./assets/second-blog-img.png",
    },
    {
      id: 3,
      name: "Jon Doe",
      date: "Aug 23, 2021",
      title: "A UX Case Study Creating a Studious Environment for Students: ",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      img: "./assets/three-blog-img.png",
    },
  ]);

  return (
    <section className={blog}>
      <div className="container">
        <h2 className={title}>Popular blogs</h2>
        <ul className={blogCards}>
          {blogs.map((blog) => {
            const { id, name, date, title, text, img } = blog;
            return (
              <li className={card} key={id}>
                <img src={img} alt={title} width={405} height={318} />
                <h6>
                  By <span>{name}</span> | {date}
                </h6>
                <h2>{title}</h2>
                <p>{text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Blogs;
