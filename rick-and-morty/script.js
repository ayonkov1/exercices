var page = 1;

for (page; page < 35; page++) {
  let link = "https://rickandmortyapi.com/api/character/" + "?page=" + page;

  fetch(link)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let characters = data.results;
      let info = data.info;
      //console.log(characters);

      for (var i = 0; i < characters.length; i++) {
        if (characters[i].name == "Pickle Rick") {
          console.log("Found Pickle Rick at: " + link);
          document.getElementById("details").innerHTML =
            "Status: " +
            characters[i].status +
            "<br />" +
            "Species: " +
            characters[i].species +
            "<br />" +
            "Type: " +
            characters[i].type +
            "<br />" +
            "Origin: " +
            characters[i].origin.name;

          let imageLink = characters[i].image;

          fetch(imageLink)
            .then(function (response) {
              return response.blob();
            })
            .then(function (imageBlob) {
              image = URL.createObjectURL(imageBlob);
              document.getElementById("placeholder").src = image;
            })
            .catch(function (error) {
              console.error(error);
            });
        } else {
          //console.log("Not at index"+i);
        }
      }
    });
}
