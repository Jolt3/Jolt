import '../src/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from '../src/components/Navigation';
import {Header} from '../src/components/Header';
import Data from '../src/assets/data/mock-data.json';
// import {Login} from './components/Login-Spinner';
import {Dashboard} from './components/Dashboard';
// import {Goals} from './components/Goals';

function App() {
    return (
      <div className="App">
        <Navigation />
        <Header placeholder='Search Here' data={Data}/>
        {/* <Login /> */}
        <Dashboard />
        {/* <Goals /> */}
      </div>
    );
  }
  
  export default App;
  