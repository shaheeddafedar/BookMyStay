import Listing from "../model/listing.model.js"

export const createBooking = async (req,res) => {
    try {
       let {id}= req.params
       let {checkIn,checkOut,totalRent} = req.body

       let listing = await Listing.findById(id)
       if (!listing) {
        return res.status(404).json({message:"Listing is not found"})
       }

       if (new Date(checkIn) >= new Date(checkOut)) {
        return res.status(400).json({message:"invalid checIn/checkOut date"})
       }

       if (listing.isBooked) {
        
       }
    } catch (error) {
        
    }
}