const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    // async function
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const image = document.createElement('IMG');
    image.src = response.data[0].show.image.medium;
    document.body.append(image);
})