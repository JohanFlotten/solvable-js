// OPPGAVE EN
// PUTT IN RIKTIG VARIABEL INNI HVA DISSE BESKRIVER

// variabler: 
// 23
// "per knut"
// "skog", "vann", "mark"
// navn: "Nina", alder: 42, 
// true
// `kaldt inne i ${array[1]}en`
export let string = "per knut" 
export let number = 23
export let array = ["skog", "vann", "mark"]
export let object = {
    navn: "Nina",
    alder: 42,
}
export let boolean = true
export let litteralString = `kaldt inne i ${array[1]}en`

// OPPGAVE TO
// denne for loopen står feil endre den så han funker
//NB HUSK OG UNCOMMENT
export function myFunc(plussAbleNumber) {
    for (let i = 0; i < number; i++) {
        plussAbleNumber++;
    }
    return plussAbleNumber;
}

// OPPGAVE TRE
// putt inn riktig info med bruk av nina objectet. og send ut infoen (se oppgave 2)
export function oppgave3() {
    let val = `${(object.navn)} kan kode, og er ${(object.alder)} år.`
   return val;
}

//OPPGAVE FIRE 
// ta og fjern den som ikke matcher med arrayet og reassign fulført array så den har riktig ting i seg
export function oppgave4() {
    let arr1 = ["suppe", "tomat", "leverpostei"]
    let fullførtArray = arr1

    return fullførtArray
}

//OPPGAVE FEM
// endre floating til 640 med matte (*, /, +, -). prøv og gjøre den så intrisang som mulig
export function oppgave5() {
    let static1 = 4 
    let static2 = 20 
    let static3 = 10
    let floating = (static2*static1)*static3 - (Math.sqrt(((static3*static3)**2))* Math.sqrt(static1))+(static3*static1)
//eg e helt klar over at regnestykket ikke gir mening men du sa gjør det så interessant som mulig så lekte meg bare litt med det eg kunne :D
    return floating
}

//OPPGAVE SEKS
// lag en if else statment som vil sjekke om bool er true eller false. om den er true return bool. om den e false gjør bool true
export function oppgave6() {
    let bool = false
    if (bool = true) {
        return bool;
    }
    else {
        bool = true
    }
}

//OPPGAVE syv 
// lag et div element som blir sendt inn. for og lage deres egen oppgave fulført
export function oppgave7() {

    const opgText = "godt jobbet :3 oppgave 7 løst"
    const card = document.createElement("div")
    card.classList.add("box-style")

    const pText = document.createElement("p")
    pText.textContent = opgText
    card.appendChild(pText)
// div (med class "box-style")
// p
// text = godt jobbet :3 oppgave 1 løst
return card
}

//oppgave 8
//ta og vis dere fram med noe kode
function showoff() {
    console.log(":D")
}
