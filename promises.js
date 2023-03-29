const a = 1 + 3;

console.log("before");

function createPromise(timeout) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     console.log("rejecting promise")
    //     reject("error")
    // }, 1000)

    console.log(`promise with timeout ${timeout} is pending...`);

    setTimeout(() => {
      console.log(`promise with timeout ${timeout} is resolved`);
      resolve("ok");
    }, timeout);
  });
}

console.log("after");

console.log("a = ", a);

async function run() {
  const results = await Promise.all([
    createPromise(1000),
    createPromise(2000),
    createPromise(500),
  ]);

  console.log("results: ", results);
}

async function run() {
  const results = await Promise.race([
    createPromise(1000),
    createPromise(2000),
    createPromise(500),
  ]);

  console.log("results: ", results);
}

const runResult = run();

console.log("runResult: ", runResult);

console.log("after run");
