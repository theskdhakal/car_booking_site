import BookingSchema from "./BookingSchema.js";

export const addBooking = (obj) => {
  return BookingSchema(obj).save();
};

//retrieve all bookings
export const getBookings = () => {
  return BookingSchema.find();
};

//retrieve user specific booking using UserId
export const getBookingsByUserId = (userId) => {
  return BookingSchema.find(userId);
};

export const updateBookings = (BookingId, data) => {
  return BookingSchema.findByIdAndUpdate(BookingId, data);
};

export const deleteBookings = (_id) => {
  return BookingSchema.findByIdAndDelete(_id);
};
