<template>
  <div class="container my-5">
    <h2 class="text-center text-primary">Latest Adverts</h2>

    <!-- Advert List -->
    <div class="row">
      <div class="col-md-4" v-for="(ad, index) in adverts" :key="index">
        <div class="card">
          <img :src="ad.image" class="card-img-top" alt="Advert">
          <div class="card-body">
            <h5 class="card-title">{{ ad.title }}</h5>
            <p class="card-text">{{ ad.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Add New Advert Form (Now at the Bottom) -->
    <div class="row mt-5 advert">
      <div class="col-md-6 mx-auto">
        <div class="card p-3 mb-4 advert-form">
          <h4 class="text-center">Add New Advert</h4>
          <form @submit.prevent="addAdvert">
            <div class="mb-3">
              <label class="form-label">Title:</label>
              <input type="text" v-model="newAdvert.title" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label">Description:</label>
              <textarea v-model="newAdvert.description" class="form-control" required></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label">Image URL:</label>
              <input type="text" v-model="newAdvert.image" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary w-100">Add Advert</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DiscountImage from "../assets/discount.jpg";
import SmartphoneImage from "../assets/smartphone.jpg";
import WinterImage from "../assets/winterColl.jpg";

export default {
  data() {
    return {
      adverts: [
        { 
          title: "Exclusive Discount - 50% Off!", 
          description: "Hurry up! Get 50% off on all items for a limited time.", 
          image: DiscountImage 
        },
        { 
          title: "New Smartphone Launch!", 
          description: "Introducing the latest smartphone with advanced features.", 
          image: SmartphoneImage  
        },
        { 
          title: "Winter Collection Out Now!", 
          description: "Check out our trendy winter fashion at great prices.", 
          image: WinterImage 
        }
      ],
      newAdvert: {
        title: "",
        description: "",
        image: ""
      }
    };
  },
  methods: {
    addAdvert() {
      if (this.newAdvert.title && this.newAdvert.description && this.newAdvert.image) {
        this.adverts.unshift({ ...this.newAdvert });
        this.newAdvert = { title: "", description: "", image: "" };
      }
    }
  }
};
</script>

<style>
.advert {
  padding-bottom: 80px;
}
.card {
  margin-bottom: 20px;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.advert-form {
  max-width: 500px;
  margin: auto;
}
</style>
