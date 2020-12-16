import "./App.css"
import Start from "./Components/Start/Start"
import SweetBreakfast from "./Components/SweetBreakfast/SweetBreakfast"
import SweetBreakfastResults from "./Components/SweetBreakfast/SweetBreakfastResults"
import Sports from "./Components/Sports/Sports"
import SportsResults from "./Components/Sports/SportsResults"
import SocialMedia from "./Components/SocialMedia/SocialMedia"
import SocialMediaResults from "./Components/SocialMedia/SocialMediaResults"
import { BrowserRouter, Route, Switch } from "react-router-dom"

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

         </Switch>
      </BrowserRouter>
   )
}

export default App
