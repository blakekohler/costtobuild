import React from 'react';
import * as style from './blogPost.module.css'
import Header from '../components/header';
import Footer from "../components/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'


const BlogPost  = ({ data }) => {
    const { title, body, description, heroImage, author, slug } = data.contentfulBlog;

  return <div>
            <SEO title={title} description={description.description} img={heroImage.file.url} myUrl={'https://www.costtobuild.net/blogpost/' + slug}  />

      <Header></Header>
      <div className={style.secondaryHeader}>
          <h2>From The Blog</h2>
      </div>

      <div className={style.blog}>
          <img src={heroImage.file.url} className={style.hero} />
          <h1>{title}</h1>
          <div className={style.infoRow}>
              {author.name} 
          </div>

          <div className={style.content} dangerouslySetInnerHTML={{
    __html: body.childMarkdownRemark.html,
  }}></div>
 <br></br>
 <hr></hr>
 <div className={style.buttonholder}>
  <Link className={style.learnmore} to="/blog/">View more posts</Link>
        <Link className={style.learnmore} to="/">Back to Home</Link>
  </div>
        


      </div>
      <Footer></Footer>
  </div>;
};
export default BlogPost


export const pageQuery = graphql`
  query($slug: String!) 
  {

    contentfulBlog(slug: { eq: $slug }) 
    {
      title
      author {
        name
        title
      }
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      description{
        description
      }
      heroImage {
        file {
          url
        }
      }
      
    }

    allContentfulBlog(limit: 4) 
    {
      edges {
        node {
          description {
            description
          }
          heroImage {
            file {
              url
            }
            title
          }
          author {
            name
            title
            id
          }
          title
          slug
        }
      }
    }

    
  }
`;