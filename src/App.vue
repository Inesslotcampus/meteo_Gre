<template>
<div id="app">
<div class="nav">
    <router-view></router-view>

    <router-link to="/">home</router-link>
    
    <router-link to="/City">City</router-link>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">

    <CityList msg="Welcome to Your Vue.js App" />

    

</div>
</template>

<script>
import CityList from './components/CityList.vue'

export default {
    name: 'App',
    components: {
        CityList
    }
}
</script>

<style>
#app {

    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    
}


</style>
