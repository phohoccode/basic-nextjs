import React from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Đây là thành phần chung của bài viết</div>
      <div>{children}</div>
    </div>
  );
};

export default BlogLayout;
