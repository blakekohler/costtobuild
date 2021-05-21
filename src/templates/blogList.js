import React from 'react';
import * as style from './blogList.module.css'
import Header from '../components/header';
import Footer from "../components/footer";
import { Link, graphql } from "gatsby"

const Blog  = (props) => {

    const posts = props.data.allContentfulBlog.nodes;
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

  return <div>
  <title>Blog | Cost To Build</title>
  <Header></Header>
  <div className={style.secondaryHeader}>
      <h2>Cost To Build Blog</h2>
  </div>
  <div className={style.blogList}>
  {posts.map(p => {
          <Link className={style.blogItem} to={'/blogpost/' + p.slug} > 

          
              <img className={style.blogCover} src={p.heroImage.file.url}/>
              <div className={style.blogCat}>Contruction Updates</div>
              <div className={style.blogHeader}>{p.title} </div>
              <div className={style.blogCat}></div>
              <div className={style.blogDescription}>
              {p.description.description}
              </div>
              <a  className={style.readMore}>Read More › </a>
              </Link>
  })
  } 
      </div>
      <div className={style.pagination}>{!isFirst && (
    <Link className={style.previousPage} to={'/blog/' + prevPage} rel="prev">
      ← Previous Page
    </Link>
  )}
  {!isLast && (
    <Link className={style.nextPage}  to={'/blog/' + nextPage} rel="next">
      Next Page →
    </Link>
  )}</div>


      
  
  <Footer></Footer>
</div>;
};
export default Blog