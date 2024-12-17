// import gql from @apollo/client
import { gql } from '@apollo/client';

// Use the gql function to access the thoughts entrypoint and export it
export const QUERY_ORDERDATA = gql`
  query getData {
    Meals {
      _id
      name
      ingredients
      price
      combo
    }
    Delivery {
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
    Restaurant {
      _id
      name
      menu_description
      address
      phone_number
      email
      meal_id
      order_id
      menu_id
      menu_options
      menu_price
    }
    Users {
      _id
      username
      email
      password
    }
    Order {
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
