<template>

    <section>

        <div class="container">
            
            <HcodeSectionNewsIndividual 
                img-name="news1.jpg"
                img-info="Notícia 1"
                news-title="Começam os treinos para a nova temporada"
                news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cumque voluptate soluta debitis perferendis totam eius 
                aliquam voluptatum minus sequi atque! Magnam quas incidunt 
                eveniet eius doloremque tempora repudiandae, eos unde. Lorem 
                ipsum dolor sit amet consectetur adipisicing elit. Esse quam praesentium 
                perspiciatis cum nisi quisquam, saepe unde cumque 
                accusamus 
                quod ullam autem, iste pariatur in, impedit 
                maiores magnam recusandae tempora."
                news-date="01/01/2020"
            />

            <HcodeSectionNewsIndividual 
             img-name="news2.jpg"
                img-info="Notícia 2"
                news-title="Jogo de quarta-feira termina empatado"
                news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cumque voluptate soluta debitis perferendis totam eius 
                aliquam voluptatum minus sequi atque! Magnam quas incidunt 
                eveniet eius doloremque tempora repudiandae, eos unde. Lorem 
                ipsum dolor sit amet consectetur adipisicing elit. Esse quam praesentium 
                perspiciatis cum nisi quisquam, saepe unde cumque 
                accusamus 
                quod ullam autem, iste pariatur in, impedit 
                maiores magnam recusandae tempora."
                news-date="07/01/2020"/>

            <HcodeSectionNewsIndividual 
             img-name="news3.jpg"
                img-info="Notícia 3"
                news-title="A inauguração do novo estádio será na semana que vem"
                news-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cumque voluptate soluta debitis perferendis totam eius 
                aliquam voluptatum minus sequi atque! Magnam quas incidunt 
                eveniet eius doloremque tempora repudiandae, eos unde. Lorem 
                ipsum dolor sit amet consectetur adipisicing elit. Esse quam praesentium 
                perspiciatis cum nisi quisquam, saepe unde cumque 
                accusamus 
                quod ullam autem, iste pariatur in, impedit 
                maiores magnam recusandae tempora."
                news-date="20/01/2020"/>

        </div>

    </section>
    
</template>

<script>
import HcodeSectionNewsIndividual from './HcodeSectionNewsIndividual.vue'


export default {
    components: {
        HcodeSectionNewsIndividual
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
