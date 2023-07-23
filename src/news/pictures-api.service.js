import axios from 'axios';

const API_KEY = '38417467-04ef37b099f8d5c81e85a4849';
const BASE_URL = 'https://pixabay.com/api/';
let currentPage = 1;

export async function animalsService(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 40,
  });

  const { data } = await axios.get(`${BASE_URL}?${params}`);

  currentPage += 1;
  return data;
}

export function resetPage() {
  currentPage = 1;
}
