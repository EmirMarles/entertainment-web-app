const generateTrigrams = (value) => {
    const n = 3;
    const pad = " ".repeat(n - 1);
    // Pad the string with a space on each end to capture start/end trigrams
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

    // Find the common trigrams
    const commonTrigrams = new Set([...trigramsA].filter(trigram => trigramsB.has(trigram)));

    // Calculate total unique trigrams (union of A and B)
    const totalTrigrams = new Set([...trigramsA, ...trigramsB]);

    // Jaccard index for similarity score
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

// Example Usage:
// const str1 = "book";
// const str2 = "life right book";

// // if similarity > 0.25

// console.log(`Trigrams of "${str1}":`, generateTrigrams(str1));
// console.log(`Similarity between "${str1}" and "${str2}":`, calculateTrigramSimilarity(str1, str2));
