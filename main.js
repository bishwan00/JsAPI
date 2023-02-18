const cards = document.querySelector(".cards");
const input = document.querySelector("#myText");
const btn = document.querySelector("#btn");

input.addEventListener("change", updateValue);
const log = document.getElementById("log");

function updateValue(e) {
  getData(e.target.value);
}
async function getData(w) {
  try {
    let Response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await Response.json();

    btn.addEventListener("click", async () => {
      Response = await fetch(data.info.next);
      data = await Response.json();
      let dd = data.results;
      if (w !== undefined) {
        dd = dd.filter((re) => re.name == w);
        console.log(w);
      }
      const res = dd.filter((re) => re.status == "Alive");
      cards.replaceChildren();

      for (const e of res) {
        const wrapper = document.createElement("div");
        const singleCard = document.createElement("div");
        const front = document.createElement("div");
        const cardImg = document.createElement("img");
        const back = document.createElement("div");
        const content = document.createElement("div");
        const h4 = document.createElement("h4");
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const card_button = document.createElement("button");
        if (e.episode.length >= 25) {
          e.character = "main character";
        } else {
          e.character = "side character";
        }
        wrapper.className = "wrapper";
        singleCard.className = "single-card";
        front.className = "front";
        cardImg.className = "front";
        back.className = "back";
        content.className = "content";
        card_button.className = "btnn btnn btn-diactive";
        p2.className = "socials";
        cardImg.src = e.image;
        h2.innerText = e.name;
        card_button.innerText = "View-More";
        p1.innerText = `Gender: ${e.gender} \n Location: ${e.location.name} \n Number Of Episode: ${e.episode.length} \n Species: ${e.species} `;
        h4.innerText = e.character;

        front.appendChild(cardImg);
        singleCard.appendChild(front);
        content.appendChild(h4);
        content.appendChild(h2);
        content.appendChild(p1);
        content.appendChild(p2);
        p2.appendChild(card_button);
        back.appendChild(content);
        singleCard.appendChild(back);
        wrapper.appendChild(singleCard);
        cards.appendChild(wrapper);

        console.log(e.name + " " + e.character);
      }
    });

    console.log(data);
    let dd = data.results;
    if (w !== undefined) {
      dd = dd.filter((re) => re.name == w);
      console.log(w);
    }
    const res = dd.filter((re) => re.status == "Alive");
    cards.replaceChildren();

    for (const e of res) {
      const wrapper = document.createElement("div");
      const singleCard = document.createElement("div");
      const front = document.createElement("div");
      const cardImg = document.createElement("img");
      const back = document.createElement("div");
      const content = document.createElement("div");
      const h4 = document.createElement("h4");
      const h2 = document.createElement("h2");
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const card_button = document.createElement("button");
      if (e.episode.length >= 25) {
        e.character = "main character";
      } else {
        e.character = "side character";
      }
      wrapper.className = "wrapper";
      singleCard.className = "single-card";
      front.className = "front";
      cardImg.className = "front";
      back.className = "back";
      content.className = "content";
      card_button.className = "btnn btnn btn-diactive";
      p2.className = "socials";
      cardImg.src = e.image;
      h2.innerText = e.name;
      card_button.innerText = "View-More";
      p1.innerText = `Gender: ${e.gender} \n Location: ${e.location.name} \n Number Of Episode: ${e.episode.length} \n Species: ${e.species} `;
      h4.innerText = e.character;

      front.appendChild(cardImg);
      singleCard.appendChild(front);
      content.appendChild(h4);
      content.appendChild(h2);
      content.appendChild(p1);
      content.appendChild(p2);
      p2.appendChild(card_button);
      back.appendChild(content);
      singleCard.appendChild(back);
      wrapper.appendChild(singleCard);
      cards.appendChild(wrapper);

      console.log(e.name + " " + e.character);
    }
  } catch (Error) {
    console.error(`there is an error ${Error}`);
  }
}
getData();
