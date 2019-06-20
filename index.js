const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({
  extended: true
}));

//Check if server is listening
app.get('/', function(req, res) {
  res.status(200).send('Hello world');
});

app.listen(port, function() {
  console.log('Yep! Listening on port ' + port);
})

// Sellybot code

const slackBot = require('slackbots');
const axios = require('axios');

const bot = new slackBot ({
  token: 'xoxb-655020203907-655007633314-MGDNpzMaDXIpi9NAFQI5nYoB',
  name: 'selly'
});

bot.on('start', function() {
  const params =
  bot.postMessageToChannel(
    'ask-selly',
    '👋 I\'m Selly!\n\n Need selling points for a specific integration, feature or business type? Ask me or just type a few keywords.\n\n For example: *What\'s the value of our Salesforce integration?* Or simply *Salesforce integration*.\n\n I\'m just a bot, but I\'ll do my best to help. If I don\'t know the answer, I\'ll link you to the Help Center.\n\n Talk more soon!🧞‍♀️💪',
    params,
  );
})

// Error Handler
bot.on('error', function(err) {
  console.log(err)
});

// Message Handler
bot.on('message', function(data) {
  // Don't take action if event is NOT a message OR is a bot_message from Selly
  if (data.type !== 'message' || data.subtype === 'bot_message') {
    return;
  }
  // If '@selly' is mentioned in the message, run handleMessage
  if (data.text.includes('<@UK907JM98>')) {
    handleMessage(data.text);
  }

});

// Response to Data (message and data.text are related)
function handleMessage(message) {
  // Turn the message into all lowercase characters
  message = message.toLowerCase();

  // Set keywords
  var jokeKeywords = ["joke", "jokes", "funny", "laugh"];
  var salesKeywords = ["sales", "sales team", "sales teams", "sales company", "sales companies", "sales org", "sales organization", "sales organizations"];
  var engKeywords = ["eng"];
  var hrKeywords = ["hr"];
  var marketingKeywords = ["marketing"];
  var supportKeywords = ["support"];
  var googleDriveKeywords = ["google drive"];
  var gitHubKeywords = ["github"];
  var trelloKeywords = ["trello"];
  var zoomKeywords = ["zoom"];
  var outlookCalendarKeywords = ["outlook calendar"];
  var googleCalendarKeywords = ["google calendar"];
  var gmailKeywords = ["gmail"];
  var salesforceKeywords = ["salesforce"];
  var outlookKeywords = ["outlook"];

  // Check if message contains any jokeKeywords terms? If yes, jokeCheck == true. If no, jokeCheck == false.
  var jokeCheck = jokeKeywords.some(el => message.includes(el));
  var salesCheck = salesKeywords.some(el => message.includes(el));
  var engCheck = engKeywords.some(el => message.includes(el));
  var hrCheck = hrKeywords.some(el => message.includes(el));
  var marketingCheck = marketingKeywords.some(el => message.includes(el));
  var supportCheck = supportKeywords.some(el => message.includes(el));
  var supportCheck = supportKeywords.some(el => message.includes(el));
  var googleDriveCheck = googleDriveKeywords.some(el => message.includes(el));
  var gitHubCheck = gitHubKeywords.some(el => message.includes(el));
  var trelloCheck = trelloKeywords.some(el => message.includes(el));
  var zoomCheck = zoomKeywords.some(el => message.includes(el));
  var outlookCalendarCheck = outlookCalendarKeywords.some(el => message.includes(el));
  var googleCalendarCheck = googleCalendarKeywords.some(el => message.includes(el));
  var gmailCheck = gmailKeywords.some(el => message.includes(el));
  var salesforceCheck = salesforceKeywords.some(el => message.includes(el));
  var outlookCheck = outlookKeywords.some(el => message.includes(el));

  // If ___Check == true, respond with the relevant selling points
  if (jokeCheck == true) {
    randomJoke();
  } else if (salesforceCheck == true) {
    salesforceSellingPoints();
  } else if (salesCheck == true) {
    salesSellingPoints();
  } else if (engCheck == true) {
    engSellingPoints();
  } else if (hrCheck == true) {
    hrSellingPoints();
  } else if (marketingCheck == true) {
    marketingSellingPoints();
  } else if (supportCheck == true) {
    supportSellingPoints();
  } else if (googleDriveCheck == true) {
    googleDriveSellingPoints();
  } else if (gitHubCheck == true) {
    gitHubSellingPoints();
  } else if (trelloCheck == true) {
    trelloSellingPoints();
  } else if (zoomCheck == true) {
    zoomSellingPoints();
  } else if (outlookCalendarCheck == true) {
    outlookCalendarSellingPoints();
  } else if (googleCalendarCheck == true) {
    googleCalendarSellingPoints();
  } else if (gmailCheck == true) {
    gmailSellingPoints();
  } else if (outlookCheck == true) {
    outlookSellingPoints();
  } else {
    unknownKeywordsResponse();
  }

}


