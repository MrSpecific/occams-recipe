import { useRouter } from 'next/router'
// import { getAllRecipeIds, getRecipeData } from '../../lib/recipes'
import { fetchEntries } from '../../lib/contentful';
import { recipes, getPaths, getEntry } from '../../lib/data'
import Header from '../../components/header'

export default function Recipe(props) {
  const { fields } = props;
  const router = useRouter();
  const id = router.query;
  // console.log('Props:', props)
  // console.log('router.query:', router.query)
  
  return (
    <>
      <Header></Header>
      <h1>{fields.title}</h1>
      <h2>ID is: id</h2>
    </>
  )
}

export async function getStaticPaths() {
  const allRecipes = await recipes();

  const paths = getPaths(allRecipes)

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const allRecipes = await recipes();
  const recipeData = getEntry({
    slug: params.slug,
    entries: allRecipes,
  });

  return {
    props: recipeData
  }
}