import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state: {
    //     status: '',
    //     user: user,
    //     userInfos: {
    //       nom:'',
    //       prenom: '',
    //       email: '',
    //       photo: '',
    //     },
    //   },
    //   mutations: {
    //     setStatus: function (state, status) {
    //       state.status = status;
    //     },
    //     logUser: function (state, user) {
    //       instance.defaults.headers.common['Authorization'] = user.token;
    //       localStorage.setItem('user', JSON.stringify(user));
    //       state.user = user;
    //     },
    //     userInfos: function (state, userInfos) {
    //       state.userInfos = userInfos;
    //     },
    //     logout: function (state) {
    //       state.user = {
    //         userId: -1,
    //         token: '',
    //       }
    //       localStorage.removeItem('user');
    //     }
    //   },
    //   actions: {
    //     login: ({commit}, userInfos) => {
    //       commit('setStatus', 'loading');
    //       return new Promise((resolve, reject) => {
    //         instance.post('/login', userInfos)
    //         .then(function (response) {
    //           commit('setStatus', '');
    //           commit('logUser', response.data);
    //           resolve(response);
    //         })
    //         .catch(function (error) {
    //           commit('setStatus', 'error_login');
    //           reject(error);
    //         });
    //       });
    //     },
    //     createAccount: ({commit}, userInfos) => {
    //       commit('setStatus', 'loading');
    //       return new Promise((resolve, reject) => {
    //         commit;
    //         instance.post('/createAccount', userInfos)
    //         .then(function (response) {
    //           commit('setStatus', 'created');
    //           resolve(response);
    //         })
    //         .catch(function (error) {
    //           commit('setStatus', 'error_create');
    //           reject(error);
    //         });
    //       });
    //     },
    //     getUserInfos: ({commit}) => {
    //       instance.post('/infos')
    //       .then(function (response) {
    //         commit('userInfos', response.data.infos);
    //       })
    //       .catch(function () {
    //       });
    //     }
    //   }
});
