import { request, responsiveImageFragment } from "data/datocms";
import { gql } from "graphql-request";
// import { Image, StructuredText } from 'react-datocms'
import styles from "@styles/Home.module.css";

import Header from "@components/Header";
import Footer from "@components/footer";
import RecipeCard from "@components/recipeCard";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Header></Header>

      <style jsx>{`
        .recipe :global(.ingredient-name) {
          font-weight: bold;
        }
      `}</style>

      <main className={styles.main}>
        <ol className={styles.cardList}>
          {data.allRecipes.map((recipe) => {
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
  }

  ${responsiveImageFragment}
`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
    preview: false,
  });

  return {
    props: { data },
  };
}
