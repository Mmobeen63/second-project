import logo from './logo.svg';
import { CardComponent } from './Components/CardComponent';
import { data } from './data';
import "./index.css";
import { NavBar } from './Components/NavBar';
function App() {
  const section = data.map(index => {
    return(
      <CardComponent key={index.id} {...index} />
    )
  })
  return (
    <div className="App">
      <div className='eachSection'>
        <NavBar />
        {section}
      </div>
    </div>
  );
}

export default App;
