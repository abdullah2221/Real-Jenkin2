
import './App.css';
import ArtWork from './modules/about/artWork';
import LandingPage from './modules/landingPage';
// import bootstrap from '';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import "materialize-css/dist/css/materialize.min.css"


function App() {
  return (
    <div className="App">
      <ArtWork/>
      <LandingPage/>
      <div className='btn btn-success'> Log IN</div>
      <div class="border  border-white  ">
      Left aligned text on all viewport sizes.
      </div>
      <div class="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class</div>

   
    </div>
  );
}

export default App;
