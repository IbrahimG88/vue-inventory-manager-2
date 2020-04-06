
import VueRouter from 'vue-router';
import Vue from 'vue';

import AddItem from "./components/AddItem";
import CompareItemPrices from "./components/ComparePrices";
import ConsumptionDueDates from "./components/ConsumptionDueDates";
import CreateOrder from './components/CreateOrder';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Notifications from './components/Notifications';
import Orders from './components/Orders';


Vue.use(VueRouter);

const routes = [
    { path: '/additem', component: AddItem },
    { path: '/compareitemprices', component: CompareItemPrices },
    { path: '/consumptionduedates', component: ConsumptionDueDates },
    { path: '/createorder', component: CreateOrder },
    { path: '/home', component: Home },
    { path: '/inventory', component: Inventory },
    { path: '/notifications', component: Notifications },
    { path: '/orders', component: Orders }
  ];



export const router = new VueRouter({
    routes // short for `routes: routes`
  });