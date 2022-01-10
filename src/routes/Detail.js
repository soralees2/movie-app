import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState("");
	const { id } = useParams();
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		console.log(json.data.movie);
		setMovie(json.data.movie);
		setLoading(false);
	};
	
	useEffect(() => {
		getMovie();
	},[]);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<h2>{movie.title}</h2>
					<img src={movie.background_image_original} alt={movie.title} />
					<ul>{movie && movie.genres.map((g) => <li key={g}>{g}</li>)}</ul>
					<p>{movie.description_full}</p>
				</div>
			)}
		</div>
	);
}
export default Detail;
