const typeDefs = `
  type Meals {
    _id: ID!
    name: String!
    ingredients: String!
    price: Int
    combo: String!
  }

  type Delivery {
    _id: ID!
   customer_id: Int 
   order_id: Int
   meal_id: Int
   delivery_time: String!
   delivery_address: String!
   delivery_status: String!
   delivery_price: Int
   delivery_data: String!
  }

  type Restaurant {
    _id: ID!
    name: String!
    menu_description: String!
    address: String!
    phone_number: Int
    email: String!
    meal_id: Int
    order_id: Int
    menu_id: Int
    menu_options: String!
    menu_price: Int
  }
  type Users {
    _id: ID!
    username: String!
    email: String!
    password:String!
  }
  type Order {
    _id: ID!
    name: String!
    description: String!
    billing_price: Int
    total_price: Int
    status: Int
    billing_address: String!
  }

  type Query {
    meals: [Meals]
    meal: Meals
    Deliverys: [Delivery]
    Delivery: Delivery
    Restaurants: [Restaurant]
    Restaurant: Restaurant
    Users: [Users]
    User: Users
    Orders: [Order]
    Order: Order
  }
  type Mutation {
  createUser(input: String!): Users!
  updateUser(id: ID!, input: String!): Users
  createMeal(input: String!): Meals!
  updateMeal(id: ID!, input: String!): Meals
  createOrder(input: String!): Order!
  updateOrder(id: ID!, input: String!): Order
  createDelivery(input: String!): Delivery!
  updateDelivery(id: ID!, input: String!): Delivery
}
`;

export default typeDefs;
