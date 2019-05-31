import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _78ec5353 = () => interopDefault(import('..\\pages\\categorias\\index.vue' /* webpackChunkName: "pages_categorias_index" */))
const _70405f3e = () => interopDefault(import('..\\pages\\contacto.vue' /* webpackChunkName: "pages_contacto" */))
const _59c3bdec = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _6cdd56ce = () => interopDefault(import('..\\pages\\productos\\index.vue' /* webpackChunkName: "pages_productos_index" */))
const _5906c5bc = () => interopDefault(import('..\\pages\\registro.vue' /* webpackChunkName: "pages_registro" */))
const _66d68ef0 = () => interopDefault(import('..\\pages\\categorias\\crear.vue' /* webpackChunkName: "pages_categorias_crear" */))
const _7ef487fa = () => interopDefault(import('..\\pages\\productos\\crear.vue' /* webpackChunkName: "pages_productos_crear" */))
const _4d21ab02 = () => interopDefault(import('..\\pages\\productos\\main.js' /* webpackChunkName: "pages_productos_main" */))
const _09767df3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/categorias",
      component: _78ec5353,
      name: "categorias"
    }, {
      path: "/contacto",
      component: _70405f3e,
      name: "contacto"
    }, {
      path: "/login",
      component: _59c3bdec,
      name: "login"
    }, {
      path: "/productos",
      component: _6cdd56ce,
      name: "productos"
    }, {
      path: "/registro",
      component: _5906c5bc,
      name: "registro"
    }, {
      path: "/categorias/crear",
      component: _66d68ef0,
      name: "categorias-crear"
    }, {
      path: "/productos/crear",
      component: _7ef487fa,
      name: "productos-crear"
    }, {
      path: "/productos/main",
      component: _4d21ab02,
      name: "productos-main"
    }, {
      path: "/",
      component: _09767df3,
      name: "index"
    }],

    fallback: false
  })
}
