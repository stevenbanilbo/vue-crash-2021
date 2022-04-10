<template>

<div class="container">
  
  <div v-show="showAddTask">
  <AddTask @add-task="addTask" />
  </div>
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</div>

</template>


<script>

import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'

export default{
    name: 'Home',
    props:{
        showAddTask: Boolean,
    },
    components: {
    Tasks, AddTask      
    },
    data(){
        return{    
        tasks:[],
        }
    }, 
    methods:{
    
    async addTask(task){
      const res = await fetch('connect-api/tasks', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(task),
      })

      const data = await res.json()

      this.tasks ={...this.tasks, task}


    },
    
    
    async deleteTask(id){

      // console.log('task' ,id);

      if(confirm('Are you sure you want to delete?')){
      const res = await fetch(`connect-api/tasks/${id}`,{
        method: 'DELETE'
        
        })
        
        res.status === 200 ? (this.tasks = 
        this.tasks.filter((task) => task.id !== id)) : alert('Error in deleting task')


      this.tasks = this.tasks.filter((task) => task.id !== id)
                    /* i-ffilter lang // magrremain yung mga items na hindi equal sa clinick mong id */ 
     }
    
    },

    async toggleReminder(id){
      const taskToggle = await this.fetchTask(id)
      const updateTask = {...taskToggle, reminder:!taskToggle.reminder}


      const res = await fetch(`connect-api/tasks/${id}`,{
          method: 'PUT',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify(updateTask),

      })

      const data = res.json()
      
      this.tasks = this.tasks.map((task) =>
      task.id === id ?
       {...task, reminder: data.reminder} : task)
        //will reverse status ng reminder (true / false statement)
    },
    async fetchTasks(){

      const res = await fetch('connect-api/tasks')
                                //connect-api = proxy to nasa vue.config
      const data = await res.json()

      return data

    },

    async fetchTask(id){

      const res = await fetch(`connect-api/tasks/${id}`)
                                    //connect-api = proxy to nasa vue.config
      const data = await res.json() 

      return data

    },
  },

  async created(){
    
      this.tasks = await this.fetchTasks()

    


  }


}


</script>

<style scoped>

.container {
  max-width: 85vw;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

</style>