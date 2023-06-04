import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map(node => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
            <p>Posted at {node.frontmatter.date}</p>
          </h2>
        </article>
      ))}
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY-MM-DD a hh:mm", locale: "ko_KR")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export default BlogPage;
