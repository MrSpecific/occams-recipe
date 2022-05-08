import { useState } from 'react';
import { request, responsiveImageFragment } from '@data/datocms';
import { gql } from 'graphql-request';
// import { Image, StructuredText } from 'react-datocms'
import styles from '@styles/Home.module.css';

import Layout from '@components/layout/Layout';
import Header from '@components/Header';
import Footer from '@components/footer';
import RecipeCard from '@components/recipeCard';

const CategoriesFilter = ({ categories, filter, setFilter }) => {
  if (!categories) return null;

  const changeCategory = (event) => {
    setFilter(event.target.value);
  };

  return (
    <ul className={styles.categoriesFilter}>
      <li className={styles.filterItem}>
        <input
          type="radio"
          id="all-categories"
          name="categories"
          value={null}
          checked={!filter}
          onChange={changeCategory}
        />
        <label for="all-categories">All</label>
      </li>
      {categories.map((category) => (
        <li key={category.slug} className={styles.filterItem}>
          <input
            type="radio"
            id={category.slug}
            name="categories"
            value={category.slug}
            checked={filter === category.slug}
            onChange={changeCategory}
          />
          <label for={category.slug}>{category.title}</label>
        </li>
      ))}
    </ul>
  );
};

const matchesFilter = ({ filter, recipe }) => {
  if (!filter) return true;

  return !!recipe.categories.find((category) => category.slug === filter);
};

export default function Home({ data }) {
  const { allRecipes, allCategories } = data;
  const [filter, setFilter] = useState(null);

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
          <CategoriesFilter categories={allCategories} filter={filter} setFilter={setFilter} />
          <ol className={styles.cardList}>
            {allRecipes.map((recipe) => {
              if (!matchesFilter({ filter, recipe })) return null;
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
