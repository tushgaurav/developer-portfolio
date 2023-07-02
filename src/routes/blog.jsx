import { useParams } from "react-router-dom";
import "./blog.css";
import useFetch from "../hooks/useFetch";
import { Helmet } from "react-helmet";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function formatDate(value, locale = "en-IN") {
  let time = new Date(value).toLocaleTimeString(locale);
  let date = new Date(value).toLocaleDateString(locale);

  return `${date} at ${time}`;
}

export default function Blog() {
  const { slug } = useParams();

  const { loading, error, data } = useFetch(
    `${
      import.meta.env.VITE_STRAPI_PUBLIC_URL
    }/api/blogs?filters[slug][$eq]=${slug}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data);
  return (
    <div className="container">
      <Helmet>
        <title>{data[0].attributes.title} | Aniket Aman</title>
        <meta name="description" content={data[0].attributes.content} />
      </Helmet>
      <div className="blog-container">
        <h1 className="blog-title">{data[0].attributes.title}</h1>

        <div className="datetime">
          {formatDate(data[0].attributes.publishedAt)}
        </div>
        <div>
          <img src={data[0].attributes.image} alt="" />
        </div>
        <div className="body">
          <ReactMarkdown className="react-md">
            {data[0].attributes.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
