import faker from "faker";

console.log("calls here");

const FakeData = [...Array(100)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: [...Array(4)].map(() => faker.random.image()),
  inStock: faker.random.arrayElement([0, 12, 8, 20]),
  fastDelevery: faker.datatype.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  comments: faker.random.arrayElement([10, 25, 34, 24, 105, 500, 700, 51, 32]),
  product: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  isReviewEnabled: faker.datatype.boolean(),
}));

export default FakeData;
