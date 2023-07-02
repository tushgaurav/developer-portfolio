import { Link } from "react-router-dom";
import "./BlogPostThumbnail.css";

export default function BlogPostThumbnail({
  title,
  publishedAt,
  content,
  imageUrl,
  slug,
}) {
  return (
    <div className="blog-post">
      <img className="blog-image" src={imageUrl} alt={title} />
      <div className="blog-details">
        <h2 className="blog-title">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h2>
        <p className="blog-published-at">{publishedAt}</p>
        <p className="blog-content">{content}</p>
      </div>
    </div>
  );
}
