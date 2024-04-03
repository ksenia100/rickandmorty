import { FiltersState } from "types/type";

export const appendParamsURL: (
  currentPage: number,
  searchValue: string,
  filters: FiltersState
) => void = (currentPage: number, searchValue: string, filters: FiltersState) => {
  const params = new URLSearchParams();
  
  if (currentPage > 1) params.set('page', currentPage.toString());
  if (searchValue) params.set('name', encodeURIComponent(searchValue));

  (Object.keys(filters) as (keyof FiltersState)[]).forEach((filterKey) => {
    const filterValue = filters[filterKey]?.toString();
    if (filterValue) {
      params.set(filterKey, filterValue);
    }
  });

  window.history.replaceState({}, '', params.toString() ? `/character?${params.toString()}` : '/character');
};