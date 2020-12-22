import Vue from 'nativescript-vue';
import App from './components/App';
import store from './store';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = ( TNS_ENV === 'production' );

import { TNSFontIcon, fonticon } from 'nativescript-fonticon';

// Load TNSFonticon
TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  fa: './assets/css/fontawesome.min.css',
  far: './assets/css/regular.min.css',
  fas: './assets/css/solid.min.css',
  fab: './assets/css/brand.min.css'
};
TNSFontIcon.loadCss();
Vue.filter( 'fonticon', fonticon );



new Vue( {
  store,
  render: h => h( 'frame', [ h( App ) ] )
} ).$start();
