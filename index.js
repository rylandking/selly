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
  token: 'TOKEN',
  name: 'selly'
});

bot.on('start', function() {
  const params = {  };

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
  var dropboxKeywords = ["dropbox"];
  var oneDriveKeywords = ["onedrive"];
  var boxKeywords = ["box"];
  var webexKeywords = ["webex", "webex meetings"];
  var goToMeetingKeywords = ["gotomeeting", "go to meeting", "g2m"];
  var asanaKeywords = ["asana"];
  var slackFoundryKeywords = ["slack foundry"];
  var zendeskKeywords = ["zendesk"];
  var twitterKeywords = ["twitter"];
  var pollyKeywords = ["polly"];
  var workastKeywords = ["workast"];
  var zapierKeywords = ["zapier"];
  var bitBucketKeywords = ["bitbucket", "bit bucket"];
  var jiraKeywords = ["jira"];

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
  var dropboxCheck = dropboxKeywords.some(el => message.includes(el));
  var oneDriveCheck = oneDriveKeywords.some(el => message.includes(el));
  var boxCheck = boxKeywords.some(el => message.includes(el));
  var webexCheck = webexKeywords.some(el => message.includes(el));
  var goToMeetingCheck = goToMeetingKeywords.some(el => message.includes(el));
  var asanaCheck = asanaKeywords.some(el => message.includes(el));
  var slackFoundryCheck = slackFoundryKeywords.some(el => message.includes(el));
  var zendeskCheck = zendeskKeywords.some(el => message.includes(el));
  var twitterCheck = twitterKeywords.some(el => message.includes(el));
  var pollyCheck = pollyKeywords.some(el => message.includes(el));
  var workastCheck = workastKeywords.some(el => message.includes(el));
  var zapierCheck = zapierKeywords.some(el => message.includes(el));
  var bitBucketCheck = bitBucketKeywords.some(el => message.includes(el));
  var jiraCheck = jiraKeywords.some(el => message.includes(el));

  // If ___Check == true, respond with the relevant selling points
  if (jokeCheck == true) {
    randomJoke();
  } else if (salesforceCheck == true) {
    salesforceReply();
  } else if (salesCheck == true) {
    salesReply();
  } else if (engCheck == true) {
    engReply();
  } else if (hrCheck == true) {
    hrReply();
  } else if (marketingCheck == true) {
    marketingReply();
  } else if (supportCheck == true) {
    supportReply();
  } else if (googleDriveCheck == true) {
    googleDriveReply();
  } else if (gitHubCheck == true) {
    gitHubReply();
  } else if (trelloCheck == true) {
    trelloReply();
  } else if (zoomCheck == true) {
    zoomReply();
  } else if (outlookCalendarCheck == true) {
    outlookCalendarReply();
  } else if (googleCalendarCheck == true) {
    googleCalendarReply();
  } else if (gmailCheck == true) {
    gmailReply();
  } else if (outlookCheck == true) {
    outlookReply();
  } else if (dropboxCheck == true) {
    dropboxReply();
  } else if (oneDriveCheck == true) {
    oneDriveReply();
  } else if (boxCheck == true) {
    boxReply();
  } else if (webexCheck == true) {
    webexReply();
  } else if (goToMeetingCheck == true) {
    goToMeetingReply();
  } else if (asanaCheck == true) {
    asanaReply();
  } else if (slackFoundryCheck == true) {
    slackFoundryReply();
  } else if (zendeskCheck == true) {
    zendeskReply();
  } else if (twitterCheck == true) {
    twitterReply();
  } else if (pollyCheck == true) {
    pollyReply();
  } else if (workastCheck == true) {
    workastReply();
  } else if (zapierCheck == true) {
    zapierReply();
  } else if (bitBucketCheck == true) {
    bitBucketReply();
  } else if (jiraCheck == true) {
    jiraReply();
  } else {
    unknownKeywordsReply();
  }
}

// Selly's reply messages
const unknownKeywordsHelpMessage = `
*🤷‍♀️ Hmm, I don't recognize what you're looking for.*\n
Try another keyword or phrase and I'll do my best to get you your selling points.\n
If I don't find them, please <mailto:helloryland@gmail.com|email me> with the keyword you're searching for. I'll add it so I can help you in the future.💪\n
Trying my best,\n
Selly 🧞‍♀️
`;

const salesMessage = `
*Here's selling points for sales teams*\n
  *🤝 Win More Deals*\n>Less time digging through account details and more time addressing customer needs, moving deals forward.\n
  *🏎 Respond to Opportunities Faster*\n>Quickly access documents and communication with others cutting down time to follow up with leads and put together proposals.\n>21% faster response to sales leads (<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|IDC report>).\n
  *🙌 Encourage Transparency & Collaboration *\n>Channels increase the depth and breadth of information sales teams have access to, even across verticals .\n
<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|More info on sales pitches>\n
`;

const engMessage = `
*Here's selling points for eng teams*\n
  *🏎 Speeds Up Development*\n>Centralized tools, automated workflows, and reduced context switching between applications result in more products and services delivered on time.\n>24% increase in features delivered on time (<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|IDC report>).\n
  *🛠 Automates Workflows with Integrations*\n>Jira and GitHub integrations allow developers to handle non-code work within Slack. Less time spent switching between applications.\n
  *🐛 Fix Bugs Faster*\n>Centralizes feedback and increases discoverability of relevant info. Engineers get context needed to fix bugs more quickly and accurately.\n
<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|More info on eng pitches>\n
`;

const hrMessage = `
*Here's selling points for HR teams*\n
  *🕵️‍♀️ Recruit More Effectively*\n>Move candidates through recruiting pipeline more effectively with integrations.\n
  *👨‍💻 Onboard More Quickly*\n>New employees quickly get up to speed with all important info and communication accessible in channel histories.\n>24% faster to reach full employee productivity (<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|IDC report>).\n
  *🥳 Happier Employees Over Time*\n>Increased access to cross-vertical teams helps facilitate culture across the company. Allows everyone who needs to be involved to be collaborating and accessible.\n
<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|More info on HR pitches>\n
`;

const marketingMessage = `
*Here's selling points for marketing teams*\n
  *⏱ Reduce Approval Times*\n>Less time budget approvals or creative reviews, which means quicker campaign cycles and in turn more campaigns per year.\n>16% faster execution of marking campaigns (<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|IDC report>).\n
  *🙌 Improves Collaboration with External Agencies*\n>Less time asking for latest versions with one historical record for every campaign shared by all involved (even external partners!).\n
<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|More info on marketing pitches>\n
`;

const supportMessage = `
*Here's selling points for support teams*\n
  *🤸‍♂️ Resolve More Tickets*\n>Use integrations to triage issues faster, monitor social media and even respond to customer right from Slack.\n>31% average reduction in ticket resolution time (<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|IDC report>).\n
  *💌 Resolve Tickets More Effectively*\n>Use the collective knowledge base of Slack’s channels to find and surface the best info without ever switching windows.\n
<chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://a.slack-edge.com/202df/marketing/downloads/resources/rebrand/IDC_The_Business_Value_of_Slack.pdf|More info on support pitches>\n
`;

const googleDriveMessage = `
*Here's selling points for Google Drive*\n
  🔐 Grant access to files that others want to view without switching windows.\n
  🔔 Get notifications when someone leaves a comment or suggestion, or shares a doc with you.\n
<https://slack.com/apps/A6NL8MJ6Q-google-drive|More info about Google Drive>\n
`;

const gitHubMessage = `
*Here's selling points for Github*\n
  📲 Bring your code directly into the conversations you care about within Slack to improve collaboration.\n
  🛠 Take actions directly from your Slack convo on common tasks like closing and reopening issues and pull requests.\n
  🔔 Get updates on what’s happening within your repository (like commits, pull requests, issues, reviews, etc) in a channel that doesn’t clutter your daily comms.\n
<https://slack.com/apps/A8GBNUWU8-github|More info about Github>\n
`;

const trellMessage = `
*Here's selling points for Trello*\n
  🔐 Allow team to cards and boards in one click without needing to switch windows.\n
  📲 Join Trello cards, change due dates, subscribe to cards and lots more right from Slack.\n
  🔐 Allow team to cards and boards in one click without needing to switch windows.\n
<https://slack.com/apps/A074YH40Z-trello|More info about Trello>\n
`;

const zoomMessage = `
*Here's selling points for Zoom*\n
  🎥 Start an instant meeting without ever switching back to Zoom (even give it a topic!).\n
  📝 Access meeting summaries with Zoom recordings within Slack.\n
  👋 Join a meeting without needing to switch back to Zoom.\n
<https://slack.com/apps/A5GE9BMQC-zoom|More info about Zoom>\n
`;

const outlookCalendarMessage = `
*Here's selling points for Outlook Calendar*\n
  🔄 Sync calendar to Slack status so team knows when you are in a meeting, WFH or OOO.\n
  📲 View all information about a new event and respond directly to calendar invites.\n
  🔔 Get notified when meetings are starting soon.\n
  📆 Get updated when an event’s details change, and change your response as needed.\n
<https://slack.com/apps/AFV5ECLBZ-outlook-calendar|More info about Outlook Calendar>\n
`;

const googleCalendarMessage = `
*Here's selling points for Google Calendar*\n
  📲 Respond directly to event invitations without leaving Slack.\n
  🔔 Get notified when an event is starting soon.\n
  👋 Join a Hangout call directly from the calendar reminder in Slack.\n
  📆 See a daily summary of events on your calendar.\n
  📤  Get updated when an event’s details change, and change your response as needed.\n
<https://slack.com/apps/ADZ494LHY-google-calendar|More info about Google Calendar>\n
`;

const gmailMessage = `
*Here's selling points for Gmail*\n
  📲 Email chain getting too noisy? Quickly send emails to Slack and continue the conversation with teammates (attachments too!)\n
  💌 Need to coordinate a response to a customer question? Flag your teammates in Slack and use the email content to set context\n
<https://slack.com/apps/AEFLFJR9Q-slack-for-gmail|More info about Gmail>\n
`;

const salesforceMessage = `
*Here's selling points for Salesforce*\n
  🕵️‍♀️ Search Salesforce for accounts, opportunities and leads without leaving Slack. Quickly share details with coworkers.\n
  📲  View information about any Account, Lead, Opportunity, or Contact just by pasting a Salesforce URL in Slack.\n
<https://slack.com/apps/A2DAS7NNR-salesforce|More info about Salesforce>\n
`;

const outlookMessage = `
*Here's selling points for Outlook*\n
  📲 Email chain getting too noisy? Quickly send emails to Slack and continue the conversation with teammates (attachments too!).\n
  💌 Need to coordinate a response to a customer question? Flag your teammates in Slack and use the email content to set context.\n
<https://slack.com/apps/AFS3736H3-slack-for-outlook|More info about Outlook>\n
`;

const dropboxMessage = `
*Here's selling points for Dropbox*\n
  🕵️‍♀️Search and share Dropbox files while you’re in conversation by never having to leave Slack.\n
  📲 Import Dropbox files into Slack so you can quickly share your work, get feedback from stakeholders and collaborate with your team.\n
  🔁 Imported files are automatically updated when the file is updated in Dropbox. Everything stays in sync.\n
<https://slack.com/apps/A0F82E5R8-dropbox-legacy|More info about Dropbox>\n
`;

const oneDriveMessage = `
*Here's selling points for OneDrive (Microsoft)*\n
  🕵️‍♀️Search and share OneDrive files while you’re in conversation by never having to leave Slack.\n
  📲 Import OneDrive and SharePoint files into Slack so you can quickly share your work, get feedback \n
  🔁 Files in OneDrive and SharePoint stay in sync — whenever you re-share the file, Slack will check for changes.\n
<https://slack.com/apps/A53TM6XA9-microsoft-onedrive|More info about OneDrive (Microsoft)>\n
`;

const boxMessage = `
*Here's selling points for Box*\n
  🕵️‍♀️Search and share Box files while you’re in conversation by never having to leave Slack.\n
  📲 Import Box files into Slack so you can quickly share your work, get feedback from stakeholders and collaborate with your team.\n
  🔁 Imported files are automatically updated when the file is updated in Box. Everything stays in sync.\n
<http://httpsslack.com/apps/A0F82E57C-box|More info about Box>\n
`;

const webexMessage = `
*Here's selling points for Webex Meetings (Cisco)*\n
  📲 Email chain getting too noisy? Quickly send emails to Slack and continue the conversation with teammates (attachments too!).\n
  💌 Need to coordinate a response to a customer question? Flag your teammates in Slack and use the email content to set context.\n
<https://slack.com/apps/A5P5FDK33-cisco-webex-meetings|More info about Webex Meetings (Cisco)>\n
`;

const goToMeetingMessage = `
*Here's selling points for GoToMeeting*\n
  🎥 Easily turn any Slack conversation on your desktop or mobile device into a face-to-face video meeting.\n
  👨‍💻 No wasting time switching windows away from the conversation. Just type /g2m or click the ‘phone’ button.\n
  📲 Everyone invited to the GoToMeeting can join right from within the conversation in Slack. They are provided with all the info they need join (phone numbers, access code, links).\n
  📊 After the meeting is over, you can open a post meeting poll for feedback to improve collaboration between teammates.\n
<https://slack.com/apps/A6WB39AJC-gotomeeting|More info about GoToMeeting>\n
`;

const asanaMessage = `
*Here's selling points for Asana*\n
  📤 Create new tasks in Asana—without leaving the conversation in Slack, by typing ‘/asana create’.\n
  🛠 Take action on tasks within your Slack convo. You can see the task details, complete the task, change the assignee and/or due date, add it to a project, or open it in Asana.\n
  🔔 Keep your convos from getting cluttered with notifications by link Asana to a specific channel (that’s separate from your day-to-day communication) where you can get notifications for tasks assigned to you and for tasks you’re following.\n
<https://slack.com/apps/AA16LBCH2-asana|More info about Asana>\n
`;

const slackFoundryMessage = `
*Here's selling points for Slack Foundry*\n
  👩‍🏫 Slack Foundry is an interactive training app made by Slack. It contains three tutorials to help everyone on your team get the most out of Slack and our integrations.\n
  🎒Team members new to Slack can learn the basics of communication in Slack with — Getting Started with Slack.\n
  👨‍💻 Team members looking to save time and find information faster in Slack can take the tutorial — Working in Slack.\n
  👩‍🔬Team members who will be Slack Admins can learn how to structure workspace settings and preferences that will shape how to company communicates with — Being a Slack Admin.\n
<https://slack.com/apps/AC8R6D6JY-slack-foundry|More info about Slack Foundry>\n
`;

const zendeskMessage = `
*Here's selling points for Zendesk*\n
  📲 Zendesk is a simple system for tracking, prioritizing, and solving customer support tickets.\n
  📤 Create tickets and add internal comments without having to tab back and forth between an email request and Zendesk.\n
  🔔 Get real-time notifications on new and updated tickets delivered to a Slack channel that’s separate from your day-to-day communication so your important communication spaces never get cluttered.\n
<https://slack.com/apps/A9WFQ3M0B-zendesk|More info about Zendesk>\n
`;

const twitterMessage = `
*Here's selling points for Twitter*\n
  📲 Expand shared Twitter URLs so that you can have a conversation around the the full tweet and attached media without having to toggle between Twitter and email.\n
  🔔 Easily track what’s happening with tweets that are sent to/from a Twitter account all from a specific Slack channel allowing all stakeholders to stay up-to-date on what’s happening in the Twitter sphere.\n
<https://slack.com/apps/A0F7XDW93-twitter|More info about Twitter>\n
`;

const pollyMessage = `
*Here's selling points for Polly*\n
  👫 Thousands of teams use Polly.\n
  📊 Survey your teammates with zero friction and boost participation by over 30% compared to normal email or web-based surveys.\n
  📲 Create your own surveys in minutes, grab a survey template from the Polly library or get quick organizational insights all without need to tab away from the convos in Slack.\n
  👻 Anonymous voting, hiding results, multi-vote, add options, and 8 question types.\n
  📆 Scheduled and recurring polls/surveys along with automated reminders.\n\n

  👩‍💼 HR/People Ops use cases — Recurring pulse surveys, Company-wide engagement surveys, Onboarding feedback from new hires.\n
  🛠 Product & Engineering use cases — Asynchronous daily standups, Sprint retrospectives, Mid-sprint check in, Product NPS.\n
  🎟 Event/Meeting management use cases — Meeting prep, All-hands meeting feedback, Post-event attendee feedback.\n
<https://slack.com/apps/A04E6JX41-polly|More info about Polly>\n
`;

const workastMessage = `
*Here's selling points for Workast*\n
  📲 Create tasks when the conversation is happening with /todo (no more toggling between windows).\n
  🛠 Instantly assign tasks and set due dates to keep track of teamwork all within the Slack conversation.\n
<https://slack.com/apps/A0HBTUUPK-workast|More info about Workast>\n
`;

const zapierMessage = `
*Here's selling points for Zapier*\n
  🔁 Zapier connects Slack and the other apps you use during your day.\n
  📲 Moves the information you use in your everyday apps into Slack so you and your team can use, track or converse about it right from where the conversation happens.\n\n

  👩‍💼 Sales examples — Bring new lead opportunities and details (Salesforce and tons more) into a specific Slack channel for Sales reps to quickly claim and connect with.\n
  👩‍🏫 Support examples — Post new support tickets or social media mentions into a specific Slack channel for Support team to track, claim and respond to.\n
📦 Ecommerce examples — Post details of new orders from your eCommerce store (Shopify, BigCommerce, WooCommerce, + more) to stay on top orders.\n
🛠 Project Management — Move important tasks straight from a Slack conversation into a project management app (Asana, Trello, Basecamp) when you star a message.\n
<https://slack.com/apps/A024R9PQM-zapier|More info about Zapier>\n
`;

const bitBucketMessage = `
*Here's selling points for Bitbucket (Cloud)*\n
  📲 Create a pull request from a recently pushed branch without ever leaving the conversation in your Slack channel.\n
  👋 Merge, comment and (kindly) nudge reviewers on pull requests right from Slack.\n
  🔔Keep your conversations uncluttered from notifications by piping Bitbucket notifications into their own specific channel that your team can use to stay up-to-date.\n
  🛠 Share code examples with inline contextual code snippets so that your team members can converse about code and PRs without needing to switch windows.\n
  🔁 Turn any Slack message into a Bitbucket comment so your Bitbucket PRs always have the most up-to-date info.\n
  ⏯ Re-run a failed build pipeline with one click right from the relevant Slack notification.\n
<https://slack.com/apps/A8W8QLZD1-bitbucket-cloud|More info about Bitbucket (Cloud)>\n
`;

const jiraMessage = `
*Here's selling points for JIRA Cloud*\n
  📲 Create and assign JIRA tickets directly from your conversation about the issue in Slack.\n
  🔔 Stay up-to-date on all new/updated JIRA tickets (while keeping your communication space uncluttered) by having notifications push to a specific Slack channel.\n
  📝 JIRA tickets show up in Slack with preview information which enables important conversations to take place without needing to toggle back and forth between JIRA and an email. \n
  🔁 Connecting JIRA projects to Slack is super quick and easy helping to keep you and your team in sync and up-to-date.\n
<https://slack.com/apps/A2RPP3NFR-jira-cloud|More info about JIRA Cloud>\n
`;

// Unknown Keyword Response
function unknownKeywordsReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${unknownKeywordsHelpMessage}`,
    params
  );
}

// Sales Team reply
function salesReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${salesMessage}`,
    params
  );
}

