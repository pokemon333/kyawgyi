<script >
import axios from "axios";
import ApiService from "../../../ApiService";

export default {
  data() {
    return {
      slidersDatas: [],
    };
  },
  methods: {


    Toedit(slider) {
      (this.display = "edit"),
        ApiService.get("/admin/sliders/" + slider).then(c => {
          this.showData = c.data.data;
        });
    },
    update(event, slider) {
      event.preventDefault();
      ApiService.patch("/admin/sliders/" + slider, this.form).then(c => {
        console.log(c);
      });
    },

    Delete(slider) {
      ApiService.delete("/admin/sliders/" + slider).then(c => {
        window.location.assign('http://localhost:5173/admin/sliders')
      });
    }
  },
  mounted() {
    ApiService.get("admin/sliders").then(c => {
      this.slidersDatas = c.data.data;
      console.log(this.slidersDatas);
    });
  }
};
</script>

<template>
  <main>


    <div class="flex flex-col w-full">
      <table class="w-9/12 mx-auto mt-8 text-gray-500 bg-gray-100 table-auto">
        <thead class="bg-gray-400">
          <tr>
            <th >ID</th>
            <th class="pr-9 pl-8">Order_by</th>
            <th class="pr-8 pl-4 ">Image</th>
            <th class="pr-10 pl-8">Status</th>
            <th class="hover:text-blue-500">
              <router-link
                class="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                :to="{ name: 'createSlider' }">Create</router-link>
            </th>
          </tr>
        </thead>
        <tbody v-for="(image, index) in this.slidersDatas" :key="index">
          <tr>
            <td class="pt-2  "> {{ image.id }}</td>

            <td class="pt-2 pl-12">{{ image.order_by }}</td>
            <td class="">
              <img :src="image.image" class="object-fill w-20 h-20 pt-3" />
            </td>
            <td class="pt-2 pl-12">{{ image.status }}</td>
            <td>
              <router-link :to="{ name: 'ShowSlider', params: { id: image.id } }"
                class="inline-block px-6 py-2.5 bg-sky-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Show</router-link>   
                  <router-link :to="{ name: 'EditSlider', params: { id: image.id } }"
                class="inline-block px-6 py-2.5 ml-3 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Edit</router-link>  
              <button
              @click="Delete(image.id)"
              class="inline-block ml-3 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>




    <!-- This is the show form -->

  

    <!-- this is edit -->
      <!-- <div class="flex justify-center w-full bg-slate-100">
        <div class="w-3/6 mt-3">
          <div class="flex justify-center max-w-sm p-6 ml-20 bg-white shadow-lg rounded-xl">
            <form>
              <div class="mb-6 form-group">
                <label class="inline-block mb-2 text-gray-700 form-label">Stauts</label>
                <input :placeholder="this.showData.status" type="text" v-on:keyup="status($event, 'status')"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
                <label class="inline-block mb-2 text-gray-700 form-label">order_by</label>
                <input :placeholder="this.showData.order_by" type="number" v-on:keyup="order_by($event, 'order_by')"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
              </div>
              <div class="mb-6 form-group">
                <label class="inline-block mb-2 text-gray-700 form-label">Image</label>
                <input type="file" @change="fileUpload"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" />
              </div>
              <button @click="update(event, this.showData.id)"
                class="px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit</button>
            </form>
          </div>
        </div>
        <img class="rounded-t-lg w-80 mt-6 border-slate-600 border-2 rounded-md h-80 object-cover"
          :src="this.showData.image" alt />
      </div> -->


  </main>
</template>

