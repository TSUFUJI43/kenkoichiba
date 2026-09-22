const rakugaki = [
    "001.png",
    "002.png",
    "003.png",
    "004.png"
];

const list = document.getElementById("rakugaki-list");

for (const image of rakugaki) {

    const link = document.createElement("a");
    link.href = "images/rakugaki/" + image;
    link.target = "_blank";
    link.className = "rakugaki-item";

    const img = document.createElement("img");
    img.src = "images/rakugaki/" + image;
    img.alt = "らくがき";

    link.appendChild(img);
    list.appendChild(link);
}