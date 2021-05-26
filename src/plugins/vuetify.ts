import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "md",
    },
    options: {
        customProperties: true,
    },
    theme: {
        themes: {
            light: {
                "header-color": colors.grey.lighten5,
                "dark-header-color": "#1b242e",
            },
            dark: {
                "header-color": "#1b242e",
                "dark-header-color": "#1b242e",
            },
        },
    },
});
