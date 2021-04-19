import { Route, Switch } from 'react-router';
import './App.css';
import {appRoutes} from './components/routes/'
import { Navigation } from './components/pages/navigation';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navigation/>
      </header>
      <main>
        <Switch>
      
          {appRoutes.map(route =>(
            <Route key={route.path} {...route}/>
          ))}

         
        </Switch>
      </main>
     
      
    </div>
  );
}

export default App;
