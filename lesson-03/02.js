const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
const findWord = (word) => {
    if (words.indexOf(word) > -1) {
        console.log("Ура! нашел");
    } else {
        console.log("Придестя поискать в другом магазине...");
    }
};
console.log(findWord("апельсин"));
