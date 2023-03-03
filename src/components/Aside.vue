<template>
	<aside class="aside">
		<div class="aside-title"><strong>Добавление товара</strong>
		</div>
		<v-form @submit.prevent>
			
			<v-text-field
				:rules="rules"
				v-model="product.title"
				label="Введите наименование товара"
				required
			></v-text-field>
			<!--					<p>Описание товара</p>-->
			<v-textarea
				v-model="product.descr"
				label="Введите описание товара"
			></v-textarea>
			<!--					<p>Ссылка на изображение<span class="red&#45;&#45;text">*</span></p>-->
			<v-text-field
				:rules="rules"
				v-model="product.img"
				label="Введите ссылку на изображение"
				required
			>
			</v-text-field>
			<!--					<p>Цена товара<span class="red&#45;&#45;text">*</span></p>-->
			<v-text-field
				:rules="rules"
				v-model="product.price"
				label="Введите цену товара"
				required
			>
			</v-text-field>
			<v-btn type="submit"
				   :rules="rules"
				   @click="addProduct"
				   class="d-flex ma-auto mt-2"
				   rounded>Добавить товар
			</v-btn>
		
		</v-form>
	</aside>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			required: true
		},
		
	},
name: "Aside",
	data() {
		return {
			rules: [
				value => {
					if(value) return true;
					return "You must enter a product info.";
				}
			],
		};
	},
	methods: {
		addProduct() {
			if(this.product.title !== "" && this.product.img !== "" && this.product.price !== "") {
				console.log(this.product);
				// this.products.push(this.product);
				this.$emit('add', this.product)
			} else {
				
				console.log("error");
			}
		}
	}
}
</script>

<style scoped>

</style>