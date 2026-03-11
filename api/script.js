fetch('/api/hello')
  .then(response => response.json())
  .then(data => console.log(data));
  