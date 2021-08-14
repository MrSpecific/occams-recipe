import { useRouter } from 'next/router';
import { gql } from 'graphql-request';
import { Image, StructuredText } from 'react-datocms';
import { recipes, getPaths, getEntry } from '@data/data';
import { request, responsiveImageFragment, getRecipeList } from '@data/datocms';

import Header from '@components/Header';
import Footer from '@components/footer';
import Wrapper from '@components/layout/Wrapper';
import Attribution from '@components/Attribution';
import EstimatedTime from '@components/EstimatedTime';
import IngredientsList from '@components/IngredientsList';

import styles from '@styles/recipe.module.css';

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

export const RecipeTags = ({ tags }) => {
  return (
    <div>
      <h2 className="h4 decorated">Tags</h2>
      <ul className={styles.tagsList}>
        {tags.map((tag) => {
          return (
            <li key={tag.title} className={styles.tagItem}>
              {tag.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function SingleRecipe(props) {
  const { title, ingredients, instructions, context, categories, tags } = props;
  const router = useRouter();
  const id = router.query;

  return (
    <>
      <style jsx>{`
        .recipe :global(.ingredient-name) {
          font-weight: bold;
        }
      `}</style>
      <Header title={title}></Header>

      <div className={styles.recipe}>
        <Attribution {...props}></Attribution>
        <Image data={props.cover.responsiveImage} className={styles.featuredImage} />

        <Wrapper width="standard" padding="true" gutter="true">
          <EstimatedTime {...props} />
          <div className={styles.vitals}>
            {ingredients && (
              <section className="ingredients">
                <h2 className="decorated">Ingredients:</h2>
                <IngredientsList ingredients={ingredients} />
              </section>
            )}

            {instructions && (
              <section className="instructions">
                <h2 className="decorated">Instructions:</h2>
                <div className={styles.instructionsWrapper}>
                  <StructuredText data={instructions} />
                </div>
              </section>
            )}
          </div>

          <div className={styles.recipeMeta}>
            {categories && categories.length > 0 && <RecipeCategories categories={categories} />}
            {tags && tags.length > 0 && <RecipeTags tags={tags} />}
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
    </>
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
