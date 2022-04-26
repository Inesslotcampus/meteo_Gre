
<template>
<div>

<h1>{{ name }}</h1>
<p>{{ weather }}</p>
<p>{{ temperature }} degré | {{updatedAtTimeAgo}}</p>
</div>

</template>

<script>
import {
    format
} from 'timeago.js';

 export default {
     name: "CityComponent",
    props: {

      name : String,
      weather: String,
      temperature: Number,
      updatedAt: Date

    
   
    },
     computed: {
        updatedAtTimeAgo: function () {
            return format(this.updatedAt)
        }
    }
      }

</script>