import { faker } from '@faker-js/faker';

const users = []
const products = []

const createRandomUsers = () => {
    return {
        userId: faker.database.mongodbObjectId(),
        fullname: faker.name.fullName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        gender: faker.name.gender(),
        sex: faker.name.sex(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}

const createRandomProducts = () => {
    return {
        productId: faker.database.mongodbObjectId(),
        code: faker.datatype.uuid(),
        price: faker.commerce.price(50, 9000, 0, '$'),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        stock: faker.datatype.number({ min: 0, max: 100, precision: 1 }),
        img: faker.image.transport()
    };
}

for (let i = 0; i < 100; i++) {
    users.push(createRandomUsers());
}

for (let i = 0; i < 500; i++) {
    products.push(createRandomProducts());
}

console.log(users)
console.log(products)