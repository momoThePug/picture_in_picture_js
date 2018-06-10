import Vue from 'vue'
import routes from './routes'
import { Router } from './router/Router'

const router = new Router({
  routes: routes,
  resolutionPath: "pages",
  statusCode: {
    404: "404"
  }
});

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return router.loadComponent(this.currentRoute).default;
    }
  },
  render(h) {
    return h(this.ViewComponent)
  }
});

/* Update app route when window location changes  */
window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
