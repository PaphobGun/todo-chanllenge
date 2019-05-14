// allow only alphanumeric but don't allow space between word
// export const isAlphanumeric = inputValue => {
//   return inputValue.match(/^[a-z0-9]+$/i);
// };

// allow alphanumeric and space between word but not at first index
export const isValid = inputValue => {
  return inputValue.match(/^[a-zA-Z0-9ก-ฮ_]+( [a-zA-Z0-9ก-ฮ_]+)*$/);
};
