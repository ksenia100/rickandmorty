export const getCharacterPageId = (url: string): number => {
  const RICKY_PARAM_PAGE = '?page=';
  const pos = url.lastIndexOf(RICKY_PARAM_PAGE);

  if (pos === -1) return 1;

  const id = url.slice(pos + RICKY_PARAM_PAGE.length, url.length);
  return Number(id);
};

export const getCharacterId = (url: string): number => {
  const RICKY_ROOT = 'https://rickandmortyapi.com/api/character/';
  return Number(url.replace(RICKY_ROOT, '').replace(/\//g, ''));
};

export const getCharacterImg = (id: number): string => {
  return `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;
};