<template>
   <Nav />
    <Main @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
  <router-view :showAddTask="showAddTask"></router-view>
  <Footer />
</template>

<script>

import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Nav, Main, Footer
  },
  data(){

      return{
        
        showAddTask: false

      }
  },
  methods:{
  toggleAddTask(){

      this.showAddTask = !this.showAddTask

    }
  }
}  

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 85vw;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}

.reminder{

border-left: 3px solid green;

}
</style>
