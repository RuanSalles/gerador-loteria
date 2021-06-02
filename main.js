function numLot() {
    const max = 99;
    const min = 0;
    const numeros = [];
    const h1Num = document.getElementById("numeros");
    for (let i = 0; numeros.length < 6 ; i++) {
        const random = (Math.random() * (max - min) + min).toFixed(0);
        if(!numeros.includes(random)) {
            numeros.push(random)
        }
    }
    h1Num.innerHTML = numeros.join(" - ");
}

function numLot2() {
    const max = 99;
    const min = 0;
    const numeros = [];
    const h1Num = document.getElementById("numeros");
    for (let i = 0; numeros.length < 7 ; i++) {
        const random = (Math.random() * (max - min) + min).toFixed(0);
        if(!numeros.includes(random)) {
            numeros.push(random)
        }
    }
    h1Num.innerHTML = numeros.join(" - ");
}

function numLot3() {
    const max = 99;
    const min = 0;
    const numeros = [];
    const h1Num = document.getElementById("numeros");
    for (let i = 0; numeros.length < 8 ; i++) {
        const random = (Math.random() * (max - min) + min).toFixed(0);
        if(!numeros.includes(random)) {
            numeros.push(random)
        }
    }
    h1Num.innerHTML = numeros.join(" - ");
}

function numLot4() {
    const max = 99;
    const min = 0;
    const numeros = [];
    const h1Num = document.getElementById("numeros");
    for (let i = 0; numeros.length < 9 ; i++) {
        const random = (Math.random() * (max - min) + min).toFixed(0);
        if(!numeros.includes(random)) {
            numeros.push(random)
        }
    }
    h1Num.innerHTML = numeros.join(" - ");
}

function numLot5() {
    const max = 99;
    const min = 0;
    const numeros = [];
    const h1Num = document.getElementById("numeros");
    for (let i = 0; numeros.length < 10 ; i++) {
        const random = (Math.random() * (max - min) + min).toFixed(0);
        if(!numeros.includes(random)) {
            numeros.push(random)
        }
    }
    h1Num.innerHTML = numeros.join(" - ");
}