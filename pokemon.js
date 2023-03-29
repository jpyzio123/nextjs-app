async function run() {
  try {
    console.log("run: making request");

    const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

    console.log("run: fetchPromise", fetchPromise);

    const response = await fetchPromise;

    const data = await response.json();

    console.log("run: got response", data);

    document.getElementById("response").innerHTML = JSON.stringify(
      data,
      null,
      2
    );
  } catch (error) {
    document.getElementById(
      "response"
    ).innerHTML = `Response with error: ${error.toString()}}`;
  }
}

console.log("before run");
run();

console.log("after run");
