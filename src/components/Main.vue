<template>

   
<div>
 
<Button v-show="homePage" @btn-click="$emit('toggle-add-task')"
 :text="showAddTask ? 'Close' : 'Add Task'" 
 :color="showAddTask ? 'red' : 'yellowgreen'" />
</div>
</template>

<script>
import AboutVue from '@/views/About.vue'
import Button from './Button'


export default {
    name: 'Main',
    props: {
        title: String,
        showAddTask: Boolean,
    },
    components:{
        Button
    },
    computed:{
        homePage(){

            if(this.$route.path ==='/'){

                return true

            }
            else{
                return false
                }
        
        }

    }
}
</script>

<style scoped>

div{
    margin-top:25px;
    margin-left: 120px;

}

</style>