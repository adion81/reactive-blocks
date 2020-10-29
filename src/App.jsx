import Main from './components/Main';
import Header from './components/Header';
import Advertisement from './components/Advertisement';
import Navigation from './components/Navigation';
import Subcontents from './components/Subcontents';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className=" p-2 bg-light" >
      <Header />
      <div className="d-flex col-12 p-0 my-4 justify-content-start">
        <Navigation />
        <Main>
            <Subcontents />
            <Subcontents />
            <Subcontents />
            <Advertisement />
        </Main>

      </div>
    </div>
  );
}

export default App;
