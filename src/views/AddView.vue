<template>
  <div class="addpersonal">
    <h1>Add Personal Infomations</h1>
  </div>
  <form @submit.prevent="addpersonals">
    <div>
      <input type="text" name="" id="" class="input" placeholder="ID" maxlength="4" v-model="idserail"/>
    </div>
    <div>
      <input type="text" name="" id="" class="input" placeholder="Name" v-model="name"/>
    </div>
    <div>
      <input type="text" name="" id="" class="input" placeholder="Lastname" v-model="lastname"/>
    </div>
      <button class="button" >ADD</button>
  </form>
</template>

<script>
import personalRef from '../firebase';
import { addDoc } from 'firebase/firestore';
export default {
  data(){
    return {
      idserail: null,
      name: null,
      lastname: null
    };
  },
  methods: {
    async addpersonals(){
      console.log('test addpersonals');
      const addeDoc = await addDoc(personalRef, this.$data);
      alert('Sussesfully added');
      console.log(addeDoc);
      this.$router.push('/');
    }
  },
}
</script>

<style>
.input {
  width: 500px;
  height: 50px;
  margin: 15px 15px;
  font-size: 18px;
}

.button {
  width: 25%;
  height: 30px;
  margin: 15px 15px;
  font-size: 18px;
  border: 1px solid #efefef;
  border-radius: 10px;
  background-color: #42b983;
  color: whitesmoke;
  cursor: pointer;
}
</style>
