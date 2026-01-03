// const mongoose = require("mongoose");
// main.then(()=>console.log("data is saved "))
// .catch((err)=>console.log(err));
// async function main(){
//     await mongoose.connect("mongodb://127.0.0.1:27017/relationship");    
// }
// const userSchema = new mongoose.Schema({
// username:String,
// address:[{
//     location:String,
//     city:String,
//         },],
// });
// const model = mongoose.model("model",userSchema);
// const userdata= async()=>{
// let  data = new model({
//     username:"amit",
//     address:[{
//         location:"jaipur",
//         city:"havamahal",
//     },],
// });
// data.address.push({location:"jaia",city:"iugwdgiuw"})
// let result= await data.save();
// console.log(result);
// }
// userdata();

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationship");
  console.log("Connected to MongoDB");
}

main().catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  address: [
    {
      location: String,
      city: String
    }
  ]
});

const User = mongoose.model("User", userSchema);

const userdata = async () => {
  let data = new User({
    username: "amit",
    address: [
      {
        location: "jaipur",
        city: "havamahal"
      }
    ]
  });

  // Add another address
  data.address.push({ location: "jaia", city: "iugwdgiuw" });

  let result = await data.save();
  console.log(result);
};

userdata();
