import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";

// Vue composition API
import "./plugins/CompositionApi";

// Vue plugin
import Vue from "vue";

// Vuetify plugin
import vuetify from "./plugins/vuetify";

// Vue app
import App from "./App.vue";

Vue.config.productionTip = false;

// Start Vue
const vueMain = new Vue({
    vuetify,
    render: (h) => h(App),
}).$mount("#app");

export { vueMain };
