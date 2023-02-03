<template>
    <div class="flex justify-center w-full bg-slate-100">
        <div class="w-3/6 mt-3">
            <div class="flex justify-center">
                <div class="max-w-sm bg-white rounded-lg shadow-lg">
                    <img class="rounded-t-lg w-96 h-96 " :src="this.showData.image" alt />
                    <div class="p-6">
                        <h1>Status : {{ this.showData.status }}</h1><br>
                        <h1>Order-by : {{ this.showData.order_by }}</h1><br>
                        <router-link :to="{ name: 'sliders' }"
                            class="inline-block mr-3 px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Back</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ApiService from "../../../../ApiService";
export default {
    mounted() {
        ApiService.get('/admin/sliders/' + this.slider)
            .then((res) => {
                this.showData = res.data.data;
            })
            .catch((res) => {
                console.log(res);
            });
    },
    data() {
        return {
            slider: this.$route.params.id,
            showData: {},
        };
    },
    methods: {

    },
}
</script>