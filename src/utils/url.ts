import qs from 'qs';
export const getQueryParams = () => {
  return qs.parse(window.location.search, { ignoreQueryPrefix: true });
};

export const updateQueryParams = (params: Record<string, any>) => {
  const queryString = qs.stringify(params);

  window.history.pushState(
    null,
    '',
    `${window.location.pathname}?${queryString}`
  );
};
