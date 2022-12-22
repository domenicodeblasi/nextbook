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
    "Super Mario",
    "Cartoons and Comics",
    "Pirates",
    "Venice",
    "Travel",
    "Classic Literature",
    "Male Friendship",
    "Tiger",
    "Religion",
    "Young Adult",
    "Wizards"
];

function randomPlaceholderIndex() {
    return Math.floor(Math.random() * placeholderArray.length);
}

export {placeholderArray, randomPlaceholderIndex};