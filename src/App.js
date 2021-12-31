import './App.css';
import Comments from './components/Comments'
function App() {
  let n = 45;
  return (
    <div>
      <Comments commentCount={n}/>
    </div>
  );
}

export default App;
