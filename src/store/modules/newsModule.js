export default {
    state: {
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
           
        getNews(state) {
            return state.news;
        },
        getNewsFromId: state => id => {
            let notice = state.news.find(item => {
                return (item.id == id)
            });

            return notice;
        }
    }
}