// import DatoCmsSearch from 'datocms-search/dist/datocms-search.base';

// import { useAppContext } from '@data/context';
// import CategoriesFilter from '@components/CategoriesFilter';
// import styles from '@styles/components/RecipeFilter.module.css';

// const client = new DatoCmsSearch(process.env.NEXT_PUBLIC_DATOCMS_SITE_SEARCH_TOKEN);

export default function Search() {
  // const { categoryFilter, setCategoryFilter } = useAppContext();
  // let searchClient;

  // if (typeof window !== 'undefined') {
  //   async
  //   const DatoCmsSearch = (await import('datocms-search/dist/datocms-search.base')).default;
  //   searchClient = new DatoCmsSearch(process.env.NEXT_PUBLIC_DATOCMS_SITE_SEARCH_TOKEN);
  // }

  const handleInput = async (e) => {
    console.log(process.env.NEXT_PUBLIC_DATOCMS_SITE_SEARCH_TOKEN);

    // if (!searchClient) return false;
    const DatoCmsSearch = (await import('datocms-search/dist/datocms-search.base')).default;

    const searchClient = new DatoCmsSearch(process.env.NEXT_PUBLIC_DATOCMS_SITE_SEARCH_TOKEN);

    searchClient
      .search('rum')
      .then(function (response) {
        console.info(response.results);
        console.info(response.total);
        // 42
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <section>
      <input type="text" onChange={handleInput}></input>
    </section>
  );
}
