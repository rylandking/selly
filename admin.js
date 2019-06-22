const db = firebase.firestore();
let name;
let description;
let keywords = [];
let talkingPoints = [];
let type;
let link;
let company;

// Function to Get Each Form Value
function getInputValue(id) {
  return document.getElementById(id).value;
}

// Append Text to Input Element
function appendToInput(id_of_input, text){
    var input_id = '#'+id_of_input;
    $(input_id).val($(input_id).val() + text);
}

function submitReply() {
  $("#saveButton").click(function() {
    name = getInputValue("name");
    description = getInputValue("description");
    link = getInputValue("link");
    keywords = getInputValue("keywords");
    talkingPoints = getInputValue("talkingPoints");
    // Parse the multiple keywords and talkingPointss into an array
    keywordsArray = keywords.split(',');
    talkingPointsArray = talkingPoints.split(',');

    db.collection("replies").add({
      name: name,
      description: description,
      keywords: keywordsArray,
      talkingPoints: talkingPointsArray,
      link: link,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(function(docRef) {
      // Show the successful submission message
      $("#successAlert").removeClass("d-none");
      // Wait 3 seconds, then hide the success message
      setTimeout(function(){ $("#successAlert").addClass("d-none") }, 3000);
      // Log the document id to the console
      console.log(`Successfully submitted: ${docRef.id}`);
    }).catch(function(error) {
      // Show the successful submission message
      $("#errorAlert").removeClass("d-none");
      // Wait 3 seconds, then hide the success message
      setTimeout(function(){ $("#errorAlert").addClass("d-none") }, 3000);

      console.log(`Error: ${error}`);
    });
  });
}

submitReply();


// Gets Data for adminShow page
db.collection("replies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      get = doc.data();
      docid = doc.id;
      name = get.name;
      description = get.description;
      keywords = get.keywords;
      talkingPoints = get.talkingPoints;
      link = get.link;

      // Show All Responses in Admin Show Table
      $("#tableBody").append(`
        <tr>
          <td>${name}</td>
          <td>${description}</td>
          <td>${keywords}</td>
          <td><a href="adminEdit.html?docid=${docid}" class="mr-3">Edit</a></td>
        </tr>
      `);

    });
});
