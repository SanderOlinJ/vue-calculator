import { createStore } from 'vuex'

const store = createStore({
    state: {
        name: '',
        email: ''
    },
    mutations: {
        setName(state, name){
            state.name = name;
        }
    },
    actions: {
        setName({ commit }, name){
            commit('setName', name)
        }
    },
    getters: {
        getName(state) {
            return state.name
        }
    },
    modules: {}
}) 

export default store;