export function getURL(path = "") {
	return `${ process.env.URL || "http://localhost:3000" }/api${path}`;
  }
  
  // Helper to make GET requests to Strapi
  export async function fetchAPI(path) {
	const requestUrl = getURL(path);
	console.log(requestUrl);
	const response = await fetch(requestUrl);
	const data = await response.json();
	return data;
  }