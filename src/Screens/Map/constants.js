const default_location = {
  // Default to return UK
  lat: 55.3781,
  lng: -3.436
}

let api_key = "AIzaSyA9OllsNngBJVQYrL3d1bZuciubg7l0WhE";
const api_url = "https://maps.googleapis.com/maps/api/js?key=" + api_key + "&v=3.exp&libraries=geometry,drawing,places";

export { default_location, api_url };