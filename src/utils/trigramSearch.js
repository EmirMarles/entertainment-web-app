const generateTrigrams = (value) => {
    const n = 3;
    const pad = " ".repeat(n - 1);
    value = pad + value + pad;
    const trigrams = [];

    for (let i = 0; i <= value.length - n; i++) {
        trigrams.push(value.slice(i, i + n));
    }
    return trigrams;
};

const calculateTrigramSimilarity = (stringA, stringB) => {
    if (stringA === stringB) return 1;

    const trigramsA = new Set(generateTrigrams(stringA.toUpperCase()));
    const trigramsB = new Set(generateTrigrams(stringB.toUpperCase()));

    const commonTrigrams = new Set([...trigramsA].filter(trigram => trigramsB.has(trigram)));

    const totalTrigrams = new Set([...trigramsA, ...trigramsB]);

    const similarityScore = commonTrigrams.size / (totalTrigrams.size || Infinity);

    return similarityScore;
};

export function trigramSearch(searchString, filmsData) {
    let returnArr = []
    let j = 0;
    for (let i = 0; i < filmsData.length; i++) {
        if (calculateTrigramSimilarity(searchString, filmsData[i].title) > 0.2) {
            returnArr[j] = filmsData[i]
        }
    }
    return returnArr
}