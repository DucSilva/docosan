export function calculateRating(rate) {
    return Math.round(rate, 0)
}

export function sortByDistance(a, b) {
    return b?.distance - a?.distance
}

export function sortByRating(a, b) {
    return b?.rating - a?.rating
}

export function filterItems(item, languageFilterValue = 'vi') {
    const { language } = item;
    if (Array.isArray(language)) return language.includes(languageFilterValue)
    else return languageFilterValue === language;
}