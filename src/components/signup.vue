<template>

  <div class="sign-up">
    <p>Create a new Account</p>

    <input type="text" name="" value="" placeholder="Email" v-model="email">
    <input type="password" name="" value="" placeholder="Password" v-model="password">
    <button type="button" name="button" v-on:click="signup">Sign Up</button>


    <span>go back to <router-link to="/login">login</router-link></span>
  </div>


</template>


<script>

  import firebase from 'firebase'
  export default {
    name: 'Signup',
    data: function(){
      return{
        email: '',
        password: ''
      }
    },
    methods: {
      signup: function(){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(function(user){
            alert('Your account has been created!')
          },
          function(error) {
            alert('Ooops. ' + error.message)
          }
        )
      }
    }
  }
</script>

<style scoped>
  .sign-up{
    margin-top: 40px;
  }
  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }

  button{
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }

  span{
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>
