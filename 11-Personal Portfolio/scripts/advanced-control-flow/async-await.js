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

async function delayMessages() {
  const dataArray = [
    ["hello", 1000],
    ["hi", 2000],
    ["hey", 3000],
  ];

  try {
    for (let i = 0; i < dataArray.length; i++) {
      const message = await delay(dataArray[i][0], dataArray[i][1]);
      console.log(message);
    }
  } catch (err) {
    console.log(err);
  }
}

delayMessages();
