import './App.css';
import SubscriberDetails from './components/SubscriberDetails';
import VisualPresentation from './components/VisualPresentation';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <SubscriberDetails />
      <VisualPresentation/>
      </div>
    </div>
  );
}

export default App;
