var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];


function sortLibrary(library) {
    // var library is defined, use it in your code
    // use console.log(library) to output the sorted library data
    let librarySorted = library.sort((a, b) => {
        return (a.title > b.title) ? 1 : -1
    })
    console.log(librarySorted)


}

sortLibrary(library);