// Unknown Keyword Response
function unknownKeywordsResponse() {
  const params = { };

  const response = `
  *🤷‍♀️ Hmm, I don't recognize what you're looking for.*\n
  Try another keyword or phrase and I'll do my best to get you your selling points.\n
  If I don't find them, please <mailto:helloryland@gmail.com|email me> with the keyword you're searching for. I'll add it so I can help you in the future.💪\n
  Trying my best,\n
  Selly 🧞‍♀️`

  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Sales Team selling points
function salesSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for sales teams*\n
    *🤝 Win More Deals*\n>Less time digging through account details and more time addressing customer needs, moving deals forward.\n
    *🏎 Respond to Opportunities Faster*\n>Quickly access documents and communication with others cutting down time to follow up with leads and put together proposals.\n>21% faster response to sales leads (<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|IDC report>).\n
    *🙌 Encourage Transparency & Collaboration *\n>Channels increase the depth and breadth of information sales teams have access to, even across verticals .\n
  <chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|More info on sales pitches>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Eng Team selling points
function engSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for eng teams*\n
    *🏎 Speeds Up Development*\n>Centralized tools, automated workflows, and reduced context switching between applications result in more products and services delivered on time.\n>24% increase in features delivered on time (<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|IDC report>).\n
    *🛠 Automates Workflows with Integrations*\n>Jira and GitHub integrations allow developers to handle non-code work within Slack. Less time spent switching between applications.\n
    *🐛 Fix Bugs Faster*\n>Centralizes feedback and increases discoverability of relevant info. Engineers get context needed to fix bugs more quickly and accurately.\n
  <chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|More info on eng pitches>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// HR Team selling points
function hrSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for HR teams*\n
    *🕵️‍♀️ Recruit More Effectively*\n>Move candidates through recruiting pipeline more effectively with integrations.\n
    *👨‍💻 Onboard More Quickly*\n>New employees quickly get up to speed with all important info and communication accessible in channel histories.\n>24% faster to reach full employee productivity (<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|IDC report>).\n
    *🥳 Happier Employees Over Time*\n>Increased access to cross-vertical teams helps facilitate culture across the company. Allows everyone who needs to be involved to be collaborating and accessible.\n
  <chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|More info on HR pitches>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Marketing Team selling points
function marketingSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for marketing teams*\n
    *⏱ Reduce Approval Times*\n>Less time budget approvals or creative reviews, which means quicker campaign cycles and in turn more campaigns per year.\n>16% faster execution of marking campaigns (<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|IDC report>).\n
    *🙌 Improves Collaboration with External Agencies*\n>Less time asking for latest versions with one historical record for every campaign shared by all involved (even external partners!).\n
  <chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|More info on marketing pitches>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Support Team selling points
function supportSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for support teams*\n
    *🤸‍♂️ Resolve More Tickets*\n>Use integrations to triage issues faster, monitor social media and even respond to customer right from Slack.\n>31% average reduction in ticket resolution time (<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|IDC report>).\n
    *💌 Resolve Tickets More Effectively*\n>Use the collective knowledge base of Slack’s channels to find and surface the best info without ever switching windows.\n
  <chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|More info on support pitches>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Google Drive selling points
function googleDriveSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for Google Drive*\n
    🔐 Grant access to files that others want to view without switching windows.\n
    🔔 Get notifications when someone leaves a comment or suggestion, or shares a doc with you.\n
  <https://slack.com/apps/A6NL8MJ6Q-google-drive|More info about Google Drive>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Github selling points
function gitHubSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for Github*\n
    📲 Bring your code directly into the conversations you care about within Slack to improve collaboration.\n
    🛠 Take actions directly from your Slack convo on common tasks like closing and reopening issues and pull requests.\n
    🔔 Get updates on what’s happening within your repository (like commits, pull requests, issues, reviews, etc) in a channel that doesn’t clutter your daily comms.\n
  <https://slack.com/apps/A8GBNUWU8-github|More info about Github>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Trello selling points
function trelloSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for Trello*\n
    🔐 Allow team to cards and boards in one click without needing to switch windows.\n
  	📲 Join Trello cards, change due dates, subscribe to cards and lots more right from Slack.\n
    🔐 Allow team to cards and boards in one click without needing to switch windows.\n
  <https://slack.com/apps/A074YH40Z-trello|More info about Trello>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Zoom selling points
function zoomSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for Zoom*\n
    🎥 Start an instant meeting without ever switching back to Zoom (even give it a topic!).\n
   📝 Access meeting summaries with Zoom recordings within Slack.\n
    👋 Join a meeting without needing to switch back to Zoom.\n
  <https://slack.com/apps/A5GE9BMQC-zoom|More info about Zoom>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Outlook Calendar selling points
function outlookCalendarSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for Outlook Calendar*\n
    🔄 Sync calendar to Slack status so team knows when you are in a meeting, WFH or OOO.\n
   📲 View all information about a new event and respond directly to calendar invites.\n
    🔔 Get notified when meetings are starting soon.\n
    📆 Get updated when an event’s details change, and change your response as needed.\n
  <https://slack.com/apps/AFV5ECLBZ-outlook-calendar|More info about Outlook Calendar>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Google Calendar selling points
function googleCalendarSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for Google Calendar*\n
    📲 Respond directly to event invitations without leaving Slack.\n
   🔔 Get notified when an event is starting soon.\n
    👋 Join a Hangout call directly from the calendar reminder in Slack.\n
    📆 See a daily summary of events on your calendar.\n
    📤  Get updated when an event’s details change, and change your response as needed.\n
  <https://slack.com/apps/ADZ494LHY-google-calendar|More info about Google Calendar>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Gmail selling points
function gmailSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for Gmail*\n
    📲 Email chain getting too noisy? Quickly send emails to Slack and continue the conversation with teammates (attachments too!)\n
    💌 Need to coordinate a response to a customer question? Flag your teammates in Slack and use the email content to set context\n
  <https://slack.com/apps/AEFLFJR9Q-slack-for-gmail|More info about Gmail>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Salesforce selling points
function salesforceSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for Salesforce*\n
    🕵️‍♀️ Search Salesforce for accounts, opportunities and leads without leaving Slack. Quickly share details with coworkers.\n
    📲  View information about any Account, Lead, Opportunity, or Contact just by pasting a Salesforce URL in Slack.\n
  <https://slack.com/apps/A2DAS7NNR-salesforce|More info about Salesforce>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Outlook selling points
function outlookSellingPoints() {
  const params = { };

  const response = `
  *Here's selling points for Outlook*\n
    📲 Email chain getting too noisy? Quickly send emails to Slack and continue the conversation with teammates (attachments too!).\n
    💌 Need to coordinate a response to a customer question? Flag your teammates in Slack and use the email content to set context.\n
  <https://slack.com/apps/AFS3736H3-slack-for-outlook|More info about Outlook>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Tell a Chuck Norris joke
function chuckNorrisJoke() {
  axios.get('http://api.icndb.com/jokes/random')
    .then(res => {
      const joke = res.data.value.joke;

      const params = { };

      bot.postMessageToChannel(
        'ask-selly',
        `${joke}`,
        params
      );
    });
}

// Tell a Yo Mama joke
function yoMamaJoke() {
  axios.get('https://api.yomomma.info/')
    .then(res => {
      const joke = res.data.joke;

      const params = { };

      bot.postMessageToChannel(
        'ask-selly',
        `${joke}`,
        params
      );
    });
}

// Tells a random joke
function randomJoke() {
  const randomJoke = Math.floor(Math.random() * 2) + 1;
  if (randomJoke === 1) {
    chuckNorrisJoke();
  } else if (randomJoke === 2) {
    yoMamaJoke();
  }
}
