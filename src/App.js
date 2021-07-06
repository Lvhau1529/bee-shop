import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import BeeShop from "./bee-shop/index"
import 'antd/dist/antd.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'animate.css'
import "./bee-shop/assets/styles/main.scss"
import "./bee-shop/assets/js/main"
import Login from "./containers/Login/Login"
import { ProductProvider } from "./contexts/ProductContext"

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={BeeShop} />
          </Switch>
        </Router>
      </ProductProvider>
    </div>
  )
}

export default App
