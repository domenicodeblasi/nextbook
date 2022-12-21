const placeholderArray = [
    "Childhood",
    "Poetry",
    "Short Stories",
    "Santa Claus",
    "Horror Tales",
    "Detective Stories",
    "Love Stories",
    "Roald Dahl",
    "Mythical Animals",
    "Swords",
    "Humour",
    "Trains",
    "Super Mario"
];

function randomPlaceholderIndex() {
    return Math.floor(Math.random() * placeholderArray.length);
}

export {placeholderArray, randomPlaceholderIndex};