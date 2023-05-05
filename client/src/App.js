import '../src/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from '../src/components/Navigation';
import {Header} from '../src/components/Header';
import Data from '../src/assets/data/mock-data.json';

function App() {
    return (
      <div className="App">
        <Navigation />
        <Header placeholder='Search Here' data={Data}/>
      </div>
    );
  }
  
  export default App;
  