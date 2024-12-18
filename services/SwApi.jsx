export const getAllStarships = async () => {
  const url = "https://swapi.py4e.com/api/starships/";
  console.log("Fetching from URL:", url); // Check URL

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Starships Data:", data.results); // Log fetched data
    return data.results;
  } catch (error) {
    console.error("Error fetching starships:", error.message);
    return [];
  }
};
