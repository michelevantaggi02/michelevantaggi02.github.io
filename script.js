"use strict";
const nome = "michelevantaggi02";
const github = "https://api.github.com/users/"+nome+"/repos";
const div = document.querySelector(".projects .examples");

async function richiedi(){
    const risposta = await richiesta();
    console.log(risposta);
    risposta.forEach(e => {

        if(e.name !== nome){
        let nuovo = document.createElement("span");
        nuovo.className = "example";
        let titolo = document.createElement("h3");
        titolo.innerText = e.name;
        let link = document.createElement("a");
        link.href = e.html_url;
        link.innerText = "link";
        let desc = document.createElement("p");
        desc.innerText = e.description;
        nuovo.appendChild(titolo)
        nuovo.appendChild(link);
        nuovo.appendChild(desc);
        div.appendChild(nuovo);
        }
    });
}

async function richiesta(){
    const risposta = await fetch(github, {method:"GET"});
    return risposta.json();
}

richiedi();