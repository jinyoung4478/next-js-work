import Seo from '@/components/Seo';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

interface IMovieProps {
	id: number;
	backdrop_path: string;
	original_title: string;
	overview: string;
	poster_path: string;
	title: string;
	vote_average: number;
	genre_ids: [number];
}

export default function Home({ movies }: InferGetServerSidePropsType<GetServerSideProps>) {
	// const [movies, setMovies] = useState<IMovieData[]>();
	// useEffect(() => {
	// 	(async () => {
	// 		const { results } = await (await fetch(`/api/movies`)).json();
	// 		setMovies(results);
	// 	})();
	// }, []);
	return (
		<div className="container">
			<Seo title="Home" />
			{!movies && <h4>Loading</h4>}
			{movies?.map((movie: IMovieProps) => (
				<div className="movie" key={movie.id}>
					<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
					<h4>{movie.original_title}</h4>
				</div>
			))}
			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: 1fr 1fr;
					padding: 20px;
					gap: 20px;
				}
				.movie {
					cursor: pointer;
				}
				.movie img {
					max-width: 100%;
					border-radius: 12px;
					transition: transform 0.2s ease-in-out;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
				}
				.movie:hover img {
					transform: scale(1.05) translateY(-10px);
				}
				.movie h4 {
					font-size: 18px;
					text-align: center;
				}
			`}</style>
		</div>
	);
}

// Server side
export async function getServerSideProps({}: GetServerSideProps) {
	// This name(getServerSideProps) shouldn't be changed.
	// Whatever you write in here this code will be run on the server.
	// If you use API_KEY in here, it never be on the client.
	const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
	return {
		props: {
			movies: results,
		},
	};
}
