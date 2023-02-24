import './App.css';
import { useEffect, useState } from 'react';
import ListMoviesProps from './pages/movies/ListMovies';
import { InterfaceMovie } from './models/InterfaceMovie';
import { InterfaceLandinPageDTO } from './models/InterfaceLadingPage';
import { Button } from './components/Button';

function App() {

  const [movies, setMovies] = useState<InterfaceLandinPageDTO>();


  const moviesInTheater: InterfaceMovie[] = [
    {
      id: 1,
      poster: 'https://lossietereinos.com/wp-content/uploads/2019/04/GOT-Aftermath-min.jpeg',
      title: 'Game of thrones',
    },
    {
      id: 2,
      poster: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F06%2F22%2FHouse-of-the-Dragon_1.jpg',
      title: 'House of the dragon',
    },
  ];

  const newMovies: InterfaceMovie[] = [
    {
      id: 3,
      poster: 'https://pbs.twimg.com/media/FXVd13bX0AAGFDJ?format=jpg&name=large',
      title: 'John Snow',
    },
  ]


  useEffect(() => {
    const timerIde = setTimeout(() => {

      setMovies({ inTheater: moviesInTheater, nextReleases: newMovies })

    }, 3000);
    return () => clearTimeout(timerIde);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <>
      <div className='container'>
        <Button>
          Add movie
        </Button>
        <h3>En cartelera</h3>
        <ListMoviesProps movies={movies?.inTheater} />
        <h3>Proximos estrenos</h3>
        <ListMoviesProps movies={movies?.nextReleases} />
      </div>
    </>
  );
}

export default App;
