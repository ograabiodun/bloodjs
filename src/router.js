import Vue from "vue";
import Router from "vue-router";
import Dashboard from './views/Dashboard.vue';
import Home from './views/Home.vue';
import Overview from './views/Overview.vue';
import Join from './views/join.vue';
import Request from './views/Request.vue';
import SearchResult from './views/SearchResult.vue';
import Login from './views/Login.vue';
import donorProfile from './views/donorProfile.vue';
import donorProfileEdit from "./views/donorProfileEdit.vue";
import donorInfoEdit from "./views/donorInfoEdit.vue";
import donorPasswordEdit from "./views/donorPasswordEdit.vue";

//IMPORT BACKEND VIEWS FOR ROUTER
import adminDonorList from "./views/adminDonorList.vue";
import donorDetail from "./views/donorDetail.vue";
import donorNew from "./views/createDonors.vue";
import requestBlood from "./views/bloodRequestList.vue";
import creatRequestBlood from "./views/createBloodrequest.vue";

Vue.use(Router);

const router =  new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/join",
            name: "join",
            component: Join
        },
        {
            path: "/request",
            name: "request",
            component: Request
        },
        {
            path: "/search",
            name: "search",
            component: SearchResult
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/donor-profile",
            name: "donor-profile",
            component: donorProfile
        },
        {
            path: "/donor-edit",
            name: "donor-edit",
            component: donorProfileEdit
        },
        {
            path: "/donor-edit-password",
            name: "donor-edit-password",
            component: donorPasswordEdit
        },
        {
            path: "/donor-edit-donor-info",
            name: "donor-info-edit",
            component: donorInfoEdit
        },
        {
            path: "/donor-detail",
            name: "donor-detail",
            component: donorDetail
        },
        {

            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            meta: { requiresAuth: true },
            children:[
                {
                    path: "overview",
                    name: "overview",
                    component: Overview
                },
                {
                    path: "donor-list",
                    name: "adminDonorList",
                    component: adminDonorList
                },
                {
                    path: "donor-new",
                    name: "donor-new",
                    component: donorNew
                },
                {
                    path: "blood-request",
                    name: "blood-request",
                    component: requestBlood
                },
                {
                    path: "create-blood-request",
                    name: "create-blood-request",
                    component: creatRequestBlood
                },

            ]
        },

    ]
});



export default router;