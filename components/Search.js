// import DatoCmsSearch from 'datocms-search/dist/datocms-search.base';

// import { useAppContext } from '@data/context';
// import CategoriesFilter from '@components/CategoriesFilter';
// import styles from '@styles/components/RecipeFilter.module.css';

// const client = new DatoCmsSearch(process.env.NEXT_PUBLIC_DATOCMS_SITE_SEARCH_TOKEN);
const { log, info, error } = console;

export default function Search() {
  // const { categoryFilter, setCategoryFilter } = useAppContext();
  // let searchClient;

  // if (typeof window !== 'undefined') {
  //   async
  //   const DatoCmsSearch = (await import('datocms-search/dist/datocms-search.base')).default;
  //   searchClient = new DatoCmsSearch(process.env.NEXT_PUBLIC_DATOCMS_SITE_SEARCH_TOKEN);
  // }

  const handleInput = async (e) => {
    log('Search...');
    // log(process.env.NEXT_PUBLIC_DATOCMS_SITE_SEARCH_TOKEN);

    // if (!searchClient) return false;
    const DatoCmsSearch = (await import('datocms-search/dist/datocms-search.base')).default;

    const searchClient = new DatoCmsSearch(process.env.NEXT_PUBLIC_DATOCMS_SITE_SEARCH_TOKEN);

    searchClient
      .search('rum')
      .then(function (response) {
        info(response.results);
        info(response.total);
        // 42
      })
      .catch(function (error) {
        error(error);
      });
  };

  return (
    <form>
      <input type="text" onChange={handleInput} placeholder="Search for..."></input>
      <button type="submit">Search</button>
    </form>
  );
}
