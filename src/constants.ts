import { faker } from '@faker-js/faker';


export const initialBooks = Array.from({length: 7}, (v, i) => i).map(a => {
	return ({
		name: faker.commerce.productName(),
		isbn: faker.commerce.isbn(),
		category: faker.commerce.product(),
		row: faker.number.int({min:1, max:10}),
		availability: faker.datatype.boolean(0.4),
		count: faker.number.int({min:5, max: 50}),
		cost: faker.number.int({min:500, max:900}),
	})
}) 

export const bookSearchFilters = [{text:'ISBN', value:'isbn'}, {text:'Name', value:'name'}]