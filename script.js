document.addEventListener("DOMContentLoaded", function () {

const map = L.map("map").setView([36.5, 137.5], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const pokemonData = [
{ pref: "北海道", lat: 43.0642, lng: 141.3469, name: "アローラロコン ", desc: "雪国をイメージした可愛らしい氷タイプのポケモン！",
img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg"
},
{ 
  pref: "岩手県", lat: 39.7036, lng: 141.1527, name: "イシツブテ", desc: "岩のように力強く、岩手の地形を象徴するポケモン！" ,
img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/74.svg"
},
{
  pref: "宮城県", lat: 38.2682, lng: 140.8694, name: "ラプラス", desc: "海と氷を連想させる、宮城の自然にぴったりのポケモン！" ,
img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/131.svg"
},
{ pref: "福島県", lat: 37.7503, lng: 140.4676, name: "ラッキー", desc: "福島の人々に幸運と癒しを届ける、優しいポケモン！" ,
img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/113.svg"
},
{ pref: "福井県", lat: 36.0652, lng: 136.2216, name: "カイリュー", desc: "恐竜王国福井の力強さと冒険心を体現したポケモン！",
img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/149.svg"
},
{ pref: "三重県", lat: 34.7303, lng: 136.5086, name: "ミジュマル", desc: "水辺のイメージを持ち、三重の自然と調和するポケモン！" ,
img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/501.svg"
},
{ pref: "鳥取県", lat: 35.5039, lng: 134.2383, name: "サンド / アローラサンド", desc: "砂丘のイメージにぴったりな砂タイプのポケモン！" ,
img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg"
},
{ pref: "香川県", lat: 34.3401, lng: 134.0434, name: "ヤドン", desc: "うどん県の名物と語感が似ている親しみやすいポケモン！",
img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/79.svg"
},
{ pref: "高知県", lat: 33.5597, lng: 133.5311, name: "ヌオー", desc: "のんびりした高知の自然にマッチする水タイプのポケモン！" ,

img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/195.svg"
},
{ pref: "長崎県", lat: 32.7503, lng: 129.8777, name: "デンリュウ", desc: "光と電気の力で長崎の街を照らすポケモン！",
img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/181.svg"
},
{ pref: "宮崎県", lat: 31.9111, lng: 131.4239, name: "ナッシー", desc: "南国の雰囲気にぴったりな大きく元気なポケモン！",
img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/103.svg"
},
{ pref: "沖縄県", lat: 26.2124, lng: 127.6809, name: "ガーディ", desc: "沖縄の守り神シーサーのように地域を見守る炎タイプのポケモン！",
img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/58.svg"
},
];

const pokeName = document.getElementById("pokeName");
const pokeDesc = document.getElementById("pokeDesc");

pokemonData.forEach((poke) => {
const marker = L.marker([poke.lat, poke.lng]).addTo(map);

marker.on("click", () => {
pokeName.textContent = `${poke.pref} の応援ポケモン：${poke.name}`;
pokeDesc.innerHTML = `
<img src="${poke.img}" alt="${poke.name}" style="height:80px; margin-right:10px; vertical-align:middle;">
${poke.desc}
`;
});

});
});
