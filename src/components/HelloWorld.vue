<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="row mb-4">
      <div class="col-8">
        <select class="form-select" v-model="type">
          <option value="">Не выбрано</option>
          <option value="leads">Сделка</option>
          <option value="contacts">Контакт</option>
          <option value="companies">Компания</option>
        </select>
      </div>
      <div class="col-4">
        <button-spinner
            class="btn btn-md float-start" :class="status"
            :loading="isLoading"
            @click.native="insertData">
          Создать
        </button-spinner>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-3">
            <label>Имя</label>
            <input type="text" v-model="postLead.name" class="form-control">
          </div>
          <div class="col-3" v-if="type === 'leads'">
            <label>Цена</label>
            <input type="number" v-model="postLead.price" class="form-control">
          </div>
          <div class="col-6">
            <ul class="list-group" v-if="type==='leads'">
              <li class="list-group-item" v-for="l in getLeads" :key="l">{{ l }}</li>
            </ul>
            <ul class="list-group" v-if="type==='contacts'">
              <li class="list-group-item" v-for="l in getContacts" :key="l">{{ l }}</li>
            </ul>
            <ul class="list-group" v-if="type==='companies'">
              <li class="list-group-item" v-for="l in getCompanies" :key="l">{{ l }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import VueLoadingButton from 'vue-loading-button'

export default {
  name: 'HelloWorld',
  components: {
    buttonSpinner: VueLoadingButton
  },
  data: () => ({
    title: 'Test #TASK',
    type: '',
    isLoading: false,
    isStyled: false,
    postLead: {
      name: '',
      price: ''
    }
  }),
  methods: {
    async insertData() {
      // let config = ''
      // config = {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      //   }
      // }
      // const postData = this.postLead
      // const path = 'http://127.0.0.1:8000/'
      // console.log(path)
      // console.log(qs.stringify(postData))
      this.isLoading = true;
      if (this.type === 'leads')
        await this.$store.dispatch('setValueLeads', this.postLead)
      else if (this.type === 'contacts')
        await this.$store.dispatch('setValueContacts', this.postLead)
      else if (this.type === 'companies')
        await this.$store.dispatch('setValueCompanies', this.postLead)
      this.isLoading = false
      this.postLead.name = ''
      this.postLead.price = ''
    },
  },
  computed: {
    ...mapGetters(['getLeads', 'getContacts', 'getCompanies']),
    status() {
      if (this.type === '')
        return 'btn-secondary disabled';
      else
        return 'btn-primary'
    },
    statusButton() {
      if (this.type === '')
        return true;
      else
        return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
