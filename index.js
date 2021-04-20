async function pushSearch() {
  let searchInput = document.getElementById("search-film").value;
  try {
    let response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchInput}`
    );
    //   let response = await fetch(`https://api.jikan.moe/v3/search/anime?q=naruto`);

    let data = await response.json();
    console.log(data.results);
    let newHtml = "";
    for (items of data.results) {
      newHtml += `<div class="film__item">
    <a href="${items.url}"  class="d-block film__thumb">
        <img src=${items.image_url}  alt="poster">
    </a>
    <div class="film__meta">
        <a href="${items.url}" class="film__title" id="test">
            ${items.title}
        </a>
        <div class="film__desc">
            <div class="film__score"><i style="font-weight: 800; color: white;background:blue">&ensp;Score&ensp;</i>&#160;${items.score}</div>
            <div class="film__tag"><i style="font-weight: 800; color: white;background: green">&ensp;Members&ensp;</i>&#160;${items.members}</div>
        </div>
    </div>
    </div>`;
    }
    document.getElementById("film__list").innerHTML = newHtml;
  } catch (error) {
    console.log(error);
    alert("Error: Requires atleast 3 or more characters");
  }
}
let test = document.getElementById("test");

test.style.background;
console.log(test);
