export default async function fetchData(url, setDataFunc, loaderStateFunc) {
  loaderStateFunc(true);

  const response = await fetch(url);
  if (response.ok) {
    try {
      const data = await response.json();
      setDataFunc(data);
    } catch (error) {
      console.error(error);
    } finally {
      loaderStateFunc(false);
    }
  } else {
    console.error('HTTP error:', response.status);
  }
}
