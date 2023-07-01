document
  .getElementById("card")
  .style.setProperty("display", "none", "important");

const search = () => {
  document
    .getElementById("card")
    .style.setProperty("display", "block", "important");

  let pais = document.getElementById("input_search").value;
  let url = `https://restcountries.com/v3.1/name/${pais}?fullText=true`;
  console.log(url);
  fetch(url)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].population);
      console.log(data[0].capital);
      console.log(data[0].region);
      console.log(data[0].continents);

      let bandeira = document.getElementById("bandeira");
      bandeira.src = data[0].flags.svg;

      let name = document.getElementById("name");
      name.innerHTML = pais;

      let capital = document.getElementById("capital");
      capital.innerHTML = data[0].capital;

      let population = document.getElementById("pop");
      population.innerHTML = data[0].population;

      let continents = document.getElementById("cont");
      continents.innerHTML = data[0].continents[0];
    });
};
