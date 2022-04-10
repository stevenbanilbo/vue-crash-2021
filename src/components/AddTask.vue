<template>
    <form @submit="onSubmit">
        <div>
        <label>Task: </label>
        <input type="text" v-model="text" name="text" placeholder="Add Upcoming Task" />
        </div>
         <div>
        <label>Day & Time: </label>
        <input type="text" v-model="day" name="day" placeholder="Add Day and Time" />
        </div>
        <div>
        <label>Task: </label>
        <input type="checkbox" v-model="reminder" name="reminder"/>
        </div>

        <input type="submit" value="Save Task" class="btn"/>

    </form>
</template>

<script>


export default{
    name: 'AddTask',
    data(){
        return{

                text:'',
                day:'',
                reminder: false
        }
    },
    methods:{
        onSubmit(pass){

            pass.preventDefault()

            if(!this.text){

                alert('Please add a task');
                return
            }

            const newTask = {

                // id:Math.floor(Math.random() * 100000),
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }

            this.$emit('add-task',newTask)
        
            this.text='',
            this.day='',
            this.reminder=''
        
        
        }



    }

}
</script>
