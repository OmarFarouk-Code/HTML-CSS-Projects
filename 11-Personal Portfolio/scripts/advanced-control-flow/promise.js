console.log("Hello");

const delay = (message, timer) => {
  return new Promise((resolve, reject) => {
    if (!message) {
      reject("Message is Empty!");
    } else if (timer <= 0) {
      reject("Timer cant be equal or less than zero!");
    } else {
      setTimeout(() => {
        // console.log(message);
        resolve(message);
      }, timer);
    }
  });
};

delay("omaar", 2000)
  .then((result) => {
    console.log(result);
    delay("i hope you are good", 2000);
  })
  .catch((err) => console.log(err));
