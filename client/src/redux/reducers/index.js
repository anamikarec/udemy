import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import cart from "./cart";
import wishlist from "./wishlist";

export const reducers = combineReducers({ posts, auth, cart, wishlist });
