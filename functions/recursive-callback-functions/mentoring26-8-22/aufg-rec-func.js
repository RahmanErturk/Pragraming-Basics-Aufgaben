function findUppercase(str) {
    if(str.length === 0) return "Es gibt keine große Buchstaben."
    if(str.charAt(0) === str.charAt(0).toUpperCase()) {
        return str.charAt(0)
    } else {
        return findUppercase(str.substring(1));
    }
    
}

console.log(findUppercase("asdKjfalDajdjhfald"));