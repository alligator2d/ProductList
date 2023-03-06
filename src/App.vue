<template>
	<v-app>
		<v-app-bar
			app
			color="brown"
			dark
		>
			<div class="d-flex align-center">
				<v-icon>mdi-camera</v-icon>
				<h3 class="white--text ma-3">
					Product List
				</h3>
			</div>
			<v-spacer></v-spacer>
		</v-app-bar>
		
		<v-main>
			
			<productForm :product="product"
				   @add="addProduct"
			></productForm>
			
			<v-container class="container ">
				<v-row cols="1" class="photo-items" v-for="product in products" :key="product.id">
					<div class="item">
						<img :src="product.img" :alt="product.title">
						<div class="item-title">
							<strong>{{ product.title }}</strong>
						</div>
						{{ product.descr }}
						<br> <br>
						<strong>{{ product.price }}</strong>
						<div class="delete">
							<v-btn
								@click="removeProduct(product.id)"
								color="brown"
								elevation="2"
								icon>
								<v-icon>
									mdi-delete-circle
								</v-icon>
							</v-btn>
						</div>
					</div>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>

import productForm from "@/components/productForm.vue";
import { mapState } from "vuex";

export default {
	name: "App",
	components: { productForm },
	
	data() {
		return {
			product: {
				title: "",
				descr: "",
				img: "",
				price: ""
			},
		};
	},
	methods: {
		addProduct(product) {
			console.log(product);
			this.$store.commit('addProduct', product)
			
			
		},
		removeProduct(id) {
			console.log("delete");
			// this.products = this.products.filter(i => i.id !== id);
			this.$store.commit('removeProduct', id)
		},
		increment() {
			this.$store.commit('increment')
		}
	},
	computed: mapState([
		'products', 'count'
	])
};
</script>
<style lang="scss">
* {
  font-family: 'Montserrat', sans-serif;
}

.v-main__wrap {
  background-color: #E5E5E5;
}

.container {
  position: relative;
  margin: 0 !important;
  left: 360px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.aside {
  position: fixed;
  margin: 20px;
  width: 330px;
  float: left;
  background-color: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 22px 0 rgba(0, 0, 0, .1);
  font-size: 12px;

  p {
	background-color: white;
	margin-bottom: 5px;
	margin-left: 15px;
  }

  input {
	height: 10px;
	margin-bottom: 10px;
	border: none;
  }

  textarea {
	margin-bottom: 10px;
	border: none;
	height: 40px;
  }
}

.aside-title {
  margin-bottom: 10px;
  font-size: 22px;
}

.photo-items {
  margin: 20px;
  max-width: 30%;
  //text-align: center;
}

.item {
  margin-bottom: 10px;
  background-color: white;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 12px 22px 0 rgba(0, 0, 0, .1);
  font-size: 14px;
  min-width: 380px;
  min-height: 395px;
}

.item-title {
  margin: 5px 0 5px;
}

.delete {
  float: right;
  cursor: pointer;
}
</style>