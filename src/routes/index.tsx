import React from 'react';
import { BrowserRouter, Routes as Routers, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import { BaseRoutes } from './RouteNames';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Routers>
        <Route path={BaseRoutes.home.route} element={<Home/>}/>
        <Route path={BaseRoutes.dashboard.route} element={<Dashboard/>}/>
      </Routers>
    </BrowserRouter>
  )
}
