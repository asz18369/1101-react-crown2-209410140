import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header_40 from './components/Header_40';
import Homepage_40 from './pages/Homepage_40';
import ShopOverviewPage_40 from './pages/ShopOverviewPage_40';
import ContactPage_40 from './pages/ContactPage_40';
import SigninPage_40 from './pages/SigninPage_40';
import ProductsPage_40 from './pages/ProductsPage_40';
import ShopPage_40 from './pages/ShopPage_40';

import './App_40.scss';

function App_40() {
  return (
    <div>
      <Header_40 />
      <Switch>
        <Route exact path='/' component={Homepage_40} />
        <Route exact path='/shop_40' component={ShopOverviewPage_40} />
        <Route exact path='/contact_40' component={ContactPage_40} />
        <Route exact path='/signin_40' component={SigninPage_40} />
        <Route exact path='/api_40/shop_40' component={ShopPage_40} />
        <Route
          exact
          path='/api_40/shop_40/:category'
          component={ProductsPage_40}
        />
      </Switch>
    </div>
  );
}

export default App_40;
