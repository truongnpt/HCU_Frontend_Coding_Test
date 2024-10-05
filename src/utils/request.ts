const API_URL = process.env.REACT_APP_API_URL;

export const request = async <T = any>(url: string, opts: any = {}) => {
  const fullUrl = `${API_URL}${url}`;
  return await fetch(fullUrl, {
    method: opts.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
};
