async function populate() {
    const requestURL="https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"; // constant reference to a value // requestURL stores github link 
    const request = new Request(requestURL); // request object

    const response = await fetch(request); // make network request fetch, puts into response object
    const superHeroes = await response.json(); // returns response data, puts into superHeroes object

    const superheroes = JSON.parse(superHeroes);
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}

function populateHeader(obj) {
    const header = document.querySelector("header"); // header variable stores reference to header element in html
    const myH1 = document.createElement("h1"); // myH1 variable stores reference to new h1 element created in html
    myH1.textContent = obj.squadName;
    header.appendChild(myH1); // appends myH1 to header element

    const myP = document.createElement("p"); // myP variable stores reference to new p element created in html
    myP.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
    header.appendChild(myP); // appends myP to header element
}

function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;

    for (const hero of heroes) {
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myList = document.createElement("ul");

        myH2.textContent = hero.name;
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = "Superpowers:";

        const superPowers = hero.powers;
        for (const power of superPowers) {
            const listItem = document.createElement("li");
            listItem.textContent = power;
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);

        section.appendChild(myArticle);
    }
}

populate();