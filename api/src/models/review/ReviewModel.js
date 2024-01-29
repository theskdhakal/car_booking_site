import ReviewSchema from "./ReviewSchema.js";

export const addReview = (obj) => {
  return ReviewSchema(obj).save();
};

//retrieve all Reviews
export const getReviews = () => {
  return ReviewSchema.find();
};

export const updateReview = (ReviewId, data) => {
  return ReviewSchema.findByIdAndUpdate(ReviewId, data);
};

export const deleteReviews = (_id) => {
  return ReviewSchema.findByIdAndDelete(_id);
};
