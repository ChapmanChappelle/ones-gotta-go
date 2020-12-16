import "./App.css"
import Start from "./Components/Start/Start"
import SweetBreakfast from "./Components/SweetBreakfast/SweetBreakfast"
import SweetBreakfastResults from "./Components/SweetBreakfast/SweetBreakfastResults"

import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/1" component={SweetBreakfast} />
            <Route exact path="/1r" component={SweetBreakfastResults} /> 
         </Switch>
      </BrowserRouter>
   )
}

export default App
