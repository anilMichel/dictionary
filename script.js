// let url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello"
// let response = fetch(url)
// response.then((v) => {
//   return v.json()
// }).then((words) => {
//   console.log(words)
//   console.log(words[0])
//   objectLength = Object.keys(words[0]).length;
//   console.log(objectLength);
// ihtml = ""
// for (item in words) {
//   console.log(words[item])
//   ihtml += `
//               <div class="card mx-2 my-2" style="width: 22rem;">
//                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
//                               <div class="card-body">
//                                       <h5 class="card-title">${words[item].name}</h5>
//                                       <p class="card-text"> Status is ${words[item].status} and site is ${words[item].site}</p>
//                                       <p class="card-text"> In 24 Hours? ${words[item].in_24_hours} </p>
//                                       <p>Starts at: ${words[item].start_time}
//                                       <p>Starts at: ${words[item].end_time}
//                                       <a href="${words[item].url}" class="btn btn-primary my-4">Visit Contest</a>
//                               </div>
//                       </div>
//               `
// }
// meaningBox.innerHTML = ihtml
// })



//-------------------------

const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";

// Fetch data from the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Check if the API returned an array of entries
    if (Array.isArray(data)) {
      // Iterate through each entry and print information
      data.forEach(entry => {
        console.log("Word:", entry.word);

        // Print phonetics information if available
        if (entry.phonetics && entry.phonetics.length > 0) {
          console.log("Phonetics:");
          entry.phonetics.forEach(phonetic => {
            console.log(`  Text: ${phonetic.text}, Audio: ${phonetic.audio}`);
          });
        }

        // Assuming meanings is an array
        entry.meanings.forEach(meaning => {
          console.log("Part of Speech:", meaning.partOfSpeech);

          // Assuming definitions is an array
          meaning.definitions.forEach((definition, index) => {
            console.log(`Definition ${index + 1}:`, definition.definition);
          });
        });
      });
    } else {
      console.error("Invalid response from the API");
    }
  })
  .catch(error => console.error("Error fetching data:", error));
