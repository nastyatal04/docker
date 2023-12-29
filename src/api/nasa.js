export const fetchNasaCard = async () => {
  return fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(
    (response) => response.json()
  );
};
