import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header_xx from './components/Header_xx';
import Homepage_xx from './pages/Homepage_xx';
import ShopOverviewPage_xx from './pages/ShopOverviewPage_xx';
import ContactPage_xx from './pages/ContactPage_xx';
import SigninPage_xx from './pages/SigninPage_xx';
import ProductsPage_xx from './pages/ProductsPage_xx';
import ShopPage_xx from './pages/ShopPage_xx';

import './App_xx.scss';

function App_xx() {
  return (
    <div>
      <Header_xx />
      <Switch>
        <Route exact path='/' component={Homepage_xx} />
        <Route exact path='/shop_xx' component={ShopOverviewPage_xx} />
        <Route exact path='/contact_xx' component={ContactPage_xx} />
        <Route exact path='/signin_xx' component={SigninPage_xx} />
        <Route exact path='/api_xx/shop_xx' component={ShopPage_xx} />
        <Route
          exact
          path='/api_xx/shop_xx/:category'
          component={ProductsPage_xx}
        />
      </Switch>
    </div>
  );
}

export default App_xx;
