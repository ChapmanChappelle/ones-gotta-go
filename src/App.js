import "./App.css"
import Start from "./Components/Start/Start"
import SweetBreakfast from "./Components/SweetBreakfast/SweetBreakfast"
import SweetBreakfastResults from "./Components/SweetBreakfast/SweetBreakfastResults"
import Sports from "./Components/Sports/Sports"
import SportsResults from "./Components/Sports/SportsResults"
import SocialMedia from "./Components/SocialMedia/SocialMedia"
import SocialMediaResults from "./Components/SocialMedia/SocialMediaResults"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Superheroes from "./Components/Superheroes/Superheroes"
import SuperherosResults from "./Components/Superheroes/SuperheroesResults"
import Entertainment from "./Components/Entertainment/Entertainment"
import EntertainmentResults from "./Components/Entertainment/EntertainmentResults"

function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/1" component={SweetBreakfast} />
            <Route exact path="/1r" component={SweetBreakfastResults} /> 
            <Route exact path="/2" component={Sports} />
            <Route exact path="/2r" component={SportsResults} /> 
            <Route exact path="/3" component={SocialMedia} />
            <Route exact path="/3r" component={SocialMediaResults} />
            <Route exact path="/4" component={Superheroes} />
            <Route exact path="/4r" component={SuperherosResults} />
            <Route exact path="/5" component={Entertainment} />
            <Route exact path="/5r" component={EntertainmentResults} />


         </Switch>
      </BrowserRouter>
   )
}

export default App
