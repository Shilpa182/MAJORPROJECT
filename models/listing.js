

// const mongoose= require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema= new Schema({
//     title:{
//         type:String,
//         required: true,
//     },
//     description: String,
//     image:{
//         type: String,
//         // default:"https://unsplash.com/photos/a-woman-walking-down-a-sidewalk-next-to-parked-bikes-YsEyBKY22Fo",
//         default:"https://images.unsplash.com/photo-1731963913936-d997c980181b?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         set:(v)=>v==="" ? "https://unsplash.com/photos/a-woman-walking-down-a-sidewalk-next-to-parked-bikes-YsEyBKY22Fo" : v,
//     },
//     price:Number,
//     location:String,
//     country: String,
// });

// const Listing = mongoose.model("Listing",listingSchema);
// module.exports= Listing;

// const mongoose= require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema= new Schema({
//     title:{
//         type:String,
//         required: true,
//     },
//     description: String,
//     image:{
//         type: String,
//         default:"https://unsplash.com/photos/a-woman-walking-down-a-sidewalk-next-to-parked-bikes-YsEyBKY22Fo",
//         set:(v)=>v==="" ? "https://unsplash.com/photos/a-woman-walking-down-a-sidewalk-next-to-parked-bikes-YsEyBKY22Fo" : v,
//     },
//     price:Number,
//     location:String,
//     country: String,
// });

// const Listing = mongoose.model("Listing",listingSchema);
// module.exports= Listing;

// const mongoose= require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema= new Schema({
//     title:{
//         type:String,
//         required: true,
//     },
//     description: String,
//     image: {
//     type: String,
//     default: "https://unsplash.com/photos/a-woman-walking-down-a-sidewalk-next-to-parked-bikes-YsEyBKY22Fo",
//     set: (v) => (v && v.trim() === "" ? undefined : v),
// },

//     price:Number,
//     location:String,
//     country: String,
// });

// const Listing = mongoose.model("Listing",listingSchema);
// module.exports= Listing;



const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review= require("./review.js");

const listingSchema = new Schema({
    title:{
        type: String,
        required : true,
    },
    description: String,
    image: {
       url: String,
       filename: String
    },
    price: Number,
    location: String,
    country: String,

    reviews: [
       {
        type: Schema.Types.ObjectId,
        ref: "Review",
       },
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    geometry:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
          },
          coordinates: {
            type: [Number],
            required: true
          }
    }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;



// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: String,
//     image: {
//         type: String,
//         default: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         set: (v) =>
//             v === ""
//                 ? "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 : v,
//     },
//     price: Number,
//     location: String,
//     country: String,
//     reviews: [
//         {
//             type: Schema.Types.ObjectId,
//             ref: "Review",
//         },
//     ],
// });

// const Listing = mongoose.model("Listing", listingSchema);

// module.exports = Listing;