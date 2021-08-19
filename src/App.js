import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import NotFound from './components/pages/NotFound/NotFound';
import NavMenu from './components/NavMenu/NavMenu';


function App() {
  return (
    <>
      <NavMenu />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/404' exact component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </>
  );
}

export default App;
