import React, { Component } from 'react'
import { ProductsContextProvider } from './Global/ProductsContext'
import { SearchContextProvider } from './Global/searchContext'
import { OtherContextProvider } from './Global/OtherContext'
import { GadgetsContextProvider } from './Global/GadgetsContext'
import { FurnitureContextProvider } from './Global/FurnitureContext'
import { HomeContextProvider } from './Global/HomeContext'
import { Other } from './Components/other'
import { Furnitures } from './Components/Furniture'
import { Home } from './Components/home'
import { Gadgets } from './Components/gadgets'
import { Main } from './Components/main'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Signup } from './Components/Signup'
import { Login } from './Components/Login'
import { NotFound } from './Components/NotFound'
import { auth, db } from './Config/Config'
import { CartContextProvider } from './Global/CartContext'
import { Cart } from './Components/Cart'
import { AddProducts } from './Components/AddProducts'
import { Cashout } from './Components/Cashout'

export class App extends Component {

    state = {
        user: null,
    }

    componentDidMount() {

        // getting user info for navigation bar
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('users').doc(user.uid).get().then(snapshot => {
                    this.setState({
                        user: snapshot.data().Fullnames
                    })
                })
            }
            else {
                this.setState({
                    user: null
                })
            }
        })

    }

    render() {
        return (
        <HomeContextProvider>
              <FurnitureContextProvider>
<GadgetsContextProvider>
<OtherContextProvider>
             <SearchContextProvider>
            <ProductsContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={() => <Main user={this.state.user} />} />
                            <Route path="/signup" component={Signup} />
                            <Route path="/login" component={Login} />
                            <Route path="/cartproducts" component={() => <Cart user={this.state.user} />} />
                            <Route path="/addproducts" component={AddProducts} />
                            <Route path='/cashout' component={() => <Cashout user={this.state.user} />} />
                            <Route exact path='/other' component={() => <Other user={this.state.user} />} />
                            <Route exact path='/gadgets' component={() => <Gadgets user={this.state.user} />} />
                            <Route exact path='/furniture' component={() => <Furnitures user={this.state.user} />} />
                            <Route exact path='/home' component={() => <Home user={this.state.user} />} />
                            
                            <Route component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </CartContextProvider>
            </ProductsContextProvider>
            </SearchContextProvider>
        </OtherContextProvider>

            </GadgetsContextProvider>
            </FurnitureContextProvider>        
        </HomeContextProvider> 
        )
    }
}

export default App
