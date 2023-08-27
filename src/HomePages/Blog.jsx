import React, { useState } from 'react';
import './blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([
    { title: 'First Blog', content: 'content of the first blog.' },
    { title: 'Second Blog', content: 'content of the second blog.' },
    // Add more blogs as needed
  ]);

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      {blogs.map((blog, index) => (
        <div key={index} className="blog">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;