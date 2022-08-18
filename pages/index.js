import { request, responsiveImageFragment } from '@data/datocms';
import { gql } from 'graphql-request';

import Layout from '@components/layout/Layout';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import CardGrid from '@components/CardGrid';
import RecipeFilter from '@components/RecipeFilter';
import styles from '@styles/Home.module.css';

export default function Home({ data }) {
  const { allRecipes, allCategories } = data;

  return (
    <Layout>
      <div className={styles.container}>
        <Header></Header>

        <style jsx>{`
          .recipe :global(.ingredient-name) {
            font-weight: bold;
          }
        `}</style>

        <main className={styles.main}>
          <div className="wrapper">
            <RecipeFilter categories={allCategories} />
          </div>
          <CardGrid recipes={allRecipes} className={styles.cardList} />
        </main>

        <Footer></Footer>
      </div>
    </Layout>
  );
}

const HOMEPAGE_QUERY = gql`
  query HomePage($limit: IntType) {
    allRecipes(first: $limit, orderBy: [date_DESC]) {
      id
      title
      slug
      date
      cover {
        responsiveImage(imgixParams: { fit: crop, w: 600, h: 600 }) {
          ...responsiveImageFragment
        }
      }
      description
      author {
        name
      }
      categories {
        title
        slug
      }
    }
    allCategories(orderBy: title_ASC) {
      id
      title
      slug
    }
  }

  ${responsiveImageFragment}
`;

export async function getStaticProps(context) {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 100 },
    preview: context.preview,
  });

  return {
    props: { data },
  };
}
