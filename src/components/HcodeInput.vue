<template>
    
    <input type="text" :value="value" @keyup="$emit('input', $event.target.value)" 
    class="from-control" placeholder="Digite seu clube">

</template>

<script>
    export default {
        props: {
          value: String  
        }
    }

</script>

<style scoped>

</style>