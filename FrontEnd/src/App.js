
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProduitComponent from './components/ListProduitComponent';
import AddProduitComponent from './components/AddProduitComponent';
import ViewProduitComponent from './components/ViewProduitComponent';

function App() {
  return (
    <div>
    <Router>
          <HeaderComponent />
            <div className="container">
                <Switch> 
                      <Route path = "/" exact component = {ListProduitComponent}></Route>
                      <Route path = "/Produits" component = {ListProduitComponent}></Route>
                      <Route path = "/add-produit" component = {AddProduitComponent}></Route>
                      <Route path = "/edit-produit/:id" component = {AddProduitComponent}></Route>
                      <Route path = "/view-produit/:id" component = {ViewProduitComponent}></Route>
                </Switch>
            </div>
          <FooterComponent />
    </Router>
    </div>
  );
}

export default App;
