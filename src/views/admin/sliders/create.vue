<template>
  <div>
    <form @submit="formSubmit" enctype="multipart/form-data">

      <label>Status:</label>

      <input type="text" class="form-control" v-model="status">

      <label>Order_by:</label>

      <input type="number" class="form-control" v-model="order_by">

      <label>File:</label>

      <input type="file" class="form-control" v-on:change="onFileChange">

      <button class="btn btn-success">Submit</button>

    </form>

  </div>
</template>
   

<script>

import axios from 'axios';

export default {

  mounted() {

    console.log('Component mounted.')

  },

  data() {

    return {

      slider: this.$route.params.id,

      order_by: '',

      status: '',

      file: '',

      success: ''

    };

  },

  methods: {

    onFileChange(e) {

      console.log(e.target.files[0]);

      this.file = e.target.files[0];

    },

    formSubmit(e) {

      e.preventDefault();

      let currentObj = this;



      const config = {

        headers: { 'content-type': 'multipart/form-data' }

      }



      let formData = new FormData();

      formData.append('file', this.file);

      formData.append('status', this.status);

      formData.append('order_by', this.order_by);

      axios.post('http://localhost:8000/api/admin/sliders/', formData, config)

        .then(function (response) {

          console.log(response.data);

          currentObj.success = response.data.success;

        })

        .catch(function (error) {

          currentObj.output = error;

        });

    }

  }

}

</script>