<template>

  <div class="login">
    <h3>Sign In</h3>
    <input type="text" name="" value="" placeholder="Email" v-model="email">
    <input type="password" name="" value="" placeholder="Password" v-model="password">
    <button v-on:click="login">Connection</button>

    <p>Don't have an account? <router-link to="/signup">Create one!</router-link></p>



  </div>

</template>


<script>
  import firebase from 'firebase'

  export default {

    name: 'login',
    data: function(){
      return{
        email: '',
        password: ''
      }
    },
    methods:{
      login: function(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(function(user){
            alert('well done! Signed in!')
          },
          function(error){
            alert('Oops! ' + error.message)
          }
        )
      }
    }
  }
</script>

<style scoped>

  .login{
    margin-top: 40px;
  }
  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button{
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p{
    margin-top: 40px;
    font-size: 13px;
  }


</style>
