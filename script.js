const getData = async function () {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();
  //   console.log(data);
  selectJoke(data.value);
};

const selectJoke = (value) => {
  console.log(value);
};

getData();
