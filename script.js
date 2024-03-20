document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.genre-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            loadMovies(this.getAttribute('data-genre'));
        });
    });
});

function loadMovies(genre) {
    const movieDisplay = document.getElementById('movie-display');
    movieDisplay.innerHTML = ''; // Clear current movies

    // Specific movie recommendations for each genre
    const movies = {
        horror: [
            { title: "The Conjuring", image: "the-conjuring.jpg" },
            { title: "Hereditary", image: "hereditary.jpg" },
            { title: "Get Out", image: "get-out.jpg" }
        ],
        comedy: [
            { title: "Superbad", image: "superbad.jpg" },
            { title: "The Hangover", image: "the-hangover.jpg" },
            { title: "Step Brothers", image: "step-brothers.jpg" }
        ],
        action: [
            { title: "Mad Max: Fury Road", image: "mad-max-fury-road.jpg" },
            { title: "John Wick", image: "john-wick.jpg" },
            { title: "The Dark Knight", image: "the-dark-knight.jpg" }
        ],
        drama: [
            { title: "Shawshank Redemption", image: "shawshank-redemption.jpg" },
            { title: "Forrest Gump", image: "forrest-gump.jpg" },
            { title: "The Godfather", image: "the-godfather.jpg" }
        ]
    };

    movies[genre].forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-item');

        const titleElement = document.createElement('p');
        titleElement.classList.add('movie-title');
        titleElement.textContent = movie.title;
        movieContainer.appendChild(titleElement);

        const imgElement = document.createElement('img');
        imgElement.src = movie.image; // Ensure you have these images in your project directory or provide a correct path
        imgElement.alt = movie.title;
        imgElement.title = movie.title; // Tooltip will show the movie title on hover
        movieContainer.appendChild(imgElement);

        movieDisplay.appendChild(movieContainer);
    });
}
