<template>
	<div class="aside">
		<div class="aside-title"><strong>Добавление товара</strong>
		</div>
		<v-form 
				@submit.prevent
				ref="form"
				v-model="valid">
			<p>Наименование товара<span class="red--text">*</span></p>
			<v-text-field
				required
				:rules="nameRules"
				v-model="product.title"
				label="Введите наименование товара"
			></v-text-field>
								<p>Описание товара</p>
			<v-textarea
				v-model="product.descr"
				label="Введите описание товара"
			></v-textarea>
								<p>Ссылка на изображение<span class="red--text">*</span></p>
			<v-text-field
				:rules="rules"
				v-model="product.img"
				label="Введите ссылку на изображение"
				required
			>
			</v-text-field>
								<p>Цена товара<span class="red--text">*</span></p>
			<v-text-field
				:rules="rules"
				v-model="product.price"
				label="Введите цену товара"
				required
			>
			</v-text-field>
			
			<v-btn
				type="submit"
				   :disabled="!valid"
				   @click="addProduct"
				   class="d-flex ma-auto mt-2"
				   rounded>Добавить товар
			</v-btn>
			
			<v-btn @click="resetValidation" small class="d-flex ma-auto mt-2"
				   rounded>Reset</v-btn>
		
		</v-form>
	</div>
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
			valid: true,
			rules: [
				value => {
					if(value) return true;
					return "You must enter a product info.";
				}
			],
			nameRules: [
				v => !!v || 'Name is required',
				v => (v && v.length >= 3) || 'Name must be more than 2 characters',
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
			this.$refs.form.validate()
		},
		resetValidation () {
			this.$refs.form.reset()
		},
	}
}
</script>

<style scoped>
p {
	font-weight: bold;
}
</style>