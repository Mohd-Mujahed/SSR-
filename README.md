run server and  shoplocation at onece

to run server folder use npm start script 

and to run shoplocation folder use npm run dev

mongodb cloud for mongodb

https://www.mongodb.com/docs/manual/reference/operator/aggregation/geoNear/

<!-- mock data  -->

[
  {
    "name": "ABC Bookstore",
    "location": {
      "type": "Point",
      "coordinates": [
        77.5899,
        12.9716
      ]
    },
    "category": "Bookstore"
  },
  {
    "name": "XYZ Grocery Store",
    "location": {
      "type": "Point",
      "coordinates": [
        77.5946,
        12.9829
      ]
    },
    "category": "Grocery Store"
  },
  {
    "name": "PQR Electronics",
    "location": {
      "type": "Point",
      "coordinates": [
        77.6161,
        12.9345
      ]
    },
    "category": "Electronics"
  },
  {
    "name": "LMN Hardware Store",
    "location": {
      "type": "Point",
      "coordinates": [
        77.6020,
        12.9347
      ]
    },
    "category": "Hardware Store"
  },
  {
    "name": "DEF Pharmacy",
    "location": {
      "type": "Point",
      "coordinates": [
        77.5947,
        12.9360
      ]
    },
    "category": "Pharmacy"
  },
  {
    "name": "GHI Vegetables",
    "location": {
      "type": "Point",
      "coordinates": [
        77.5965,
        12.9357
      ]
    },
    "category": "Vegetable Store"
  },
  {
    "name": "NOP Stationery",
    "location": {
      "type": "Point",
      "coordinates": [
        77.5999,
        12.9357
      ]
    },
    "category": "Stationery"
  },
  {
    "name": "JKL Bakery",
    "location": {
      "type": "Point",
      "coordinates": [
        77.6084,
        12.9289
      ]
    },
    "category": "Bakery"
  },
  {
    "name": "UVW Furniture",
    "location": {
      "type": "Point",
      "coordinates": [
        77.6016,
        12.9313
      ]
    },
    "category": "Furniture"
  },
  {
    "name": "STU Shoe Store",
    "location": {
      "type": "Point",
      "coordinates": [
        77.5835,
        12.9267
      ]
    },
    "category": "Shoe Store"
  },
  {
    "name": "MNO Watch Store",
    "location": {
      "type": "Point",
      "coordinates": [
        77.5910,
        12.9235
      ]
    },
    "category": "Watch Store"
  },
  {
    "name": "HIJ Jewellery",
    "location": {
      "type": "Point",
      "coordinates": [
        77.6034,
        12.9116
      ]
    },
    "category": "Jewellery Store"
  },
  {
    "name": "PQR Stationery",
    "location": {
      "type": "Point",
      "coordinates": [
        77.6073,
        12.9089
      ]
    },
    "category": "Stationery"
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  [  {    name: "The Bombay Canteen",    location: { type: "Point", coordinates: [ 19.0125, 72.8305 ] },
    category: "Restaurant"
  },
  {
    name: "Bandra Fort",
    location: { type: "Point", coordinates: [ 19.0490, 72.8187 ] },
    category: "Historical Place"
  },
  {
    name: "The Taj Mahal Palace",
    location: { type: "Point", coordinates: [ 18.9217, 72.8331 ] },
    category: "Hotel"
  },
  {
    name: "Juhu Beach",
    location: { type: "Point", coordinates: [ 19.1071, 72.8268 ] },
    category: "Beach"
  },
  {
    name: "Haji Ali Dargah",
    location: { type: "Point", coordinates: [ 18.9826, 72.8106 ] },
    category: "Religious Place"
  },
  {
    name: "Colaba Causeway Market",
    location: { type: "Point", coordinates: [ 18.9152, 72.8267 ] },
    category: "Market"
  },
  {
    name: "Siddhivinayak Temple",
    location: { type: "Point", coordinates: [ 19.0166, 72.8307 ] },
    category: "Religious Place"
  },
  {
    name: "Chhatrapati Shivaji Terminus",
    location: { type: "Point", coordinates: [ 18.9401, 72.8353 ] },
    category: "Transportation Hub"
  },
  {
    name: "Marine Drive",
    location: { type: "Point", coordinates: [ 18.9440, 72.8238 ] },
    category: "Beach"
  },
  {
    name: "Gateway of India",
    location: { type: "Point", coordinates: [ 18.9219, 72.8347 ] },
    category: "Historical Place"
  },
  {
    name: "Chor Bazaar",
    location: { type: "Point", coordinates: [ 18.9585, 72.8261 ] },
    category: "Market"
  },
  {
    name: "Crawford Market",
    location: { type: "Point", coordinates: [ 18.9475, 72.8329 ] },
    category: "Market"
  },
  {
    name: "Jijamata Udyaan",
    location: { type: "Point", coordinates: [ 18.9823, 72.8343 ] },
    category: "Park"
  },
  {
    name: "Hanging Gardens of Mumbai",
    location: { type: "Point", coordinates: [ 18.9569, 72.8048 ] },
    category: "Park"
  },
  {
    name: "Bandra-Worli Sea Link",
    location: { type: "Point", coordinates: [ 19.0272, 72.8298 ] },
    category: "Bridge"
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  [  {    name: "The Spice House",    location: { type: "Point", coordinates: [ 72.8479, 19.1092 ] },
    category: "Grocery"
  },
  {
    name: "The Bookshop",
    location: { type: "Point", coordinates: [ 72.8477, 19.1100 ] },
    category: "Books"
  },
  {
    name: "The Coffee House",
    location: { type: "Point", coordinates: [ 72.8476, 19.1098 ] },
    category: "Café"
  },
  {
    name: "The Fashion Boutique",
    location: { type: "Point", coordinates: [ 72.8475, 19.1096 ] },
    category: "Fashion"
  },
  {
    name: "The Pet Store",
    location: { type: "Point", coordinates: [ 72.8474, 19.1094 ] },
    category: "Pet Supplies"
  },
  {
    name: "The Music Shop",
    location: { type: "Point", coordinates: [ 72.8473, 19.1092 ] },
    category: "Music"
  },
  {
    name: "The Sports Store",
    location: { type: "Point", coordinates: [ 72.8472, 19.1090 ] },
    category: "Sports"
  },
  {
    name: "The Art Gallery",
    location: { type: "Point", coordinates: [ 72.8471, 19.1088 ] },
    category: "Art"
  },
  {
    name: "The Toy Store",
    location: { type: "Point", coordinates: [ 72.8470, 19.1086 ] },
    category: "Toys"
  },
  {
    name: "The Home Decor Store",
    location: { type: "Point", coordinates: [ 72.8469, 19.1084 ] },
    category: "Home Decor"
  },
  {
    name: "The Stationery Store",
    location: { type: "Point", coordinates: [ 72.8468, 19.1082 ] },
    category: "Stationery"
  },
  {
    name: "The Shoe Store",
    location: { type: "Point", coordinates: [ 72.8467, 19.1080 ] },
    category: "Shoes"
  },
  {
    name: "The Jewellery Store",
    location: { type: "Point", coordinates: [ 72.8466, 19.1078 ] },
    category: "Jewellery"
  },
  {
    name: "The Wine Shop",
    location: { type: "Point", coordinates: [ 72.8465, 19.1076 ] },
    category: "Wine"
  },
  {
    name: "The Lingerie Store",
    location: { type: "Point", coordinates: [ 72.8464, 19.1074 ] },
    category: "Lingerie"
  },
  {
    name: "The Shoe Store",
    location: { type: "Point", coordinates: [ 72.8463, 19.1072 ] },
    category: "Shoes"
  },
  {
    name: "The Organic Food Store",
    location: { type: "Point", coordinates: [ 72.8462, 19.1070 ] },
    category: "Gro
}







