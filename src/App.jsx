import {useState} from 'react';
import './Components/CardMovie';
import './App.css';
import {CardMovie} from './Components/CardMovie';

const apiPelis = 'http://www.omdbapi.com/?apikey=4287ad07&s=';

function App() {
	const [search, setSearch] = useState('');
	const [movies, setMovies] = useState();

	const handleSubmit = event => {
		event.preventDefault();
		fetch(`${apiPelis}${search}`)
			.then(response => response.json())
			.then(data => setMovies(data.Search));
	};

	const handleChange = event => {
		setSearch(event.target.value);
	};

	return (
		<main>
			<h1>Buscador de Peliculas</h1>
			<form className="input-button" onSubmit={handleSubmit} action="">
				<input
					value={search}
					onChange={handleChange}
					placeholder="Batman, Superman, Rey Leon..."
				/>
				<button>Buscar</button>
			</form>
			<div>
				{movies &&
					movies.map(el => (
						<CardMovie poster={el.Poster} name={el.Title} year={el.Year} />
					))}
			</div>
		</main>
	);
}

export default App;
