<template>
  <div class="addpersonal">
    <h1>Edit Personal Infomations</h1>
  </div>
  <form @submit.prevent="updatepersonal">
    <div>
      <input
        type="text"
        name=""
        id=""
        class="input"
        placeholder="ID"
        maxlength="4"
        v-model="personalInfo.idserail"
      />
    </div>
    <div>
      <input
        type="text"
        name=""
        id=""
        class="input"
        placeholder="Name"
        v-model="personalInfo.name"
      />
    </div>
    <div>
      <input
        type="text"
        name=""
        id=""
        class="input"
        placeholder="Lastname"
        v-model="personalInfo.lastname"
      />
    </div>
    <button class="button">UPDATE</button>
  </form>
</template>

<script>
import personalRef from "../firebase";
import { getDoc , doc , setDoc } from "firebase/firestore";

export default {
  data() {
    return {
      selectedPersonal: {},
      personalId: null,
      docRef: null,
      personalInfo: {
        idserail: null,
        name: null,
        lastname: null,
      },
    };
  },
  methods: {
    async getpersonal() {
      let personRef = doc(personalRef, this.personalId);
      this.docRef = personRef;
      let personaled = await getDoc(this.docRef);
      let personalData = personaled.data();
      this.personalInfo.idserail = personalData.idserail;
      this.personalInfo.name = personalData.name;
      this.personalInfo.lastname = personalData.lastname;
    },
    async updatepersonal() {
      await setDoc(this.docRef, this.personalInfo);
      alert( `Update personal name: ${this.personalInfo.name} lastname: ${this.personalInfo.lastname} completed successfully `);
      this.$router.push("/");
    },
  },
  created() {
    let personalId = this.$route.params.personalId;
    this.personalId = personalId;
    this.getpersonal();
  },
};
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
  