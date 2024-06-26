export const signUpInputs = [
  {
    label: "First Name",
    name: "fName",
    required: true,
    placeholder: "David",
    type: "text",
  },
  {
    label: "Last Name",
    name: "lName",
    required: true,
    placeholder: "Miller",
    type: "text",
  },
  {
    label: "Phone",
    name: "phone",

    placeholder: "0123654789",
    type: "number",
  },
  {
    label: "Address",
    name: "address",

    placeholder: "Rockdale, Sydney",
    type: "text",
  },
  {
    label: " Email",
    name: "email",
    required: true,
    placeholder: "DavidM@gmail.com",
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    required: true,
    placeholder: "***********",
    type: "password",
    minLength: "6",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    required: true,
    placeholder: "***********",
    type: "password",
    minLength: "6",
  },
];

export const signInInputs = [
  {
    label: " Email",
    name: "email",
    required: true,
    placeholder: "DavidM@gmail.com",
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    required: true,
    placeholder: "***********",
    type: "password",
    minLength: "6",
  },
];

export const carInputs = [
  {
    label: "Car Name",
    name: "title",
    type: "text",
    placeholder: "GT Wagon",
    required: true,
  },
  {
    label: "Price/day",
    name: "price",
    type: "number",
    placeholder: "$200/day",
    required: true,
  },
  {
    label: "Year",
    name: "year",
    type: "number",
  },

  {
    label: "Thumbnail",
    name: "image",
    type: "file",
    accept: "image/*,video/*",
  },
];
