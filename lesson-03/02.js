/*const words = ["яблоко", "банан", "апельсин", "манго", "киви"];

if (words.indexOf("апельсин") !== -1) {
    console.log('Ура! нашел');
} else {
    console.log('Придется поискать в другом магазине. . .');
}*/

const words = ["яблоки" , "банан", "апельсин" , "манго" , "киви"];

const findWord = (word) => {
    if (words.indexOf(word) > -1) {
        console.log('Ура! нашел');
    } else {
        console.log('Придется поискать в другом магазине...')
    }
};
findWord('апельсин');
