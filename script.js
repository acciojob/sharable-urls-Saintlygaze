
document.getElementById('urlForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the values of the inputs
  const name = document.getElementById('name').value;
  const year = document.getElementById('year').value;

  // Initialize the base URL
  let baseURL = 'https://localhost:8080/';

  // Check if both fields have values
  if (name && year) {
    baseURL += `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
  } else if (name) {
    baseURL += `?name=${encodeURIComponent(name)}`;
  } else if (year) {
    baseURL += `?year=${encodeURIComponent(year)}`;
  }

  // Update the h3 element with the generated URL
  document.getElementById('url').textContent = baseURL;
});
