<template>
        
        <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
                                    <!-- //if else statement: yung ? is if, else yung :, task class to remain always -->  
        <h4>{{task.text}}</h4>
            <p @click="$emit('delete-task', id)">Close</p>
        <h6>{{task.day}}</h6>

        </div>
        
</template>


<script>
export default {
    name: 'Task',
    props:{
        task: Object,
    
    },
    // methods:{
    //     onDelete(id){

    //        this.$emit('delete-task', id)

    //     }

    // }

}

</script>


<style scoped>

div{
    background-color: gainsboro;
    padding: 20px;
    border-radius: 5px;
    margin-top: 5px;
}

p{

    float: right;
    text-decoration: underline;
    
}


</style>