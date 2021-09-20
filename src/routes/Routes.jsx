import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, ContactUs, News, Review } from '@/pages';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact_us' component={ContactUs} />
        <Route path='/review' component={Review} />
        <Route path='/news' component={News} />
      </Switch>
    </Router>
  );
}
