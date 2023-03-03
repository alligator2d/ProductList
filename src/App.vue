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
			<!--			<aside class="aside">-->
			<!--				<div class="aside-title"><strong>Добавление товара</strong>-->
			<!--				</div>-->
			<!--				<v-form @submit.prevent>-->
			<!--					-->
			<!--					<v-text-field-->
			<!--						:rules="rules"-->
			<!--						-->
			<!--						v-model="product.title"-->
			<!--						label="Введите наименование товара"-->
			<!--						required-->
			<!--					></v-text-field>-->
			<!--					&lt;!&ndash;					<p>Описание товара</p>&ndash;&gt;-->
			<!--					<v-textarea-->
			<!--						v-model="product.descr"-->
			<!--						label="Введите описание товара"-->
			<!--					></v-textarea>-->
			<!--					&lt;!&ndash;					<p>Ссылка на изображение<span class="red&#45;&#45;text">*</span></p>&ndash;&gt;-->
			<!--					<v-text-field-->
			<!--						:rules="rules"-->
			<!--						v-model="product.img"-->
			<!--						label="Введите ссылку на изображение"-->
			<!--						required-->
			<!--					>-->
			<!--					</v-text-field>-->
			<!--					&lt;!&ndash;					<p>Цена товара<span class="red&#45;&#45;text">*</span></p>&ndash;&gt;-->
			<!--					<v-text-field-->
			<!--						:rules="rules"-->
			<!--						v-model="product.price"-->
			<!--						label="Введите цену товара"-->
			<!--						required-->
			<!--					>-->
			<!--					</v-text-field>-->
			<!--					<v-btn type="submit"-->
			<!--						   :rules="rules"-->
			<!--						   @click="addProduct" -->
			<!--						   class="d-flex ma-auto mt-2" -->
			<!--						   rounded>Добавить товар-->
			<!--					</v-btn>-->
			<!--				-->
			<!--				</v-form>-->
			<!--			</aside>-->
			<Aside :product="product"
				   @add="addProduct"
			></Aside>
			
			<div class="container ">
				<div class="photo-items" v-for="product in products" :key="product.id">
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
				</div>
			</div>
		</v-main>
	</v-app>
</template>

<script>

import Aside from "@/components/Aside.vue";

export default {
	name: "App",
	
	components: { Aside },
	
	data() {
		return {
			product: {
				title: "",
				descr: "",
				img: "",
				price: ""
			},
			products:
				[
					{
						id: 1,
						img: require("./assets/img/Rectangle31.png"),
						title: "Наименование товара",
						descr: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
						price: "10 000 руб."
					},
					{
						id: 2,
						img: require("./assets/img/Rectangle31.png"),
						title: "Наименование товара",
						descr: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
						price: "10 000 руб."
					},
					{
						id: 3,
						img: require("./assets/img/Rectangle31.png"),
						title: "Наименование товара",
						descr: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
						price: "10 000 руб."
					},
					{
						id: 4,
						img: require("./assets/img/Rectangle31.png"),
						title: "Наименование товара",
						descr: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
						price: "10 000 руб."
					},
					{
						id: 5,
						img: require("./assets/img/Rectangle31.png"),
						title: "Наименование товара",
						descr: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
						price: "10 000 руб."
					},
					{
						id: 6,
						img: require("./assets/img/Rectangle31.png"),
						title: "Наименование товара",
						descr: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.",
						price: "10 000 руб."
					}
				
				]
		};
	},
	methods: {
		addProduct(product) {
			console.log(product);
			this.products.push(product)
			// if(this.product.title !== "" && this.product.img !== "" && this.product.price !== "") {
			// 	console.log(this.product);
			// 	this.products.push(this.product);
			// } else {
			// 	console.log("error");
			// }
			
			this.product = {
				title: '',
				descr: '',
				img: '',
				price: '',
			}
		},
		removeProduct(id) {
			console.log("delete");
			this.products = this.products.filter(i => i.id !== id);
		},
		resetForm() {
			
		}
		
		
	}
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
  font-size: 18px;
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