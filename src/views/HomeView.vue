<template>
  <div class="home">
    <h1>Personals Infomation</h1>
    <div class="from-display">
      <ul>
        <div>
          <li v-for="personal in personals" :key="personal.id">
            <div class="li">
              {{ personal.idserail }} {{ personal.name }}
              {{ personal.lastname }}
            </div>
            <span>
              <button>
                <router-link :to="{ path: `/personals/${personal.id}` }">
                  Edit
                </router-link>
              </button>
              |
              <button @click="deleted(personal.id)">Delete</button>
            </span>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import personalRef from "../firebase";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      personals: [],
      selectDoc: null,
    };
  },
  methods: {
    async fetchinformation() {
      let personalSnapshot = await getDocs(personalRef);
      let personals = [];
      personalSnapshot.forEach((personal) => {
        let personalData = personal.data();
        personalData.id = personal.id;
        personals.push(personalData);
      });
      console.log(personals);
      this.personals = personals;
    },
    async deleted(personalId) {
      let personRef = doc(personalRef, personalId);
      await deleteDoc(personRef);
      alert("Deleted Personal Complete");
      this.$router.go();
    },
  },
  created() {
    this.fetchinformation();
  },
};
</script>

<style scoped>
.from-display {
  background-color: beige;
  margin: 10%;
}

ul {
  padding: 10px 10px;
  box-sizing: 10px;
}

.li {
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 1px;
  margin: 1px 0;
  width: 50%;
}

li {
  list-style-type: none;
}
</style>
