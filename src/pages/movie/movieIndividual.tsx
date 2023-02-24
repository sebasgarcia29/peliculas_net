import { InterfaceMovie } from '../../models/InterfaceMovie';
import css from './movieIndividual.module.css';


interface PropsIndividualMovie {
    movie: InterfaceMovie
}

const MovieIndividual = (props: PropsIndividualMovie) => {

    const buildLink = () => `/movie/${props.movie.id}`;

    return (
        <div className={css.div}>
            <a href={buildLink()}>
                <img src={props.movie.poster} alt='Poster' />
            </a>
            <p>
                <a href={buildLink()}>
                    {props.movie.title}
                </a>
            </p>
        </div>
    )
}

export default MovieIndividual;
