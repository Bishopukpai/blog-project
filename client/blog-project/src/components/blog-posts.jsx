import React, { useState } from "react";

const postsData = [
  { id: 1, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..."},
  { id: 2, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 3, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 4, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 5, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 2, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 3, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 4, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 5, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 2, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 3, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 4, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 5, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 2, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 3, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 4, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
  { id: 5, image: "Justice-Lenaola.jpg", title: "Kenya's Supreme Court warns against AI use after lawyers submit fake citations", author: "Darwin", date: "May 20, 2025", summary: "A Kenyan Supreme Court judge has warned judges and lawyers about using artificial intelligence tools like ChatGPT in court submissions following a case in which fabricated legal citations were..." },
];

const POSTS_PER_PAGE = 5;

const BlogPost = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(postsData.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = postsData.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <main>
      {currentPosts.map((post) => (
        <div className="post" key={post.id}>
          <div className="image">
            <img src={post.image} alt="" />
          </div>
          <div className="text">
            <h2>{post.title}</h2>
            <p className="info">
              <span className="author">{post.author}</span>
              <time>{post.date}</time>
            </p>
            <p className="summary">{post.summary}</p>
          </div>
        </div>
      ))}

      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => goToPage(pageNum)}
              disabled={pageNum === currentPage}
            >
              {pageNum}
            </button>
          );
        })}

        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </main>
  );
};

export default BlogPost;