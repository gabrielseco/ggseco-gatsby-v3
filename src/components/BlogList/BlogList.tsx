import * as React from 'react';
import { BlogListNode, BlogListFrontmatter } from '../../pages';

const BlogListItem = ({ item }: {item: BlogListFrontmatter}) => {
  return (
      <article>
      <div className="wrapper">
        <ul>
          <li>
            <span>{item.tags[0]}</span>
          </li>
          <li>
            <a href="#">
              <time>{item.date}</time>
            </a>
          </li>
        </ul>
  
        <h2>
          <a href="#">
            {item.title}
          </a>
        </h2>
  
        <p>
          {item.excerpt}
        </p>
      </div>
  
    </article>
  )
}

const BlogList = ({ items } : {items: BlogListNode[]}): any => {
  return items.map((item, key) => {
    return <BlogListItem key={key} item={item.node.frontmatter} />
  })
};

export default BlogList;
