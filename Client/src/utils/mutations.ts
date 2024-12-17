import { gql } from '@apollo/client';

export const CREATE_USER = gql`
 mutation createUser($input: String!) {
    createUser(input: $input) {
      _id
      username
      email
      password
    }
  }
`;

export const CREATE_MEAL = gql`
  mutation createMeal($input: String!) {
    createMeal(input: $input) {
      _id
      name
      ingredients
      price
      combo
    }
  }
`;

export const CREATE_ORDER = gql`
 mutation createOrder($input: String!) {
    createOrder(input: $input) {
      _id
      name
      description
      billing_price
      total_price
      status
      billing_address
    }
  }
`;

export const CREATE_DELIVERY = gql`
 mutation createDelivery($input: String!) {
    createDelivery(input: $input) {
      _id
      customer_id 
      order_id
      meal_id
      delivery_time
      delivery_address
      delivery_status
      delivery_price
      delivery_data
    }
  }
`;


