interface Fetch {
  <T>(url: string, options?: { method: string }): Promise<
    [string | undefined, T | undefined]
  >;
}

export const fetch: Fetch = async (url, options) => {
  const { method = "GET" } = options || {};

  let result, error;

  try {
    const response = await window.fetch(url, {
      method,
      headers: { "Content-Type": "application-json" },
    });

    if (!response.ok) error = await response.text();

    result = await response.json();
  } catch (err) {
    error = err.message;
  }

  return [error, result];
};
