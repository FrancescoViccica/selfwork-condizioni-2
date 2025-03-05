let temp = prompt(`inserisci la temperatura`)

if (temp < 20 && temp > 0) {
    console.log(`non ci sono più le mezze stagioni`);
    
} else if (temp >= 30) {
    console.log(`lu mare, lu sole, lu ientu`);
    
} else if (temp >= 20 && temp < 30) {
    console.log(`mi dia una peroni sudata`);
    
}else if (temp >= -10 && temp <= 0) {
    console.log(`non è tanto freddo quanto l'umidità`);
    
}else if (temp < -10 ) {
    console.log(`copriti...ancora ti raffreddi`);
    
}else {
    console.log(`hai inserito una cifra errata!`);
    
}

let gradi = prompt(`Inserisci i gradi15
    `) ;

switch (true) {
    case gradi < 20 && gradi > 0:
        gradi = `non ci sono più le mezze stagioni`;
        break;

    case gradi >= 30:
        gradi = `lu mare, lu sole, lu ientu`;
        break;

    case gradi >= 20 && gradi < 30:
        gradi = `mi dia una peroni sudata`;
        break;

    case gradi >= -10 && gradi <= 0:
        gradi = `non è tanto freddo quanto l'umidità`;
        break;

    case gradi < -10:
        gradi = `copriti...ancora ti raffreddi`;
        break;

    default:
        gradi = `hai inserito una cifra errata!`
        break;
}

console.log(gradi);
