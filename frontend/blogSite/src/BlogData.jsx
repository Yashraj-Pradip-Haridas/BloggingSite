import React from "react";
import "./Blog.css";

const BlogCard = ({
  title,
  author,
  description,
  imageUrl,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="blog-card">
      <div className="blog-card__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="blog-card__content">
        <h3 className="blog-card__title">{title}</h3>
        <p className="blog-card__author">By {author}</p>
        <p className="blog-card__description">{description}</p>
        <div className="blog-card__buttons">
          <button className="blog-card__edit-btn" onClick={onEdit}>
            Edit
          </button>
          <button className="blog-card__delete-btn" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
