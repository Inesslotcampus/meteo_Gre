<template>
<div class="hello">
    <h1>{{ msg }}</h1>

    <li v-for="oneCity in cities"  :key="oneCity.id">
        <CityComponent :name="oneCity.name" :weather="oneCity.weather" :temperature="oneCity.temperature" :updatedAt="oneCity.updatedAt"></CityComponent>
    </li>


    

</div>
</template>

<script>
import CityComponent from './City.vue'





export default {
    name: 'CityList',
    components: {
        CityComponent
    },

    props: {
        msg: String,

    },
    data() {
        return {
            cities: [{
                    id: 2,
                    name: 'Grenoble', // nom de la ville
                    weather: 'Presque il pleut ', // descriptif météo 
                    temperature: 13, // température en °C
                    updatedAt: '2022-04-25',
                },
                {
                    id: 1,
                    name: 'Echirolles',
                    weather: 'Peu nuageux',
                    temperature: 19.5,
                    updatedAt: new Date()
                }
            ]

        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
