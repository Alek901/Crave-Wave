Users (
    id SERIAL PRIMARY KEY,
username VARCHAR,
email VARCHAR,
password VARCHAR,

)

Orders (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    description TEXT,
    billing_price INTEGER,
    total INTEGER,
    billing_adresss VARCHAR,

)


Meals (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    ingredients VARCHAR,
    price VARCHAR,
    combo VARCHAR,
    

    
)
 

 Delivery (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER User(id)
    order_id INTEGER Order(id)
    meal_id INTEGER Meal(id)
    delivery_time VARCHAR,
    delivery_address VARCHAR,
    delivery_status VARCHAR,
    delivery_price INTEGER,
    delivery_date VARCHAR,
    
 )