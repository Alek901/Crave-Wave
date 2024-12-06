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

 Restaurant (
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    menu_description TEXT,
    address VARCHAR,
    phone_number VARCHAR,
    email VARCHAR,
    meal_id INTEGER MEAL(id)
    order_id INTEGER ORDER(id)
    menu_id INTEGER MENU(id)
    menu_options VARCHAR,
    menu_price INTEGER,

    
 )