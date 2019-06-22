const db = firebase.firestore();
let name;
let description;
let keywords = [];
let talkingPoints = [];
let type;
let link;
let company;
const urlParams = new URLSearchParams(window.location.search);
docid = urlParams.get('docid');
console.log(docid);
// Function to Get Each Form Value
function getInputValue(id) {
  return document.getElementById(id).value;
}

// Append Text to Input Element
function appendToInput(id_of_input, text){
    var input_id = '#'+id_of_input;
    $(input_id).val($(input_id).val() + text);
}

// Gets Data for adminShow page on page load
db.collection("replies").doc(docid).get().then(function(doc) {
    if (doc.exists) {
      get = doc.data();
      docid = doc.id;
      name = get.name;
      description = get.description;
      keywords = get.keywords;
      talkingPoints = get.talkingPoints;
      link = get.link;

      // Show Response Values in Inputs on Admin Edit
      appendToInput('name', `${name}`);
      appendToInput('description', `${description}`);
      appendToInput('keywords', `${keywords}`);
      appendToInput('talkingPoints', `${talkingPoints}`);
      appendToInput('link', `${link}`);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

replyDoc = db.collection("replies").doc(docid);

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

    replyDoc.set({
      name: name,
      description: description,
      keywords: keywordsArray,
      talkingPoints: talkingPointsArray,
      link: link,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }, { merge: true }).then(function(docRef) {
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
