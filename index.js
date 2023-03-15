// console.log("object");
let dispData = document.getElementById("dispData");
let dispImg = document.getElementById("dispImg");

let key = "f9129b0a";
function movie() {
  let movie = document.getElementById("MovieName").value;
  console.log(movie);
  async function getData() {
    try {
      let res = await fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${key}`);
      data = await res.json();
      displayData();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  getData();
}

function displayData() {
  dispData.innerHTML = null;
  dispImg.innerHTML = null;
  let title = document.createElement("p");
  title.innerText = `Movie name : - ${data.Title}`;
  let poster = document.createElement("img");
  poster.src = data.Poster;
  let rating = document.createElement("p");
  rating.innerText = `IMDB Rating :- ${data.imdbRating}`;
  let length = document.createElement("p");
  length.innerText = `Length :- ${data.Runtime}`;
  let released = document.createElement("p");
  released.innerText = `Release :- ${data.Released}`;
  let languages = document.createElement("p");
  languages.innerText = `Languages :- ${data.Language}`;
  let boxOffice = document.createElement("p");
  boxOffice.innerText = `BoxOffice Collection :- ${data.BoxOffice}`;
  dispImg.append(poster);
  dispData.append(title, rating, length, released, languages, boxOffice);
}
