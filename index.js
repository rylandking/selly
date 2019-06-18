const express = require('express');
const bodyParser = required('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
  extended: true
}));

//Check if server is listening
app.get('/', function(req, res) {
  res.status(200).send('Hello world');
});

app.listen(port, function() {
  console.log('Yep! I\m listening on port' + port);
})

alert("Hello world!");


// Sellybot code

const slackBot = require('slackbots');
const axios = require('axios');

const bot = new slackBot ({
  token: 'xoxb-655020203907-655007633314-NhFI8ngmIWhI2Tltla8ntLHm',
  name: 'selly'
});

bot.on('start', function() {
  const params = {
    // icon_emoji: ':joy_cat:'
  };

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
  if (data.type !== 'message') {
    return;
  }

  handleMessage(data.text);
});

// Response to Data (message and data.text are related)
function handleMessage(message) {
  if (message.includes(' joke')) {
    randomJoke();
  }

  if (message.includes(' test')) {
    testMessage();
  } else if (message.includes( ' sales team')) {
    salesTeamMessage();
  } else if (message.includes( ' engineering team')) {
    engTeamMessage();
  } else if (message.includes( ' HR team')) {
    hrTeamMessage();
  } else if (message.includes( ' marketing team')) {
    marketingTeamMessage();
  } else if (message.includes( ' support team')) {
    supportTeamMessage();
  } else if (message.includes( ' /google drive')) {
    googleDriveMessage();
  } else if (message.includes( ' /github')) {
    gitHubMessage();
  } else if (message.includes( ' /trello')) {
    trelloMessage();
  } else if (message.includes( ' /zoom')) {
    zoomMessage();
  } else if (message.includes( ' /outlook calendar')) {
    outlookCalendarMessage();
  } else if (message.includes( ' /google calendar')) {
    googleCalendarMessage();
  } else if (message.includes( ' /gmail')) {
    gmailMessage();
  } else if (message.includes( ' /salesforce')) {
    salesForceMessage();
  } else if (message.includes( ' /outlook')) {
    outlookMessage();
  }



}

// Sales Team selling points
function salesTeamMessage() {
  const params = { };

  const response = `
  *Here's selling points for sales orgs*\n
    *🤝 Win More Deals*\n>Less time digging through account details and more time addressing customer needs, moving deals forward.\n
    *🏎 Respond to Opportunities Faster*\n>Quickly access documents and communication with others cutting down time to follow up with leads and put together proposals.\n>21% faster response to sales leads (<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|IDC report>).\n
    *🙌 Encourage Transparency & Collaboration *\n>Channels increase depth and breadth of info they have access to, even across verticals .\n
  <chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|More info on sales pitches>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Eng Team selling points
function engTeamMessage() {
  const params = { };

  const response = `
  *Here's selling points for eng orgs*\n
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
function hrTeamMessage() {
  const params = { };

  const response = `
  *Here's selling points for HR orgs*\n
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
function marketingTeamMessage() {
  const params = { };

  const response = `
  *Here's selling points for marketing orgs*\n
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
function supportTeamMessage() {
  const params = { };

  const response = `
  *Here's selling points for support orgs*\n
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
function googleDriveMessage() {
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
function gitHubMessage() {
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
function trelloMessage() {
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
function zoomMessage() {
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
function outlookCalendarMessage() {
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
function googleCalendarMessage() {
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
function gmailMessage() {
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
function salesForceMessage() {
  const params = { };

  const response = `
  *Here's selling points for Salesforce*\n
    🕵️‍♀️ Search Salesforce for accounts, opportunities and leads without leaving Slack. Quickly share details with coworkers.\n
    📲  View information about any Account, Lead, Opportunity, or Contact just by pasting a Salesforce URL in Slack.\n
  <https://slack.com/apps/A2DAS7NNR-salesforce|More info about Salesforce>\n
  `
  bot.postMessageToChannel(
    'ask-selly',
    `${response}`,
    params
  );
}

// Outlook selling points
function outlookMessage() {
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

// This is a Test Message
function testMessage() {
  const params = { };

  const response = `
  *TITLE*\n
    *1️⃣ Title1*\n>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.\n
    *2️⃣ Title2*\n>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n
    *3️⃣ Title3*\n>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\n
  <https://surftriplist.com|Learn more>
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

      const params = {
        // icon_emoji: ':joy_cat:'
      };

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

      const params = {
        // icon_emoji: ':joy_cat:'
      };

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
