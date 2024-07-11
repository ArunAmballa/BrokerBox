import mongoose from "mongoose";
const watchlistSchema = mongoose.Schema({
   title: {
       type: String,
       required: true,
       unique:true
   },
   stocks: [
       {
           type: String
       }
   ]
})
const watchlist = mongoose.model('watchlist', watchlistSchema);
export default watchlist;