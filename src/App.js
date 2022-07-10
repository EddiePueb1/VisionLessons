import { BrowserRouter as Router} from 'react-router-dom';
import Lesson1 from './components/Lesson1';
import { l1Info } from './components/Lesson1/Data';
import Lesson2 from './components/Lesson2';
import Lesson3 from './components/Lesson3';
import Nav from './components/Nav';
import Resolution from './components/Resolution';


function App() {
  return (

    <Router>
      <Nav/>
      <Lesson1 {...l1Info} />
      <Resolution {...l1Info} />
      <Lesson2 />
      {/* <Lesson3 /> */}
    </Router>
  );
}

export default App;
