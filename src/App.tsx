import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {
  Switch,
  Route
} from 'react-router';
import { Menu } from './router/Menu';
import routes from './router/route-config';

function App() {


  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Switch>
            {routes.map((route) =>
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
              >
                {<route.component />}
              </Route>
            )}
          </Switch>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
