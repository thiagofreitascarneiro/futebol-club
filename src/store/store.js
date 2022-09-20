import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        championship: 'Campeonato Brasileiro',
        clubName: 'Hcode Treinamentos',
        news: [{
            id: 1,
            title: 'Começam os treinos para a nova temporada',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque voluptate soluta debitis perferendis totam eius aliquam voluptatum minus sequi atque! Magnam quas incidunt eveniet eius doloremque tempora repudiandae, eos unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam praesentium ipsum dolor sit amet consectetur adipisicing elit.Cumque ipsum dolor sit amet consectetur adipisicing elit.Cumque ipsum dolor sit amet consectetur adipisicing elit.Cumque', 
            date: '2020-01-01',
            img:'news1.jpg',
            imgInfo: 'Notícia 1'
        },
        {
            id: 2,
            title: 'Jogo de quarta-feira termina empatado',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque voluptate soluta debitis perferendis totam eius aliquam voluptatum minus sequi atque! Magnam quas incidunt eveniet eius doloremque tempora repudiandae, eos unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam praesentium ipsum dolor sit amet consectetur adipisicing elit.Cumque ipsum dolor sit amet consectetur adipisicing elit.Cumque ipsum dolor sit amet consectetur adipisicing elit.Cumque', 
            date: '2020-02-11',
            img:'news2.jpg',
            imgInfo: 'Notícia 2'
        },
        {
            id: 3,
            title: 'Jogo de quarta-feira termina empatado',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque voluptate soluta debitis perferendis totam eius aliquam voluptatum minus sequi atque! Magnam quas incidunt eveniet eius doloremque tempora repudiandae, eos unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam praesentium ipsum dolor sit amet consectetur adipisicing elit.Cumque ipsum dolor sit amet consectetur adipisicing elit.Cumque ipsum dolor sit amet consectetur adipisicing elit.Cumque', 
            date: '2020-11-03',
            img:'news3.jpg',
            imgInfo: 'Notícia 3'
        },
        ]
            
    },
    getters: {
        getChampionship(state) {
            return state.championship;
        },
        getClubName(state) {
            return state.clubName;
        },
        getNews(state) {
            return state.news;
        }
    },
    mutations: {
        setChampionship(state, newValue) {
           state.championship = newValue; 
        }
    }

})