import { useState } from 'react';
import { request, responsiveImageFragment } from '@data/datocms';
import { gql } from 'graphql-request';
// import { Image, StructuredText } from 'react-datocms'
import styles from '@styles/Home.module.css';

import { useAppContext } from '@data/context';
import Layout from '@components/layout/Layout';
import Header from '@components/Header';
import Footer from '@components/footer';
import CategoriesFilter, { matchesFilter } from '@components/CategoriesFilter';
import RecipeCard from '@components/recipeCard';

export default function Home({ data }) {
  const { allRecipes, allCategories } = data;
  const [filter, setFilter] = useState(null);
  const { categoryFilter, setCategoryFilter } = useAppContext();

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
          <CategoriesFilter
            categories={allCategories}
            filter={categoryFilter}
            setFilter={setCategoryFilter}
          />
          <ol className={styles.cardList}>
            {allRecipes.map((recipe) => {
              if (!matchesFilter({ filter: categoryFilter, recipe })) return null;
              return (
                <li key={recipe.id}>
                  <RecipeCard {...recipe}></RecipeCard>
                </li>
              );
            })}
          </ol>
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
    allCategories {
      id
      title
      slug
    }
  }

  ${responsiveImageFragment}
`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 100 },
    preview: false,
  });

  return {
    props: { data },
  };
}
