import { InterfaceMovie } from '../../../models/InterfaceMovie';
import MovieIndividual from '../movie/movieIndividual';
import css from './listMovies.module.css'
import { ListGeneric } from '../../../utils/ListGeneric/ListGeneric';
import { Loading } from '../../../components/Loading';


interface ListMoviesProps {
    movies?: InterfaceMovie[];
}

const ListMovies = (props: ListMoviesProps) => {

    const { movies } = props;

    return (

        <ListGeneric list={movies} loadingUI={<Loading />}>
            <div className={css.div}>
                {movies?.map(movie => <MovieIndividual movie={movie} key={movie.id} />)}
            </div>
        </ListGeneric>

    )
}

export default ListMovies;
