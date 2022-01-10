import Head from 'next/head';
// import { useRouter } from 'next/router';
import { gql } from 'graphql-request';
import { Image, StructuredText } from 'react-datocms';
import classNames from 'classnames';
import siteInfo from '@data/siteInfo';
import { getPaths } from '@data/data';
import { request, responsiveImageFragment, getRecipeList } from '@data/datocms';

import Layout from '@components/layout/Layout';
import Header from '@components/Header';
import Footer from '@components/footer';
import Wrapper from '@components/layout/Wrapper';
import Attribution from '@components/Attribution';
import EstimatedTime from '@components/EstimatedTime';
import IngredientsList from '@components/IngredientsList';
import DetailList from '@components/DetailList';

import styles from '@styles/recipe.module.css';

// eslint-disable-next-line no-unused-vars
const { log } = console;

export const RecipeCategories = ({ categories }) => {
  return (
    <div>
      <h2 className="h4 decorated">Categories</h2>
      <ul className={styles.categoriesList}>
        {categories.map((category) => {
          return (
            <li key={category.slug} className={styles.categoryItem}>
              {category.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function SingleRecipe(props) {
  const {
    title,
    slug,
    description,
    date,
    cover,
    ingredients,
    equipment,
    instructions,
    context,
    categories,
    tags,
  } = props;
  // const router = useRouter();
  // const id = router.query;
  // log(context);

  return (
    <Layout>
      <Head>
        <meta property="og:title" content={`${title} | ${siteInfo.title}`} key="og:title" />
        <meta property="og:url" content={`${siteInfo.url}/recipe/${slug}`} key="og:url" />
        <meta property="og:description" content={description} key="og:description" />
        <meta property="og:type" content="article" key="og:type" />
        <meta property="article:published_time" content={date} />
        <meta
          property="og:image"
          content={cover?.responsiveImage.src || siteInfo.opengraphImage}
          key="og:image"
        />
        <meta
          property="twitter:image"
          content={cover?.responsiveImage.src || siteInfo.opengraphImage}
          key="twitter:image"
        />
      </Head>
      <style jsx>{`
        .recipe :global(.ingredient-name) {
          font-weight: bold;
        }
      `}</style>
      <Header title={title}></Header>

      <div className={styles.recipe}>
        <Attribution {...props} className={styles.attribution}></Attribution>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image data={cover.responsiveImage} className={styles.featuredImage} />

        <Wrapper width="standard" padding="true" gutter="true">
          <EstimatedTime recipe={props} className={styles.estimatedTime} />

          <div className={styles.vitals}>
            {ingredients && (
              <section className="ingredients">
                <div className={styles.ingredientsInner}>
                  <h2 className="decorated">Ingredients:</h2>
                  <IngredientsList ingredients={ingredients} />
                </div>
              </section>
            )}

            {instructions && (
              <section className="instructions">
                <h2 className="decorated">Instructions:</h2>
                <div className={classNames(['content', [styles.instructionsWrapper]])}>
                  <StructuredText data={instructions} />
                </div>
              </section>
            )}
          </div>

          <div className={styles.recipeMeta}>
            <DetailList title="Equipment" items={equipment} />
            <DetailList title="Categories" items={categories} />
            <DetailList
              title="Tags"
              items={tags}
              className={styles.tagsList}
              itemClass={styles.tagItem}
            />
          </div>

          {context && (
            <section className={styles.context}>
              <h2 className="decorated">Context:</h2>

              <div className={styles.contextContent}>
                <StructuredText data={context} />
              </div>
            </section>
          )}
        </Wrapper>
      </div>

      <Footer></Footer>
    </Layout>
  );
}

export async function getStaticPaths() {
  const allRecipes = await getRecipeList();

  const paths = getPaths(allRecipes, 'recipeSlug');

  return {
    paths,
    fallback: false,
  };
}

const SINGLE_RECIPE_QUERY = gql`
  query Recipe($slug: String) {
    recipe(filter: { slug: { eq: $slug } }) {
      title
      date
      description
      slug
      cover {
        responsiveImage(imgixParams: { fit: crop, w: 1400, h: 800 }) {
          ...responsiveImageFragment
        }
      }
      prepTime
      cookingTime
      context {
        value
      }
      ingredients {
        id
        ingredient
        amount
      }
      equipment {
        id
        title
        link
      }
      instructions {
        value
      }
      author {
        name
      }
      categories {
        title
        slug
      }
      tags {
        title
      }
      gallery {
        id
      }
    }
  }

  ${responsiveImageFragment}
`;

export async function getStaticProps({ params }) {
  const data = await request({
    query: SINGLE_RECIPE_QUERY,
    variables: { slug: params.recipeSlug },
    preview: false,
  });

  return {
    props: data.recipe,
  };
}
