const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    // async function
    const config = { params: { q: searchTerm } };
    const response = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    addImages(response.data);
    form.elements.query.value = '';
})

const addImages = (results) => {
    for (let result of results) {
        if (result.show.image) {
            const image = document.createElement('IMG');
            image.src = result.show.image.medium;
            document.body.append(image);
        }
    }
}