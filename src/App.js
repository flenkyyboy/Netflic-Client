
import './App.css';
import Bannner from './Components/Bannner/Bannner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,actions} from './urls'

function App() {
  return (
    <div className="App">
   <NavBar></NavBar>
   <Bannner/>
   <RowPost title='Netflix Originals' urls={originals}/>
   <RowPost title='Action' isSmall urls={actions}/>

    </div>
  );
}

export default App;
