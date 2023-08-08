//Connect node with mongodb.
//  const {MongoClient} = require("mongodb"); 
//  const url = 'mongodb://127.0.0.1:27017/E-Commerce'; 
//  const client = new MongoClient(url); 
//  const database = "e-comm"; 
  
//  async function dbConnect(){ 
//     let result = await client.connect(); 
//     let db = result.db(database); 
//     let collection =  db.collection("products"); 
//     const data = await collection.find({}).toArray();
//     console.log(data);
// }
// dbConnect();



//Read data from mongodb.
//const dbConnect =require('./mongodb');
// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.warn(data)
//     })
// })

         //OR//


const dbConnect =require('./mongodb');
 const main = async ()=>{
     let data = await dbConnect();
     data =await data.find().toArray();
    console.warn(data);
 }         
 main();