<template>

    <section>

        <div class="container">
            
            <HcodeSectionNewsIndividual 
                v-for="notice in news"
                :key="notice.id"
                :img-name="notice.img"
                :img-info="notice.imgInfo"
                :news-title="notice.title"
                :news-content="notice.content"
                :news-date="notice.date"
            />

           

        </div>

    </section>
    
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual.vue'


export default {
    components: {
        HcodeSectionNewsIndividual
    },
    data() {
        return {
            news:[]
        }
    },
    created() {
        this.news = [{
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
    }
   
}
</script>

<style scoped>
section {
    padding: 50px 0;
    margin-top: 25px;
    background-color: #F37520;
}


</style>
