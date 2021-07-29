const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

// This func generates a random string
const randomString = (length) => {
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export default randomString;
