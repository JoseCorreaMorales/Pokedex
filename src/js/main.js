const URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 12; i++) {
    fetch(URL + i).then(res => res.json()).then(data => {
        showPokemon(data);
    });
    
}



 function showPokemon (data)  { 
  //let types  = data.types.map(type => type.type.name);
  let types  = data.types.map((type) => {
    return `<span class="tag is-${type.type.name}">${type.type.name}</span>`;
  });
  types = types.join("");
  let stats  = data.stats.map(stat => stat.base_stat);

  let abilities = data.abilities.map((ability) => {
    return `<a href="#">#${ability.ability.name}</a>`;
  });
  abilities = abilities.join("");


  let firstMove = data.moves.shift();
  
    let columns = document.querySelector(".columns");
    columns.innerHTML += `
    <div class="column is-4-tablet is-3-desktop mb-6">
    <div class="card mr-6">
      <div class="card-image">
        <div class="card-image__id">#${data.id}</div>
        <figure class="image">
          <img
            src="${data.sprites.other["official-artwork"].front_shiny}"
            alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <span class="tag is-white">No. ${data.id}</span>
          </div>
          <div class="media-content is-centered">
            <p class="title is-4">${data.name} </p>
           
          </div>
        </div>

        <div class="content">
          <div class="tags are-medium">
            ${types}
          </div>

          <div class="tags stats">
            <span class="tag is-white"><strong>height:  </strong> ${data.height}</span>
            <span class="tag is-white"><strong>weight: </strong> ${data.weight}</span>
          </div>

          <a>#${firstMove.move.name}</a>.
          <a href="#">#${data.species.name}</a>&nbsp; ${abilities}
        </div>
      </div>
    </div>
  </div>
    
    
    `;
}

/* 
 <div class="card">
          <div class="card-image">
            <div class="card-image__id">#123</div>
            <figure class="image"><!--is-4by3  -->
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <span class="tag is-white">ID</span>
              </div>
              <div class="media-content is-centered">
                <p class="title is-4">Pokemon name </p>
                <!-- <p class="subtitle is-6 has-text-centered">@johnsmith</p> -->
              </div>
            </div>

            <div class="content">
              <div class="tags are-medium">
                <span class="tag is-fire">Fire</span>
                <span class="tag is-ground">Ground</span>
              </div>

              <div class="tags stats">
                <span class="tag is-white">HP: 100</span>
                <span class="tag is-white">ATK: 100</span>
              </div>

              <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
            </div>
          </div>
        </div>
*/