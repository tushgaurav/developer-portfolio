import useFetch from "../hooks/useFetch";
import BlogPostThumbnail from "../components/sections/BlogPostThumbnail/BlogPostThumbnail";
import { Helmet } from "react-helmet";
import Button from "../components/Button";

const URL = import.meta.env.VITE_STRAPI_PUBLIC_URL;

export default function Blogs() {
  const { loading, error, data } = useFetch(`${URL}/api/blogs?populate=image`);

  console.log(data);
  return (
    <>
      <Helmet>
        <title>Blogs | Aniket Aman</title>
        <meta name="description" content="Blogs" />
      </Helmet>

      <div className="blog-header-container">
        <div className="blog-header">
          <h1>Aniket Aman Blogs</h1>
          <Button link={"/"} text={"Home"} />
        </div>
      </div>
      <div className="container">
        <div>
          <div className="blog-bio">
            I write blogs about my experiences and things I learn. I write
            mainly about life, food and travelling.
            <br />
            Hope you enjoy reading them.
          </div>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {data &&
            data.map((blog) => (
              <BlogPostThumbnail
                key={blog.attributes.id}
                title={blog.attributes.title}
                imageUrl={`${URL}${blog.attributes.image.data.attributes.url}`}
                content={blog.attributes.content.substring(0, 300) + "..."}
                slug={blog.attributes.slug}
              />
            ))}
        </div>
      </div>
    </>
  );
}
