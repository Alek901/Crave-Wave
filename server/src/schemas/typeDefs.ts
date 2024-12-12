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

  type Query {
    meals: [Meals]
    delivery: [Delivery]
    restaurant: [Restaurant]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }
`;

export default typeDefs;
