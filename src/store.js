import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex);
let current = window.localStorage.getItem('currentUser');
export default new Vuex.Store({
    state: {
        search: '',
        currentUser: current ?  current : [],
        users: [],
        donorId: ''
    },
    mutations: {
        searchDonor(state,item){
            state.search  = item;
        },
        donorDetail(state,item){
            state.donorId  = item;
         window.localStorage.setItem('donorId',item);
          //  window.localStorage.donorId = JSON.stringify({});
        },
        LOGOUT_USER(state) {
            state.currentUser = {};
        window.localStorage.currentUser = JSON.stringify({});
        },
        SET_CURRENT_USER(state, user) {
            state.currentUser = user;
         window.localStorage.setItem('currentUser',JSON.stringify(user));
        },

    },
    getters: {
        getSearch: state => {
          return state.search

        },
        getDonor: state => {
            return state.donorId
        }
    },
    actions: {
        /* eslint-disable */
        async loadCurrent({commit}) {
            let user = JSON.parse(window.localStorage.currentUser);
            commit('SET_CURRENT_USER', user);

        },
        LOGIN: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .post(`/donor/login`, payload)
                    .then(({ data, status }) => {
                      //  console.log(data);
                        if (data.length > 0) {
                            commit('SET_CURRENT_USER', data.map(u => u));
                            resolve(true);
                        }else{
                            resolve(false);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        //call function for the edit profile
        EDIT_PROFILE: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .post(`/donor/profile/edit`, payload)
                    .then(() => {
                            resolve(true);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        //call function for the edit profile
        EDIT_PASSWORD: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .post(`/donor/password/edit`, payload)
                    .then(() => {
                        resolve(true);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        //call function for the edit info donor
        EDIT_DONOR_PROFILE: ({ commit }, payload) => {
            return new Promise((resolve, reject) => {
                axios
                    .post(`/donor/info/edit`, payload)
                    .then(() => {
                            resolve(true);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
        logout({commit}) {
            commit('LOGOUT_USER');
        },


    }
})
