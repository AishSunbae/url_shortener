import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';

function App() {
  return (
<div className="App">
  <div className="auth-wrapper">
    <div className="auth-inner">
      <switch>
        <Route exact path='/' component={Form} />
        <Route path='/app' component={Form} />
      </switch>
    </div>
  </div>
</div>
  );
}

export default App;
