import vue from "vue";
import VueRouter from "vue-router";
import home from "./components/home.vue";
import computer from "./components/computers.vue";
import addRos from "./components/addros.vue";

const routes = [
    { path: '/home', component: home },
    { path: '/myslots', component: computer }
];
vue.use(VueRouter);
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

router.addRoutes([
    { path: '/addRos', component: addRos },
])

export default router;