// Eng Team reply
function engReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${engMessage}`,
    params
  );
}

// HR Team reply
function hrReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${hrMessage}`,
    params
  );
}

// Marketing Team reply
function marketingReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${marketingMessage}`,
    params
  );
}

// Support Team reply
function supportReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${supportMessage}`,
    params
  );
}

// Google Drive reply
function googleDriveReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${googleDriveMessage}`,
    params
  );
}

// Github reply
function gitHubReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${gitHubMessage}`,
    params
  );
}

// Trello reply
function trelloReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${trellMessage}`,
    params
  );
}

// Zoom reply
function zoomReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${zoomMessage}`,
    params
  );
}

// Outlook Calendar reply
function outlookCalendarReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${outlookCalendarMessage}`,
    params
  );
}

// Google Calendar reply
function googleCalendarReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${googleCalendarMessage}`,
    params
  );
}

// Gmail reply
function gmailReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${gmailMessage}`,
    params
  );
}

// Salesforce reply
function salesforceReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${salesforceMessage}`,
    params
  );
}

// Outlook reply
function outlookReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${outlookMessage}`,
    params
  );
}

// Dropbox reply
function dropboxReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${dropboxMessage}`,
    params
  );
}

// OneDrive reply
function oneDriveReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${oneDriveMessage}`,
    params
  );
}

// Box reply
function boxReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${boxMessage}`,
    params
  );
}

// Webex reply
function webexReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${webexMessage}`,
    params
  );
}

// GoToMeeting reply
function goToMeetingReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${goToMeetingMessage}`,
    params
  );
}

// Asana reply
function asanaReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${asanaMessage}`,
    params
  );
}

// Slack Foundry reply
function slackFoundryReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${slackFoundryMessage}`,
    params
  );
}

// Zendesk reply
function zendeskReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${zendeskMessage}`,
    params
  );
}

// Twitter reply
function twitterReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${twitterMessage}`,
    params
  );
}

// Polly reply
function pollyReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${pollyMessage}`,
    params
  );
}

// Workast reply
function workastReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${workastMessage}`,
    params
  );
}

// Zapier reply
function zapierReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${zapierMessage}`,
    params
  );
}

// BitBucket reply
function bitBucketReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${bitBucketMessage}`,
    params
  );
}

// JIRA reply
function jiraReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${jiraMessage}`,
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
