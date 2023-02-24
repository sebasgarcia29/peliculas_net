import createActor from '../ui/actors/createActor';
import EditActors from '../ui/actors/editActors';
import IndexActors from '../ui/actors/indexActors';
import createCinema from '../ui/cinemas/createCinema';
import EditCinema from '../ui/cinemas/editCinema';
import IndexCinemas from '../ui/cinemas/indexCinemas';
import CreateGender from '../ui/genders/CreateGender';
import EditGender from '../ui/genders/EditGender';
import IndexGenders from '../ui/genders/indexGenders';
import createMovie from '../ui/movies/createMovie';
import EditMovie from '../ui/movies/editMovie';
import IndexMovies from '../ui/movies/indexMovie';
import RedirectionLading from '../ui/pages/RedirectionLandingPage/redirectionLading';
import LandingPage from '../ui/pages/landingPage/LandingPage';

const routes = [
    { path: '/', component: LandingPage, exact: true },

    { path: '/genders/create', component: CreateGender },
    { path: '/genders/edit/:id(\\d+)', component: EditGender },
    { path: '/genders', component: IndexGenders, exact: true },

    { path: '/actors/create', component: createActor },
    { path: '/actors/edit/:id(\\d+)', component: EditActors },
    { path: '/actors', component: IndexActors, exact: true },

    { path: '/cinemas/create', component: createCinema },
    { path: '/cinemas/edit/:id(\\d+)', component: EditCinema },
    { path: '/cinemas', component: IndexCinemas, exact: true },

    { path: '/movies/create', component: createMovie },
    { path: '/movies/edit/:id(\\d+)', component: EditMovie },
    { path: '/movies', component: IndexMovies, exact: true },
    { path: '*', component: RedirectionLading }
];

export default routes;