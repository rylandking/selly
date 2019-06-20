// Express hosting
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
  token: 'xoxb-655020203907-655007633314-kb8AQcXjdJskUvXU9UcGSAk9',
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

  var jiraIntegrationKeywords = ["jira integration"];
  var loomKeywords = ["loom"];
  var quipKeywords = ["quip"];
  var adobeCreativeKeywords = ["adobe creative"];
  var smartsheetKeywords = ["smartsheet"];
  var rocketbookKeywords = ["rocketbook"];
  var weTransferKeywords = ["wetransfer"];
  var karmabotKeywords = ["karmabot"];
  var olaphKeywords = ["olaph"];
  var delightedKeywords = ["delighted"];
  var allyKeywords = ["ally"];
  var hiveKeywords = ["hive"];
  var voiceaKeywords = ["voicea"];
  var sharedBoxKeywords = ["sharedbox"];
  var paymoKeywords = ["paymo"];
  var incidentKeywords = ["incident"];
  var landriaKeywords = ["landria"];
  var threadsKeywords = ["threads"];
  var watchtowerKeywords = ["watchtower"];
  var indemandlyKeywords = ["indemandly"];
  var interbotKeywords = ["interbot"];
  var standuplyKeywords = ["standuply"];
  var kyberKeywords = ["kyber"];
  var driftKeywords = ["drift"];
  var statsbotKeywords = ["statsbot"];
  var surveyMonkeyKeywords = ["surveymonkey"];
  var troopsKeywords = ["troops"];
  var obieKeywords = ["obie"];
  var anyDoKeywords = ["any do"];
  var revealKeywords = ["reveal"];
  var kipwiseKeywords = ["kipwise"];
  var hubspotKeywords = ["hubspot"];
  var hubspotBlogsKeywords = ["hubspot blog"];
  var automateIOKeywords = ["automate io"];
  var attentiveKeywords = ["attentive"];
  var visibleVCKeywords = ["visible"];
  var translateKeywords = ["translate"];
  var iftttKeywords = ["ifttt"];
  var inVisionAppKeywords = ["invision"];
  var inVisionStudioShareKeywords = ["invision studio"];
  var googleHangoutsKeywords = ["google hangouts"];
  var meekanKeywords = ["meekan"];
  var blueJeansKeywords = ["blue jeans"];
  var donutKeywords = ["donut"];
  var workbotKeywords = ["workbot"];
  var oneBarKeywords = ["one bar"];
  var newRelicKeywords = ["new relic"];
  var crashlyticsKeywords = ["crashlytics"];
  var amplitudeKeywords = ["amplitude"];
  var arcKeywords = ["arc"];
  var closingBellKeywords = ["closing bell"];
  var kiwiKeywords = ["kiwi"];
  var appearInKeywords = ["appear in"];
  var skypeKeywords = ["skype"];
  var pasteKeywords = ["paste"];
  var intercomKeywords = ["intercom"];
  var halpKeywords = ["halp"];
  var freshdeskKeywords = ["freshdesk"];
  var typeformKeywords = ["typeform"];
  var smallchatKeywords = ["smallchat"];
  var chatlioKeywords = ["chatlio"];
  var helpScoutKeywords = ["help scout"];
  var guruKeywords = ["guru"];
  var liveChatKeywords = ["live chat"];
  var cloudAppKeywords = ["cloud app"];
  var yodelKeywords = ["yodel"];
  var crispKeywords = ["crisp"];
  var zeplinKeywords = ["zeplin"];
  var dropboxPaperKeywords = ["dropbox paper"];
  var lucidChartKeywords = ["lucid chart"];
  var notionKeywords = ["notion"];
  var canvaKeywords = ["canva"];
  var moqupsKeywords = ["moqups"];
  var marvelKeywords = ["marvel"];
  var sketchboardKeywords = ["sketchboard"];
  var abstractKeywords = ["abstract"];
  var muralKeywords = ["mural"];
  var dribbbleKeywords = ["dribbble"];
  var wireframeProKeywords = ["wireframe pro"];
  var sketchTogetherKeywords = ["sketch together"];
  var sentryKeywords = ["sentry"];
  var slackDeveloperToolsKeywords = ["slack developer tools"];
  var stackOverflowKeywords = ["stack overflow"];
  var visualStudioKeywords = ["visual studio"];
  var circleCIKeywords = ["circle ci"];
  var pingdomKeywords = ["pingdom"];
  var rollbarKeywords = ["rollbar"];
  var bugsnagKeywords = ["bugsnag"];
  var nagiosKeywords = ["nagios"];
  var opsGenieKeywords = ["ops genie"];
  var tettraWikiKeywords = ["tettra wiki"];
  var notesKeywords = ["notes"];
  var egnyteKeywords = ["egnyte"];
  var frameIOKeywords = ["frame io"];
  var helloSignKeywords = ["hello sign"];
  var hpPrintBotKeywords = ["hp print"];
  var slimWikiKeywords = ["slim wiki"];
  var pdfFillerKeywords = ["pdf filler"];
  var highSpotKeywords = ["high spot"];
  var smashKeywords = ["smash"];
  var brandfolderKeywords = ["brandfolder"];
  var papyrsKeywords = ["papyrs"];
  var greenhouseKeywords = ["greenhouse"];
  var concurKeywords = ["concur"];
  var caviarKeywords = ["caviar"];
  var latticeKeywords = ["lattice"];
  var continuallyKeywords = ["continually"];
  var reviewBotKeywords = ["review bot"];
  var doodleBotKeywords = ["doodle"];
  var envoyKeywords = ["envoy"];
  var mondayKeywords = ["monday"];
  var harvestKeywords = ["harvest"];
  var expenseTronKeywords = ["expensetron"];
  var spokeKeywords = ["spoke"];
  var calamariKeywords = ["calamari"];
  var stripeKeywords = ["stripe"];
  var chargebeeKeywords = ["chargebee"];
  var teampayKeywords = ["teampay"];
  var zohoFlowKeywords = ["zoho flow"];
  var zohoBooksKeywords = ["zoho books"];
  var zohoExpenseKeywords = ["zoho expense"];
  var zohoCRMKeywords = ["zoho crm"];
  var rydooKeywords = ["rydoo"];
  var spendeskKeywords = ["spendesk"];
  var baremetricsKeywords = ["baremetrics"];
  var timecampKeywords = ["timecamp"];
  var coupaMessengerKeywords = ["coupa"];
  var approveSimpleKeywords = ["approve simple"];
  var abacusKeywords = ["abacus"];
  var zipBooksKeywords = ["zipbooks"];
  var confluenceKeywords = ["confluence"];
  var evernoteKeywords = ["evernote"];
  var microKeywords = ["micro"];
  var airtableKeywords = ["airtable"];
  var wrikeKeywords = ["wrike"];
  var workstreamsKeywords = ["workstreams"];
  var clickupKeywords = ["clickup"];
  var dealbotKeywords = ["dealbot"];
  var copperKeywords = ["copper"];
  var insightlyKeywords = ["insightly"];
  var olarkKeywords = ["olark"];
  var salesLoftKeywords = ["salesloft"];
  var clearbitKeywords = ["clearbit"];
  var paperTrailKeywords = ["papertrail"];
  var onePasswordKeywords = ["onepassword"];
  var updownKeywords = ["updown"];
  var uptimeKeywords = ["uptime"];
  var dbotKeywords = ["dbot"];
  var betterCloudKeywords = ["better cloud"];
  var pulsewayKeywords = ["pulseway"];
  var mcAfeeKeywords = ["mcafee"];
  var hackerOneKeywords = ["hackerone"];
  var cronitorKeywords = ["cronitor"];
  var drumKeywords = ["drum"];
  var ustreamKeywords = ["ustream"];
  var rssKeywords = ["rss"];
  var diggKeywords = ["digg"];

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

  var jiraIntegrationCheck = jiraIntegrationKeywords.some(el => message.includes(el));
  var loomCheck = loomKeywords.some(el => message.includes(el));
  var quipCheck = quipKeywords.some(el => message.includes(el));
  var adobeCreativeCheck = adobeCreativeKeywords.some(el => message.includes(el));
  var smartsheetCheck = smartsheetKeywords.some(el => message.includes(el));
  var rocketbookCheck = rocketbookKeywords.some(el => message.includes(el));
  var weTransferCheck = weTransferKeywords.some(el => message.includes(el));
  var karmabotCheck = karmabotKeywords.some(el => message.includes(el));
  var olaphCheck = olaphKeywords.some(el => message.includes(el));
  var delightedCheck = delightedKeywords.some(el => message.includes(el));
  var allyCheck = allyKeywords.some(el => message.includes(el));
  var hiveCheck = hiveKeywords.some(el => message.includes(el));
  var voiceaCheck = voiceaKeywords.some(el => message.includes(el));
  var sharedBoxCheck = sharedBoxKeywords.some(el => message.includes(el));
  var paymoCheck = paymoKeywords.some(el => message.includes(el));
  var incidentCheck = incidentKeywords.some(el => message.includes(el));
  var landriaCheck = landriaKeywords.some(el => message.includes(el));
  var threadsCheck = threadsKeywords.some(el => message.includes(el));
  var watchtowerCheck = watchtowerKeywords.some(el => message.includes(el));
  var indemandlyCheck = indemandlyKeywords.some(el => message.includes(el));
  var interbotCheck = interbotKeywords.some(el => message.includes(el));
  var standuplyCheck = standuplyKeywords.some(el => message.includes(el));
  var kyberCheck = kyberKeywords.some(el => message.includes(el));
  var driftCheck = driftKeywords.some(el => message.includes(el));
  var statsbotCheck = statsbotKeywords.some(el => message.includes(el));
  var surveyMonkeyCheck = surveyMonkeyKeywords.some(el => message.includes(el));
  var troopsCheck = troopsKeywords.some(el => message.includes(el));
  var obieCheck = obieKeywords.some(el => message.includes(el));
  var anyDoCheck = anyDoKeywords.some(el => message.includes(el));
  var revealCheck = revealKeywords.some(el => message.includes(el));
  var kipwiseCheck = kipwiseKeywords.some(el => message.includes(el));
  var hubspotCheck = hubspotKeywords.some(el => message.includes(el));
  var hubspotBlogsCheck = hubspotBlogsKeywords.some(el => message.includes(el));
  var automateIOCheck = automateIOKeywords.some(el => message.includes(el));
  var attentiveCheck = attentiveKeywords.some(el => message.includes(el));
  var visibleVCCheck = visibleVCKeywords.some(el => message.includes(el));
  var translateCheck = translateKeywords.some(el => message.includes(el));
  var iftttCheck = iftttKeywords.some(el => message.includes(el));
  var inVisionAppCheck = inVisionAppKeywords.some(el => message.includes(el));
  var inVisionStudioShareCheck = inVisionStudioShareKeywords.some(el => message.includes(el));
  var googleHangoutsCheck = googleHangoutsKeywords.some(el => message.includes(el));
  var meekanCheck = meekanKeywords.some(el => message.includes(el));
  var blueJeansCheck = blueJeansKeywords.some(el => message.includes(el));
  var donutCheck = donutKeywords.some(el => message.includes(el));
  var workbotCheck = workbotKeywords.some(el => message.includes(el));
  var oneBarCheck = oneBarKeywords.some(el => message.includes(el));
  var newRelicCheck = newRelicKeywords.some(el => message.includes(el));
  var crashlyticsCheck = crashlyticsKeywords.some(el => message.includes(el));
  var amplitudeCheck = amplitudeKeywords.some(el => message.includes(el));
  var arcCheck = arcKeywords.some(el => message.includes(el));
  var closingBellCheck = closingBellKeywords.some(el => message.includes(el));
  var kiwiCheck = kiwiKeywords.some(el => message.includes(el));
  var appearInCheck = appearInKeywords.some(el => message.includes(el));
  var skypeCheck = skypeKeywords.some(el => message.includes(el));
  var pasteCheck = pasteKeywords.some(el => message.includes(el));
  var intercomCheck = intercomKeywords.some(el => message.includes(el));
  var halpCheck = halpKeywords.some(el => message.includes(el));
  var freshdeskCheck = freshdeskKeywords.some(el => message.includes(el));
  var typeformCheck = typeformKeywords.some(el => message.includes(el));
  var smallchatCheck = smallchatKeywords.some(el => message.includes(el));
  var chatlioCheck = chatlioKeywords.some(el => message.includes(el));
  var helpScoutCheck = helpScoutKeywords.some(el => message.includes(el));
  var guruCheck = guruKeywords.some(el => message.includes(el));
  var liveChatCheck = liveChatKeywords.some(el => message.includes(el));
  var cloudAppCheck = cloudAppKeywords.some(el => message.includes(el));
  var yodelCheck = yodelKeywords.some(el => message.includes(el));
  var crispCheck = crispKeywords.some(el => message.includes(el));
  var zeplinCheck = zeplinKeywords.some(el => message.includes(el));
  var dropboxPaperCheck = dropboxPaperKeywords.some(el => message.includes(el));
  var lucidChartCheck = lucidChartKeywords.some(el => message.includes(el));
  var notionCheck = notionKeywords.some(el => message.includes(el));
  var canvaCheck = canvaKeywords.some(el => message.includes(el));
  var moqupsCheck = moqupsKeywords.some(el => message.includes(el));
  var marvelCheck = marvelKeywords.some(el => message.includes(el));
  var sketchboardCheck = sketchboardKeywords.some(el => message.includes(el));
  var abstractCheck = abstractKeywords.some(el => message.includes(el));
  var muralCheck = muralKeywords.some(el => message.includes(el));
  var dribbbleCheck = dribbbleKeywords.some(el => message.includes(el));
  var wireframeProCheck = wireframeProKeywords.some(el => message.includes(el));
  var sketchTogetherCheck = sketchTogetherKeywords.some(el => message.includes(el));
  var sentryCheck = sentryKeywords.some(el => message.includes(el));
  var slackDeveloperToolsCheck = slackDeveloperToolsKeywords.some(el => message.includes(el));
  var stackOverflowCheck = stackOverflowKeywords.some(el => message.includes(el));
  var visualStudioCheck = visualStudioKeywords.some(el => message.includes(el));
  var circleCICheck = circleCIKeywords.some(el => message.includes(el));
  var pingdomCheck = pingdomKeywords.some(el => message.includes(el));
  var rollbarCheck = rollbarKeywords.some(el => message.includes(el));
  var bugsnagCheck = bugsnagKeywords.some(el => message.includes(el));
  var nagiosCheck = nagiosKeywords.some(el => message.includes(el));
  var opsGenieCheck = opsGenieKeywords.some(el => message.includes(el));
  var tettraWikiCheck = tettraWikiKeywords.some(el => message.includes(el));
  var notesCheck = notesKeywords.some(el => message.includes(el));
  var egnyteCheck = egnyteKeywords.some(el => message.includes(el));
  var frameIOCheck = frameIOKeywords.some(el => message.includes(el));
  var helloSignCheck = helloSignKeywords.some(el => message.includes(el));
  var hpPrintBotCheck = hpPrintBotKeywords.some(el => message.includes(el));
  var slimWikiCheck = slimWikiKeywords.some(el => message.includes(el));
  var pdfFillerCheck = pdfFillerKeywords.some(el => message.includes(el));
  var highSpotCheck = highSpotKeywords.some(el => message.includes(el));
  var smashCheck = smashKeywords.some(el => message.includes(el));
  var brandfolderCheck = brandfolderKeywords.some(el => message.includes(el));
  var papyrsCheck = papyrsKeywords.some(el => message.includes(el));
  var greenhouseCheck = greenhouseKeywords.some(el => message.includes(el));
  var concurCheck = concurKeywords.some(el => message.includes(el));
  var caviarCheck = caviarKeywords.some(el => message.includes(el));
  var latticeCheck = latticeKeywords.some(el => message.includes(el));
  var continuallyCheck = continuallyKeywords.some(el => message.includes(el));
  var reviewBotCheck = reviewBotKeywords.some(el => message.includes(el));
  var doodleBotCheck = doodleBotKeywords.some(el => message.includes(el));
  var envoyCheck = envoyKeywords.some(el => message.includes(el));
  var mondayCheck = mondayKeywords.some(el => message.includes(el));
  var harvestCheck = harvestKeywords.some(el => message.includes(el));
  var expenseTronCheck = expenseTronKeywords.some(el => message.includes(el));
  var spokeCheck = spokeKeywords.some(el => message.includes(el));
  var calamariCheck = calamariKeywords.some(el => message.includes(el));
  var stripeCheck = stripeKeywords.some(el => message.includes(el));
  var chargebeeCheck = chargebeeKeywords.some(el => message.includes(el));
  var teampayCheck = teampayKeywords.some(el => message.includes(el));
  var zohoFlowCheck = zohoFlowKeywords.some(el => message.includes(el));
  var zohoBooksCheck = zohoBooksKeywords.some(el => message.includes(el));
  var zohoExpenseCheck = zohoExpenseKeywords.some(el => message.includes(el));
  var zohoCRMCheck = zohoCRMKeywords.some(el => message.includes(el));
  var rydooCheck = rydooKeywords.some(el => message.includes(el));
  var spendeskCheck = spendeskKeywords.some(el => message.includes(el));
  var baremetricsCheck = baremetricsKeywords.some(el => message.includes(el));
  var timecampCheck = timecampKeywords.some(el => message.includes(el));
  var coupaMessengerCheck = coupaMessengerKeywords.some(el => message.includes(el));
  var approveSimpleCheck = approveSimpleKeywords.some(el => message.includes(el));
  var abacusCheck = abacusKeywords.some(el => message.includes(el));
  var zipBooksCheck = zipBooksKeywords.some(el => message.includes(el));
  var confluenceCheck = confluenceKeywords.some(el => message.includes(el));
  var evernoteCheck = evernoteKeywords.some(el => message.includes(el));
  var microCheck = microKeywords.some(el => message.includes(el));
  var airtableCheck = airtableKeywords.some(el => message.includes(el));
  var wrikeCheck = wrikeKeywords.some(el => message.includes(el));
  var workstreamsCheck = workstreamsKeywords.some(el => message.includes(el));
  var clickupCheck = clickupKeywords.some(el => message.includes(el));
  var dealbotCheck = dealbotKeywords.some(el => message.includes(el));
  var copperCheck = copperKeywords.some(el => message.includes(el));
  var insightlyCheck = insightlyKeywords.some(el => message.includes(el));
  var olarkCheck = olarkKeywords.some(el => message.includes(el));
  var salesLoftCheck = salesLoftKeywords.some(el => message.includes(el));
  var clearbitCheck = clearbitKeywords.some(el => message.includes(el));
  var paperTrailCheck = paperTrailKeywords.some(el => message.includes(el));
  var onePasswordCheck = onePasswordKeywords.some(el => message.includes(el));
  var updownCheck = updownKeywords.some(el => message.includes(el));
  var uptimeCheck = uptimeKeywords.some(el => message.includes(el));
  var dbotCheck = dbotKeywords.some(el => message.includes(el));
  var betterCloudCheck = betterCloudKeywords.some(el => message.includes(el));
  var pulsewayCheck = pulsewayKeywords.some(el => message.includes(el));
  var mcAfeeCheck = mcAfeeKeywords.some(el => message.includes(el));
  var hackerOneCheck = hackerOneKeywords.some(el => message.includes(el));
  var cronitorCheck = cronitorKeywords.some(el => message.includes(el));
  var drumCheck = drumKeywords.some(el => message.includes(el));
  var ustreamCheck = ustreamKeywords.some(el => message.includes(el));
  var rssCheck = rssKeywords.some(el => message.includes(el));
  var diggCheck = diggKeywords.some(el => message.includes(el));

  // If ___Check == true, respond with the relevant selling points
  if (jokeCheck == true) {
    randomJoke();
  } else if (threadsCheck == true) {
    threadsReply();
  } else if (continuallyCheck == true) {
    continuallyReply();
  } else if (salesLoftCheck == true) {
    salesLoftReply();
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
  } else if (sharedBoxCheck == true) {
    sharedBoxReply();
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
  }

  else if (jiraIntegrationCheck == true) {
   jiraIntegrationReply();
 } else if (loomCheck == true) {
   loomReply();
 } else if (quipCheck == true) {
   quipReply();
 } else if (adobeCreativeCheck == true) {
   adobeCreativeReply();
 } else if (smartsheetCheck == true) {
   smartsheetReply();
 } else if (rocketbookCheck == true) {
   rocketbookReply();
 } else if (weTransferCheck == true) {
   weTransferReply();
 } else if (karmabotCheck == true) {
   karmabotReply();
 } else if (olaphCheck == true) {
   olaphReply();
 } else if (delightedCheck == true) {
   delightedReply();
 } else if (allyCheck == true) {
   allyReply();
 } else if (hiveCheck == true) {
   hiveReply();
 } else if (voiceaCheck == true) {
   voiceaReply();
 } else if (paymoCheck == true) {
   paymoReply();
 } else if (incidentCheck == true) {
   incidentReply();
 } else if (landriaCheck == true) {
   landriaReply();
 } else if (jiraCheck == true) {
   jiraReply();
 } else if (watchtowerCheck == true) {
   watchtowerReply();
 } else if (indemandlyCheck == true) {
   indemandlyReply();
 } else if (interbotCheck == true) {
   interbotReply();
 } else if (standuplyCheck == true) {
   standuplyReply();
 } else if (kyberCheck == true) {
   kyberReply();
 } else if (driftCheck == true) {
   driftReply();
 } else if (statsbotCheck == true) {
   statsbotReply();
 } else if (surveyMonkeyCheck == true) {
   surveyMonkeyReply();
 } else if (troopsCheck == true) {
   troopsReply();
 } else if (obieCheck == true) {
   obieReply();
 } else if (anyDoCheck == true) {
   anyDoReply();
 } else if (revealCheck == true) {
   revealReply();
 } else if (kipwiseCheck == true) {
   kipwiseReply();
 } else if (hubspotBlogsCheck == true) {
   hubspotBlogsReply();
 } else if (hubspotCheck == true) {
   hubspotReply();
 } else if (automateIOCheck == true) {
   automateIOReply();
 } else if (attentiveCheck == true) {
   attentiveReply();
 } else if (visibleVCCheck == true) {
   visibleVCReply();
 } else if (translateCheck == true) {
   translateReply();
 } else if (iftttCheck == true) {
   iftttReply();
 } else if (inVisionStudioShareCheck == true) {
   inVisionStudioShareReply();
 } else if (inVisionAppCheck == true) {
   inVisionAppReply();
 } else if (googleHangoutsCheck == true) {
   googleHangoutsReply();
 } else if (meekanCheck == true) {
   meekanReply();
 } else if (blueJeansCheck == true) {
   blueJeansReply();
 } else if (donutCheck == true) {
   donutReply();
 } else if (workbotCheck == true) {
   workbotReply();
 } else if (oneBarCheck == true) {
   oneBarReply();
 } else if (newRelicCheck == true) {
   newRelicReply();
 } else if (crashlyticsCheck == true) {
   crashlyticsReply();
 } else if (amplitudeCheck == true) {
   amplitudeReply();
 } else if (arcCheck == true) {
   arcReply();
 } else if (closingBellCheck == true) {
   closingBellReply();
 } else if (kiwiCheck == true) {
   kiwiReply();
 } else if (appearInCheck == true) {
   appearInReply();
 } else if (skypeCheck == true) {
   skypeReply();
 } else if (pasteCheck == true) {
   pasteReply();
 } else if (intercomCheck == true) {
   intercomReply();
 } else if (halpCheck == true) {
   halpReply();
 } else if (freshdeskCheck == true) {
   freshdeskReply();
 } else if (typeformCheck == true) {
   typeformReply();
 } else if (smallchatCheck == true) {
   smallchatReply();
 } else if (chatlioCheck == true) {
   chatlioReply();
 } else if (helpScoutCheck == true) {
   helpScoutReply();
 } else if (guruCheck == true) {
   guruReply();
 } else if (liveChatCheck == true) {
   liveChatReply();
 } else if (cloudAppCheck == true) {
   cloudAppReply();
 } else if (yodelCheck == true) {
   yodelReply();
 } else if (crispCheck == true) {
   crispReply();
 } else if (zeplinCheck == true) {
   zeplinReply();
 } else if (dropboxPaperCheck == true) {
   dropboxPaperReply();
 } else if (lucidChartCheck == true) {
   lucidChartReply();
 } else if (notionCheck == true) {
   notionReply();
 } else if (canvaCheck == true) {
   canvaReply();
 } else if (moqupsCheck == true) {
   moqupsReply();
 } else if (marvelCheck == true) {
   marvelReply();
 } else if (sketchboardCheck == true) {
   sketchboardReply();
 } else if (abstractCheck == true) {
   abstractReply();
 } else if (muralCheck == true) {
   muralReply();
 } else if (dribbbleCheck == true) {
   dribbbleReply();
 } else if (wireframeProCheck == true) {
   wireframeProReply();
 } else if (sketchTogetherCheck == true) {
   sketchTogetherReply();
 } else if (sentryCheck == true) {
   sentryReply();
 } else if (slackDeveloperToolsCheck == true) {
   slackDeveloperToolsReply();
 } else if (stackOverflowCheck == true) {
   stackOverflowReply();
 } else if (visualStudioCheck == true) {
   visualStudioReply();
 } else if (circleCICheck == true) {
   circleCIReply();
 } else if (pingdomCheck == true) {
   pingdomReply();
 } else if (rollbarCheck == true) {
   rollbarReply();
 } else if (bugsnagCheck == true) {
   bugsnagReply();
 } else if (nagiosCheck == true) {
   nagiosReply();
 } else if (opsGenieCheck == true) {
   opsGenieReply();
 } else if (tettraWikiCheck == true) {
   tettraWikiReply();
 } else if (notesCheck == true) {
   notesReply();
 } else if (egnyteCheck == true) {
   egnyteReply();
 } else if (frameIOCheck == true) {
   frameIOReply();
 } else if (helloSignCheck == true) {
   helloSignReply();
 } else if (hpPrintBotCheck == true) {
   hpPrintBotReply();
 } else if (slimWikiCheck == true) {
   slimWikiReply();
 } else if (pdfFillerCheck == true) {
   pdfFillerReply();
 } else if (highSpotCheck == true) {
   highSpotReply();
 } else if (smashCheck == true) {
   smashReply();
 } else if (brandfolderCheck == true) {
   brandfolderReply();
 } else if (papyrsCheck == true) {
   papyrsReply();
 } else if (greenhouseCheck == true) {
   greenhouseReply();
 } else if (concurCheck == true) {
   concurReply();
 } else if (caviarCheck == true) {
   caviarReply();
 } else if (latticeCheck == true) {
   latticeReply();
 } else if (reviewBotCheck == true) {
   reviewBotReply();
 } else if (doodleBotCheck == true) {
   doodleBotReply();
 } else if (envoyCheck == true) {
   envoyReply();
 } else if (mondayCheck == true) {
   mondayReply();
 } else if (harvestCheck == true) {
   harvestReply();
 } else if (expenseTronCheck == true) {
   expenseTronReply();
 } else if (spokeCheck == true) {
   spokeReply();
 } else if (calamariCheck == true) {
   calamariReply();
 } else if (stripeCheck == true) {
   stripeReply();
 } else if (chargebeeCheck == true) {
   chargebeeReply();
 } else if (teampayCheck == true) {
   teampayReply();
 } else if (zohoFlowCheck == true) {
   zohoFlowReply();
 } else if (zohoBooksCheck == true) {
   zohoBooksReply();
 } else if (zohoExpenseCheck == true) {
   zohoExpenseReply();
 } else if (zohoCRMCheck == true) {
   zohoCRMReply();
 } else if (rydooCheck == true) {
   rydooReply();
 } else if (spendeskCheck == true) {
   spendeskReply();
 } else if (baremetricsCheck == true) {
   baremetricsReply();
 } else if (timecampCheck == true) {
   timecampReply();
 } else if (coupaMessengerCheck == true) {
   coupaMessengerReply();
 } else if (approveSimpleCheck == true) {
   approveSimpleReply();
 } else if (abacusCheck == true) {
   abacusReply();
 } else if (zipBooksCheck == true) {
   zipBooksReply();
 } else if (confluenceCheck == true) {
   confluenceReply();
 } else if (evernoteCheck == true) {
   evernoteReply();
 } else if (microCheck == true) {
   microReply();
 } else if (airtableCheck == true) {
   airtableReply();
 } else if (wrikeCheck == true) {
   wrikeReply();
 } else if (workstreamsCheck == true) {
   workstreamsReply();
 } else if (clickupCheck == true) {
   clickupReply();
 } else if (dealbotCheck == true) {
   dealbotReply();
 } else if (copperCheck == true) {
   copperReply();
 } else if (insightlyCheck == true) {
   insightlyReply();
 } else if (olarkCheck == true) {
   olarkReply();
 } else if (clearbitCheck == true) {
   clearbitReply();
 } else if (paperTrailCheck == true) {
   paperTrailReply();
 } else if (onePasswordCheck == true) {
   onePasswordReply();
 } else if (updownCheck == true) {
   updownReply();
 } else if (uptimeCheck == true) {
   uptimeReply();
 } else if (dbotCheck == true) {
   dbotReply();
 } else if (betterCloudCheck == true) {
   betterCloudReply();
 } else if (pulsewayCheck == true) {
   pulsewayReply();
 } else if (mcAfeeCheck == true) {
   mcAfeeReply();
 } else if (hackerOneCheck == true) {
   hackerOneReply();
 } else if (cronitorCheck == true) {
   cronitorReply();
 } else if (drumCheck == true) {
   drumReply();
 } else if (ustreamCheck == true) {
   ustreamReply();
 } else if (rssCheck == true) {
   rssReply();
 } else if (diggCheck == true) {
   diggReply();
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

const trelloMessage = `
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


///////////////
// NEW MESSAGES
///////////////

const jiraIntegrationMessage = `
*Here's selling points for JIRA Integration+*\n
  📲 Create and assign JIRA tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0Z9RG265-jira-integration|More info about JIRA Integration+>\n
`;

const loomMessage = `
*Here's selling points for Loom*\n
  📲 Create and assign JIRA tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A9G1TH4S2-loom|More info about Loom>\n
`;

const quipMessage = `
*Here's selling points for Quip*\n
  📲 Create and assign JIRA tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0M22HR1P-quip|More info about Quip>\n
`;

const adobeCreativeMessage = `
*Here's selling points for Adobe Creative Cloud*\n
  📲 Create and assign JIRA tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A7P35MCT0-adobe-creative-cloud|More info about Adobe Creative Cloud>\n
`;

const smartsheetMessage = `
*Here's selling points for Smartsheet*\n
  📲 Create and assign Smartsheet tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A9AESRU12-smartsheet|More info about Smartsheet>\n
`;

const rocketbookMessage = `
*Here's selling points for Rocketbook*\n
  📲 Create and assign Rocketbook tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A2RPP3NFR-jira-cloud|More info about Rocketbook>\n
`;

const weTransferMessage = `
*Here's selling points for weTransfer*\n
  📲 Create and assign weTransfer tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/AAB31CEKS-wetransfer|More info about weTransfer>\n
`;

const karmabotMessage = `
*Here's selling points for Karmabot*\n
  📲 Create and assign Karmabot tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A2RPP3NFR-jira-cloud|More info about Karmabot>\n
`;

const olaphMessage = `
*Here's selling points for Olaph*\n
  📲 Create and assign Olaph tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/ACBK40AF3-olaph|More info about Olaph>\n
`;

const delightedMessage = `
*Here's selling points for Delighted*\n
  📲 Create and assign Delighted tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A04S59T4G-delighted|More info about Delighted>\n
`;

const allyMessage = `
*Here's selling points for Ally*\n
  📲 Create and assign Ally tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A7R0YK8HW-ally|More info about Ally>\n
`;

const hiveMessage = `
*Here's selling points for Hive*\n
  📲 Create and assign Hive tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A1X4WCTD0-hive|More info about Hive>\n
`;

const voiceaMessage = `
*Here's selling points for Voicea*\n
  📲 Create and assign Voicea tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A6KANRYUS-voicea|More info about Voicea>\n
`;

const sharedBoxMessage = `
*Here's selling points for SharedBox*\n
  📲 Create and assign SharedBox tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/ABUHHCUHG-sharedbox|More info about SharedBox>\n
`;

const paymoMessage = `
*Here's selling points for Paymo*\n
  📲 Create and assign Paymo tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/AG3C73VPG-paymo|More info about Paymo>\n
`;

const incidentMessage = `
*Here's selling points for Incident*\n
  📲 Create and assign Incident tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/ABN54TZ5J-incident|More info about Incident>\n
`;

const landriaMessage = `
*Here's selling points for Landria*\n
  📲 Create and assign Landria tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/AE3Q7T0BZ-landria|More info about Landria>\n
`;

const threadsMessage = `
*Here's selling points for Threads*\n
  📲 Create and assign Threads tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A6WF338RW-threads|More info about Threads>\n
`;

const watchtowerMessage = `
*Here's selling points for Watchtower DLP*\n
  📲 Create and assign Watchtower DLP tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A2RPP3NFR-jira-cloud|More info about Watchtower DLP>\n
`;

const indemandlyMessage = `
*Here's selling points for Indemandly*\n
  📲 Create and assign Indemandly tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/ABC1XH3TN-indemandly|More info about Indemandly>\n
`;

const interbotMessage = `
*Here's selling points for interbot*\n
  📲 Create and assign interbot tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A2RPP3NFR-jira-cloud|More info about interbot>\n
`;

const standuplyMessage = `
*Here's selling points for Standuply*\n
  📲 Create and assign Standuply tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A355V71K7-standupiy|More info about Standuply>\n
`;

const kyberMessage = `
*Here's selling points for Kyber*\n
  📲 Create and assign Kyber tickets directly from your conversation about the issue in Slack.\n
<http://httpsslack.com/apps/A0EP69E58-kyber|More info about Kyber>\n
`;

const driftMessage = `
*Here's selling points for Drift*\n
  📲 Create and assign Drift tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0K07JA1H-drift|More info about Drift>\n
`;

const statsbotMessage = `
*Here's selling points for Statsbot*\n
  📲 Create and assign Statsbot tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0GP9E18S-statsbot|More info about Statsbot>\n
`;

const surveyMonkeyMessage = `
*Here's selling points for SurveyMonkey*\n
  📲 Create and assign SurveyMonkey tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A4JEUJH4M-surveymonkey|More info about SurveyMonkey>\n
`;

const troopsMessage = `
*Here's selling points for Troops (a Salesforce integration)*\n
  📲 Create and assign Troops (a Salesforce integration) tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0T3W4EAX-troops|More info about Troops (a Salesforce integration)>\n
`;

const obieMessage = `
*Here's selling points for Obie*\n
  📲 Create and assign Obie tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0ZP4FD0B-obie|More info about Obie>\n
`;

const anyDoMessage = `
*Here's selling points for Any.do*\n
  📲 Create and assign Any.do tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A3LU9DDEU-anydo|More info about Any.do>\n
`;

const revealMessage = `
*Here's selling points for Reveal (for Facebook Ads)*\n
  📲 Create and assign Reveal (for Facebook Ads) tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A2GL4FKCZ-reveal|More info about Reveal (for Facebook Ads)>\n
`;

const kipwiseMessage = `
*Here's selling points for Kipwise*\n
  📲 Create and assign Kipwise tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A7W497ADD-kipwise|More info about Kipwise>\n
`;

const hubspotMessage = `
*Here's selling points for Hubspot*\n
  📲 Create and assign Hubspot tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A9RRCCG73-hubspot|More info about Hubspot>\n
`;

const hubspotBlogsMessage = `
*Here's selling points for Hubspot Blogs*\n
  📲 Create and assign Hubspot Blogs tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0N9U712B-hubspot-blogs|More info about Hubspot Blogs>\n
`;

const growthbotMessage = `
*Here's selling points for Growthbot (by Hubspot)*\n
  📲 Create and assign Growthbot (by Hubspot) tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A1JUFE7PA-growthbot|More info about Growthbot (by Hubspot)>\n
`;

const automateIOMessage = `
*Here's selling points for Automate.io*\n
  📲 Create and assign Automate.io tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0M3SB287-automateio|More info about Automate.io>\n
`;

const attentiveMessage = `
*Here's selling points for Attentive*\n
  📲 Create and assign Attentive tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0ZBACKEU-attentive|More info about Attentive>\n
`;

const visibleVCMessage = `
*Here's selling points for Visible VC*\n
  📲 Create and assign Visible VC tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A8YM3GLUV-visible|More info about Visible VC>\n
`;

const translateMessage = `
*Here's selling points for Translate*\n
  📲 Create and assign Translate tickets directly from your conversation about the issue in Slack.\n
<http://httpsslack.com/apps/A0ZJS6Z7E-translate|More info about Translate>\n
`;

const iftttMessage = `
*Here's selling points for IFTTT*\n
  📲 Create and assign IFTTT tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A028LGAFF-ifttt|More info about IFTTT>\n
`;

const inVisionAppMessage = `
*Here's selling points for inVision App*\n
  📲 Create and assign inVision App tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A08N434LS-invision-app|More info about inVision App>\n
`;

const inVisionStudioShareMessage = `
*Here's selling points for InVision Studio Share*\n
  📲 Create and assign InVision Studio Share tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/AFJA1BLBW-invision-studio-share|More info about InVision Studio Share>\n
`;

const googleHangoutsMessage = `
*Here's selling points for Google Hangouts*\n
  📲 Create and assign Google Hangouts tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0F7YS351-google-hangouts|More info about Google Hangouts>\n
`;

const meekanMessage = `
*Here's selling points for Meekan*\n
  📲 Create and assign Meekan tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0G51AT60-meekan-scheduling|More info about Meekan>\n
`;

const blueJeansMessage = `
*Here's selling points for BlueJeans*\n
  📲 Create and assign BlueJeans tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/AGC34MF1T-bluejeans|More info about BlueJeans>\n
`;

const donutMessage = `
*Here's selling points for Donut*\n
  📲 Create and assign Donut tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A11MJ51SR-donut|More info about Donut>\n
`;

const workbotMessage = `
*Here's selling points for Workbot (by Workato)*\n
  📲 Create and assign Workbot (by Workato) tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0HVDHQ8Z-workbot|More info about Workbot (by Workato)>\n
`;

const oneBarMessage = `
*Here's selling points for OneBar*\n
  📲 Create and assign OneBar tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A6U5NG15Z-onebar|More info about OneBar>\n
`;

const newRelicMessage = `
*Here's selling points for New Relic*\n
  📲 Create and assign New Relic tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0F827KK2-new-relic|More info about New Relic>\n
`;

const crashlyticsMessage = `
*Here's selling points for Crashlytics*\n
  📲 Create and assign Crashlytics tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0F81R5CP-crashlytics|More info about Crashlytics>\n
`;

const amplitudeMessage = `
*Here's selling points for Amplitude*\n
  📲 Create and assign Amplitude tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A2BQMRA7J-amplitude|More info about Amplitude>\n
`;

const arcMessage = `
*Here's selling points for Arc (for Google Analytics)*\n
  📲 Create and assign Arc (for Google Analytics) tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0G0Q15F1-arc|More info about Arc (for Google Analytics)>\n
`;

const closingBellMessage = `
*Here's selling points for ClosingBell*\n
  📲 Create and assign ClosingBell tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0KK1CHUN-closingbell|More info about ClosingBell>\n
`;

const kiwiMessage = `
*Here's selling points for Kiwi (for Tableau)*\n
  📲 Create and assign Kiwi (for Tableau) tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A3S6N33JA-kiwi|More info about Kiwi (for Tableau)>\n
`;

const faxToSlackMessage = `
*Here's selling points for FaxToSlack*\n
  📲 Create and assign FaxToSlack tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0MC3TC4U-faxtoslack|More info about FaxToSlack>\n
`;

const appearInMessage = `
*Here's selling points for appear.in*\n
  📲 Create and assign appear.in tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0F7YS1JP-appearin|More info about appear.in>\n
`;

const skypeMessage = `
*Here's selling points for Skype*\n
  📲 Create and assign Skype tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A4QV4C23C-skype|More info about Skype>\n
`;

const pasteMessage = `
*Here's selling points for Paste*\n
  📲 Create and assign Paste tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A3WNR7LHW-paste|More info about Paste>\n
`;

const intercomMessage = `
*Here's selling points for Intercom*\n
  📲 Create and assign Intercom tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A40CLA0DP-intercom|More info about Intercom>\n
`;

const halpMessage = `
*Here's selling points for Halp*\n
  📲 Create and assign Halp tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/ADBM44F4G-halp|More info about Halp>\n
`;

const freshdeskMessage = `
*Here's selling points for Freshdesk*\n
  📲 Create and assign Freshdesk tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A03RG929F-freshdesk|More info about Freshdesk>\n
`;

const typeformMessage = `
*Here's selling points for Typeform*\n
  📲 Create and assign Typeform tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/AD6SC3RT6-typeform|More info about Typeform>\n
`;

const smallchatMessage = `
*Here's selling points for Smallchat*\n
  📲 Create and assign Smallchat tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A3U4933EJ-smallchat|More info about Smallchat>\n
`;

const chatlioMessage = `
*Here's selling points for Chatlio*\n
  📲 Create and assign Chatlio tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A03BS4Q25-chatlio|More info about Chatlio>\n
`;

const helpScoutMessage = `
*Here's selling points for Help Scout*\n
  📲 Create and assign Help Scout tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0F81R6CX-help-scout|More info about Help Scout>\n
`;

const guruMessage = `
*Here's selling points for Guru*\n
  📲 Create and assign Guru tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0FHVR2R0-guru|More info about Guru>\n
`;

const liveChatMessage = `
*Here's selling points for Live Chat*\n
  📲 Create and assign Live Chat tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0QKJAXHT-live-chat|More info about Live Chat>\n
`;

const cloudAppMessage = `
*Here's selling points for CloudApp*\n
  📲 Create and assign CloudApp tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A3P50F40L-cloudapp|More info about CloudApp>\n
`;

const yodelMessage = `
*Here's selling points for Yodel (Phone System)*\n
  📲 Create and assign Yodel (Phone System) tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0MGACTEH-yodelio-phone-system|More info about Yodel (Phone System)>\n
`;

const crispMessage = `
*Here's selling points for Crisp*\n
  📲 Create and assign Crisp tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A1TPC7361-crisp|More info about Crisp>\n
`;

const zeplinMessage = `
*Here's selling points for Zeplin*\n
  📲 Create and assign Zeplin tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A08MGBLJV-zeplin|More info about Zeplin>\n
`;

const dropboxPaperMessage = `
*Here's selling points for Dropbox Paper*\n
  📲 Create and assign Dropbox Paper tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0L4BKBG9-dropbox-paper|More info about Dropbox Paper>\n
`;

const lucidChartMessage = `
*Here's selling points for Lucidchart*\n
  📲 Create and assign Lucidchart tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0G8S1LSC-lucidchart|More info about Lucidchart>\n
`;

const notionMessage = `
*Here's selling points for Notion*\n
  📲 Create and assign Notion tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0VK5EP7Z-notion|More info about Notion>\n
`;

const canvaMessage = `
*Here's selling points for Canva*\n
  📲 Create and assign Canva tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/AAALLM8KZ-canva|More info about Canva>\n
`;

const moqupsMessage = `
*Here's selling points for Moqups*\n
  📲 Create and assign Moqups tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A4Y4RV4TD-moqups|More info about Moqups>\n
`;

const marvelMessage = `
*Here's selling points for Marvel*\n
  📲 Create and assign Marvel tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0GJE163D-marvel|More info about Marvel>\n
`;

const sketchboardMessage = `
*Here's selling points for Sketchboard*\n
  📲 Create and assign Sketchboard tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A02NEMM42-sketchboard|More info about Sketchboard>\n
`;

const abstractMessage = `
*Here's selling points for Abstract*\n
  📲 Create and assign Abstract tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A2C37QFN1-abstract|More info about Abstract>\n
`;

const muralMessage = `
*Here's selling points for MURAL*\n
  📲 Create and assign MURAL tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A4LV0TKR9-mural|More info about MURAL>\n
`;

const dribbbleMessage = `
*Here's selling points for Dribbble*\n
  📲 Create and assign Dribbble tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0CGVC7K7-dribbble|More info about Dribbble>\n
`;

const wireframeProMessage = `
*Here's selling points for WireframePro*\n
  📲 Create and assign WireframePro tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A568WK0SV-wireframepro|More info about WireframePro>\n
`;

const sketchTogetherMessage = `
*Here's selling points for SketchTogether*\n
  📲 Create and assign SketchTogether tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A09JCF011-sketchtogether|More info about SketchTogether>\n
`;

const sentryMessage = `
*Here's selling points for Sentry*\n
  📲 Create and assign Sentry tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A99FD3DJ5-sentry|More info about Sentry>\n
`;

const slackDeveloperToolsMessage = `
*Here's selling points for Slack Developer Tools*\n
  📲 Create and assign Slack Developer Tools tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A2RPP3NFR-jira-cloud|More info about Slack Developer Tools>\n
`;

const stackOverflowMessage = `
*Here's selling points for Stackoverflow (for Teams)*\n
  📲 Create and assign Stackoverflow (for Teams) tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/ABDN6MGG1-stack-overflow-for-teams|More info about Stackoverflow (for Teams)>\n
`;

const visualStudioMessage = `
*Here's selling points for Visual Studio*\n
  📲 Create and assign Visual Studio tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A2RPP3NFR-jira-cloud|More info about Visual Studio>\n
`;

const circleCIMessage = `
*Here's selling points for Circle CI*\n
  📲 Create and assign Circle CI tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0F7VRE7N-circleci|More info about Circle CI>\n
`;

const pingdomMessage = `
*Here's selling points for Pingdom*\n
  📲 Create and assign Pingdom tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0F814AV7-pingdom|More info about Pingdom>\n
`;

const rollbarMessage = `
*Here's selling points for Rollbar*\n
  📲 Create and assign Rollbar tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A024V4Y32-rollbar|More info about Rollbar>\n
`;

const bugsnagMessage = `
*Here's selling points for Bugsnag*\n
  📲 Create and assign Bugsnag tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A3D2PUEHG-bugsnag|More info about Bugsnag>\n
`;

const nagiosMessage = `
*Here's selling points for Nagios*\n
  📲 Create and assign Nagios tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0F81R747-nagios|More info about Nagios>\n
`;

const opsGenieMessage = `
*Here's selling points for OpsGenie*\n
  📲 Create and assign OpsGenie tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A286WATV2-opsgenie|More info about OpsGenie>\n
`;

const tettraWikiMessage = `
*Here's selling points for Tettra Wiki*\n
  📲 Create and assign Tettra Wiki tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0H4VM9FG-tettra-wiki|More info about Tettra Wiki>\n
`;

const notesMessage = `
*Here's selling points for Notes (by Slite)*\n
  📲 Create and assign Notes (by Slite) tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A6VQ0M28Z-notes-by-slite|More info about Notes (by Slite)>\n
`;

const egnyteMessage = `
*Here's selling points for Egnyte*\n
  📲 Create and assign Egnyte tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A3366DDMZ-egnyte|More info about Egnyte>\n
`;

const frameIOMessage = `
*Here's selling points for Frame.io*\n
  📲 Create and assign Frame.io tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A1409DYAH-frameio|More info about Frame.io>\n
`;

const helloSignMessage = `
*Here's selling points for HelloSign*\n
  📲 Create and assign HelloSign tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A08Q84QDV-hellosign|More info about HelloSign>\n
`;

const hpPrintBotMessage = `
*Here's selling points for HP Print Bot*\n
  📲 Create and assign HP Print Bot tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A1YC5MU12-hp-print-bot|More info about HP Print Bot>\n
`;

const slimWikiMessage = `
*Here's selling points for SlimWiki*\n
  📲 Create and assign SlimWiki tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0PKPSG8H-slimwiki|More info about SlimWiki>\n
`;

const pdfFillerMessage = `
*Here's selling points for PDFfiller*\n
  📲 Create and assign PDFfiller tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0KA8PNNL-pdffiller|More info about PDFfiller>\n
`;

const highSpotMessage = `
*Here's selling points for Highspot*\n
  📲 Create and assign Highspot tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/AEM6NTRL4-highspot|More info about Highspot>\n
`;

const smashMessage = `
*Here's selling points for Smash*\n
  📲 Create and assign Smash tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A6BMYLP9R-smash|More info about Smash>\n
`;

const brandfolderMessage = `
*Here's selling points for Brandfolder*\n
  📲 Create and assign Brandfolder tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0D9KAFL7-brandfolder|More info about Brandfolder>\n
`;

const papyrsMessage = `
*Here's selling points for Papyrs*\n
  📲 Create and assign Papyrs tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A22HJAR7C-papyrs|More info about Papyrs>\n
`;

const greenhouseMessage = `
*Here's selling points for Greenhouse*\n
  📲 Create and assign Greenhouse tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0J6STP1A-greenhouse|More info about Greenhouse>\n
`;

const concurMessage = `
*Here's selling points for Concur Expense*\n
  📲 Create and assign Concur Expense tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0KJQTDE2-concur-expense-beta|More info about Concur Expense>\n
`;

const adpMessage = `
*Here's selling points for ADP Virtual Assistant*\n
  📲 Create and assign ADP Virtual Assistant tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A9L4VPBEF-adp-virtual-assistant|More info about ADP Virtual Assistant>\n
`;

const caviarMessage = `
*Here's selling points for Caviar Food Bot*\n
  📲 Create and assign Caviar Food Bot tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A1JLD8Y93-caviar-food-bot|More info about Caviar Food Bot>\n
`;

const latticeMessage = `
*Here's selling points for Lattice*\n
  📲 Create and assign Lattice tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0HUMK35J-lattice|More info about Lattice>\n
`;

const continuallyMessage = `
*Here's selling points for Continually*\n
  📲 Create and assign Continually tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/ABK88H2TC-continually|More info about Continually>\n
`;

const reviewBotMessage = `
*Here's selling points for ReviewBot*\n
  📲 Create and assign ReviewBot tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0VN4GMBL-reviewbot|More info about ReviewBot>\n
`;

const doodleBotMessage = `
*Here's selling points for Doodle Bot*\n
  📲 Create and assign Doodle Bot tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/AFA5VQJKX-doodle-bot|More info about Doodle Bot>\n
`;

const envoyMessage = `
*Here's selling points for Envoy*\n
  📲 Create and assign Envoy tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A026TMMGZ-envoy|More info about Envoy>\n
`;

const mondayMessage = `
*Here's selling points for Monday*\n
  📲 Create and assign Monday tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/AABU499TM-mondaycom|More info about Monday>\n
`;

const harvestMessage = `
*Here's selling points for Harvest*\n
  📲 Create and assign Harvest tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A5CB98DK4-harvest|More info about Harvest>\n
`;

const expenseTronMessage = `
*Here's selling points for ExpenseTron*\n
  📲 Create and assign ExpenseTron tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A2L2MC5EE-expensetron|More info about ExpenseTron>\n
`;

const spokeMessage = `
*Here's selling points for Spoke*\n
  📲 Create and assign Spoke tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A3CARR01E-spoke|More info about Spoke>\n
`;

const calamariMessage = `
*Here's selling points for Calamari*\n
  📲 Create and assign Calamari tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0F8XLBU6-calamari|More info about Calamari>\n
`;

const stripeMessage = `
*Here's selling points for Stripe*\n
  📲 Create and assign Stripe tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0F81FNVC-stripe|More info about Stripe>\n
`;

const chargebeeMessage = `
*Here's selling points for Chargebee*\n
  📲 Create and assign Chargebee tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A6AH3LRCY-chargebee|More info about Chargebee>\n
`;

const teampayMessage = `
*Here's selling points for Teampay*\n
  📲 Create and assign Teampay tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A2X5HJYBU-teampay|More info about Teampay>\n
`;

const zohoFlowMessage = `
*Here's selling points for Zoho Flow*\n
  📲 Create and assign Zoho Flow tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A8X0UUVLJ-zoho-flow|More info about Zoho Flow>\n
`;

const zohoBooksMessage = `
*Here's selling points for Zoho Books*\n
  📲 Create and assign Zoho Books tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0M2NP7S9-zoho-books|More info about Zoho Books>\n
`;

const zohoInvoiceMessage = `
*Here's selling points for Zoho Invoice*\n
  📲 Create and assign Zoho Invoice tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0M2RV5TL-zoho-invoice|More info about Zoho Invoice>\n
`;

const zohoExpenseMessage = `
*Here's selling points for Zoho Expense*\n
  📲 Create and assign Zoho Expense tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0M2LQBB6-zoho-expense|More info about Zoho Expense>\n
`;

const zohoCRMMessage = `
*Here's selling points for Zoho CRM*\n
  📲 Create and assign Zoho CRM tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A495QM3L0-zoho-crm|More info about Zoho CRM>\n
`;

const rydooMessage = `
*Here's selling points for Rydoo*\n
  📲 Create and assign Rydoo tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A37HT386T-rydoo|More info about Rydoo>\n
`;

const spendeskMessage = `
*Here's selling points for Spendesk*\n
  📲 Create and assign Spendesk tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/AB6H117M1-spendesk|More info about Spendesk>\n
`;

const baremetricsMessage = `
*Here's selling points for Baremetrics*\n
  📲 Create and assign Baremetrics tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0PSKV32Q-baremetrics|More info about Baremetrics>\n
`;

const timeCampMessage = `
*Here's selling points for TimeCamp*\n
  📲 Create and assign TimeCamp tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0LJ026CX-timecamp-timer|More info about TimeCamp>\n
`;

const coupaMessengerMessage = `
*Here's selling points for Coupa Messenger*\n
  📲 Create and assign Coupa Messenger tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A38LR324W-coupamessenger|More info about Coupa Messenger>\n
`;

const approveSimpleMessage = `
*Here's selling points for ApproveSimple*\n
  📲 Create and assign ApproveSimple tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A99UKT5NZ-approvesimple|More info about ApproveSimple Cloud>\n
`;

const abacusMessage = `
*Here's selling points for Abacus*\n
  📲 Create and assign Abacus tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0W0QSNCC-abacus|More info about Abacus>\n
`;

const zipBooksMessage = `
*Here's selling points for ZipBooks*\n
  📲 Create and assign ZipBooks tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0GQLNNCT-zipbooks|More info about ZipBooks>\n
`;

const confluenceMessage = `
*Here's selling points for Confluence*\n
  📲 Create and assign Confluence tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/AC23SDS77-confluence-cloud|More info about Confluence>\n
`;

const evernoteMessage = `
*Here's selling points for Evernote*\n
  📲 Create and assign Evernote tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A571ZRWJ3-evernote|More info about Evernote>\n
`;

const microMessage = `
*Here's selling points for Micro Feed (formerly RealtimeBoard)*\n
  📲 Create and assign Micro Feed (formerly RealtimeBoard) tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A8VK125AS-miro-formerly-realtimeboard-feed|More info about Micro Feed (formerly RealtimeBoard)>\n
`;

const airtableMessage = `
*Here's selling points for Airtable*\n
  📲 Create and assign Airtable tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A08HJAPG9-airtable|More info about Airtable>\n
`;

const wrikeMessage = `
*Here's selling points for Wrike*\n
  📲 Create and assign Wrike tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A1GQ4MX6G-wrike|More info about Wrike>\n
`;

const workstreamsMessage = `
*Here's selling points for Workstreams*\n
  📲 Create and assign Workstreams tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A48SSMR0F-workstreams|More info about Workstreams>\n
`;

const clickupMessage = `
*Here's selling points for ClickUp*\n
  📲 Create and assign ClickUp tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A3G4A68V9-clickup|More info about ClickUp>\n
`;

const dealbotMessage = `
*Here's selling points for Dealbot (by Pipedrive CRM)*\n
  📲 Create and assign Dealbot (by Pipedrive CRM) tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A2VG0CJAE-dealbot-by-pipedrive-crm|More info about Dealbot (by Pipedrive CRM)>\n
`;

const copperMessage = `
*Here's selling points for Copper*\n
  📲 Create and assign Copper tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A475N93NU-copper|More info about Copper>\n
`;

const insightlyMessage = `
*Here's selling points for Insightly*\n
  📲 Create and assign Insightly tickets directly from your conversation about the issue in Slack.\n
<https://rylandking.slack.com/apps/A2YNVE48H-insightly|More info about Insightly>\n
`;

const olarkMessage = `
*Here's selling points for Olark*\n
  📲 Create and assign Olark tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A5BKB84CU-olark|More info about Olark>\n
`;

const salesLoftMessage = `
*Here's selling points for SalesLoft*\n
  📲 Create and assign SalesLoft tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A40SFFY3H-salesloft|More info about SalesLoft>\n
`;

const clearbitMessage = `
*Here's selling points for Clearbit*\n
  📲 Create and assign Clearbit tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0P47V3QB-clearbit|More info about Clearbit>\n
`;

const paperTrailMessage = `
*Here's selling points for PaperTrail*\n
  📲 Create and assign PaperTrail tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0F81FMT8-papertrail|More info about PaperTrail>\n
`;

const onePasswordMessage = `
*Here's selling points for 1Password*\n
  📲 Create and assign 1Password tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A81FQ3116-1password|More info about 1Password>\n
`;

const updownMessage = `
*Here's selling points for updown.io*\n
  📲 Create and assign updown.io tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0B0SL8FQ-updownio|More info about updown.io>\n
`;

const uptimeMessage = `
*Here's selling points for UptimeBot*\n
  📲 Create and assign UptimeBot tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A9Z9ZNFE1-uptimebot|More info about UptimeBot>\n
`;

const dbotMessage = `
*Here's selling points for dbot (by Demisto)*\n
  📲 Create and assign dbot (by Demisto) tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0AH4N94Z-dbot-by-demisto|More info about dbot (by Demisto)>\n
`;

const betterCloudMessage = `
*Here's selling points for BetterCloud*\n
  📲 Create and assign BetterCloud tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A1SR1NN5C-bettercloud|More info about BetterCloud>\n
`;

const pulsewayMessage = `
*Here's selling points for Pulseway*\n
  📲 Create and assign Pulseway tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0HRANGC8-pulseway|More info about Pulseway>\n
`;

const mcAfeeMessage = `
*Here's selling points for McAfee*\n
  📲 Create and assign McAfee tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A1Y4CRW72-mcafee-skyhigh-for-slack|More info about McAfee>\n
`;

const hackerOneMessage = `
*Here's selling points for HackerOne*\n
  📲 Create and assign HackerOne tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0BFC2YUS-hackerone|More info about HackerOne>\n
`;

const cronitorMessage = `
*Here's selling points for Cronitor*\n
  📲 Create and assign Cronitor tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A08K8F6UD-cronitor|More info about Cronitor>\n
`;

const drumMessage = `
*Here's selling points for Drum Meetings*\n
  📲 Create and assign Drum Meetings tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0XG4JWM8-drum-meetings|More info about Drum Meetings>\n
`;

const ustreamMessage = `
*Here's selling points for Ustream*\n
  📲 Create and assign Ustream tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0U8L8J0Z-ustream|More info about Ustream>\n
`;

const rssMessage = `
*Here's selling points for RSS*\n
  📲 Create and assign RSS tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0F81R7U7-rss|More info about RSS>\n
`;

const diggMessage = `
*Here's selling points for Digg*\n
  📲 Create and assign Digg tickets directly from your conversation about the issue in Slack.\n
<https://slack.com/apps/A0QGT20UR-digg|More info about Digg>\n
`;

///////////////
// END - NEW MESSAGES
///////////////


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
    `${trelloMessage}`,
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

// jira reply
function jiraReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${jiraMessage}`,
    params
  );
}



// jiraIntegration reply
function jiraIntegrationReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${jiraIntegrationMessage}`,
    params
  );
}

// loom reply
function loomReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${loomMessage}`,
    params
  );
}

// quip reply
function quipReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${quipMessage}`,
    params
  );
}

// adobeCreative reply
function adobeCreativeReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${adobeCreativeMessage}`,
    params
  );
}

// smartsheet reply
function smartsheetReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${smartsheetMessage}`,
    params
  );
}

// rocketbook reply
function rocketbookReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${rocketbookMessage}`,
    params
  );
}

// weTransfer reply
function weTransferReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${weTransferMessage}`,
    params
  );
}

// karmabot reply
function karmabotReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${karmabotMessage}`,
    params
  );
}

// olaph reply
function olaphReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${olaphMessage}`,
    params
  );
}

// delighted reply
function delightedReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${delightedMessage}`,
    params
  );
}

// ally reply
function allyReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${allyMessage}`,
    params
  );
}

// hive reply
function hiveReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${hiveMessage}`,
    params
  );
}

// voicea reply
function voiceaReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${voiceaMessage}`,
    params
  );
}

// sharedBox reply
function sharedBoxReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${sharedBoxMessage}`,
    params
  );
}

// paymo reply
function paymoReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${paymoMessage}`,
    params
  );
}

// incident reply
function incidentReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${incidentMessage}`,
    params
  );
}

// landria reply
function landriaReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${landriaMessage}`,
    params
  );
}

// threads reply
function threadsReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${threadsMessage}`,
    params
  );
}

// watchtower reply
function watchtowerReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${watchtowerMessage}`,
    params
  );
}

// indemandly reply
function indemandlyReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${indemandlyMessage}`,
    params
  );
}

// interbot reply
function interbotReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${interbotMessage}`,
    params
  );
}

// standuply reply
function standuplyReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${standuplyMessage}`,
    params
  );
}

// kyber reply
function kyberReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${kyberMessage}`,
    params
  );
}

// drift reply
function driftReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${driftMessage}`,
    params
  );
}

// statsbot reply
function statsbotReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${statsbotMessage}`,
    params
  );
}

// surveyMonkey reply
function surveyMonkeyReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${surveyMonkeyMessage}`,
    params
  );
}

// troops reply
function troopsReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${troopsMessage}`,
    params
  );
}

// obie reply
function obieReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${obieMessage}`,
    params
  );
}

// anyDo reply
function anyDoReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${anyDoMessage}`,
    params
  );
}

// reveal reply
function revealReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${revealMessage}`,
    params
  );
}

// kipwise reply
function kipwiseReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${kipwiseMessage}`,
    params
  );
}

// hubspot reply
function hubspotReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${hubspotMessage}`,
    params
  );
}

// hubspotBlogs reply
function hubspotBlogsReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${hubspotBlogsMessage}`,
    params
  );
}

// automateIO reply
function automateIOReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${automateIOMessage}`,
    params
  );
}

// attentive reply
function attentiveReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${attentiveMessage}`,
    params
  );
}

// visibleVC reply
function visibleVCReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${visibleVCMessage}`,
    params
  );
}

// translate reply
function translateReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${translateMessage}`,
    params
  );
}

// ifttt reply
function iftttReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${iftttMessage}`,
    params
  );
}

// inVisionApp reply
function inVisionAppReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${inVisionAppMessage}`,
    params
  );
}

// inVisionStudioShare reply
function inVisionStudioShareReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${inVisionStudioShareMessage}`,
    params
  );
}

// googleHangouts reply
function googleHangoutsReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${googleHangoutsMessage}`,
    params
  );
}

// meekan reply
function meekanReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${meekanMessage}`,
    params
  );
}

// blueJeans reply
function blueJeansReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${blueJeansMessage}`,
    params
  );
}

// donut reply
function donutReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${donutMessage}`,
    params
  );
}

// workbot reply
function workbotReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${workbotMessage}`,
    params
  );
}

// oneBar reply
function oneBarReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${oneBarMessage}`,
    params
  );
}

// newRelic reply
function newRelicReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${newRelicMessage}`,
    params
  );
}

// crashlytics reply
function crashlyticsReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${crashlyticsMessage}`,
    params
  );
}

// amplitude reply
function amplitudeReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${amplitudeMessage}`,
    params
  );
}

// arc reply
function arcReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${arcMessage}`,
    params
  );
}

// closingBell reply
function closingBellReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${closingBellMessage}`,
    params
  );
}

// kiwi reply
function kiwiReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${kiwiMessage}`,
    params
  );
}

// appearIn reply
function appearInReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${appearInMessage}`,
    params
  );
}

// skype reply
function skypeReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${skypeMessage}`,
    params
  );
}

// paste reply
function pasteReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${pasteMessage}`,
    params
  );
}

// intercom reply
function intercomReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${intercomMessage}`,
    params
  );
}

// halp reply
function halpReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${halpMessage}`,
    params
  );
}

// freshdesk reply
function freshdeskReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${freshdeskMessage}`,
    params
  );
}

// typeform reply
function typeformReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${typeformMessage}`,
    params
  );
}

// smallchat reply
function smallchatReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${smallchatMessage}`,
    params
  );
}

// chatlio reply
function chatlioReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${chatlioMessage}`,
    params
  );
}

// helpScout reply
function helpScoutReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${helpScoutMessage}`,
    params
  );
}

// guru reply
function guruReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${guruMessage}`,
    params
  );
}

// liveChat reply
function liveChatReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${liveChatMessage}`,
    params
  );
}

// cloudApp reply
function cloudAppReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${cloudAppMessage}`,
    params
  );
}

// yodel reply
function yodelReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${yodelMessage}`,
    params
  );
}

// crisp reply
function crispReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${crispMessage}`,
    params
  );
}

// zeplin reply
function zeplinReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${zeplinMessage}`,
    params
  );
}

// dropboxPaper reply
function dropboxPaperReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${dropboxPaperMessage}`,
    params
  );
}

// lucidChart reply
function lucidChartReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${lucidChartMessage}`,
    params
  );
}

// notion reply
function notionReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${notionMessage}`,
    params
  );
}

// canva reply
function canvaReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${canvaMessage}`,
    params
  );
}

// moqups reply
function moqupsReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${moqupsMessage}`,
    params
  );
}

// marvel reply
function marvelReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${marvelMessage}`,
    params
  );
}

// sketchboard reply
function sketchboardReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${sketchboardMessage}`,
    params
  );
}

// abstract reply
function abstractReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${abstractMessage}`,
    params
  );
}

// mural reply
function muralReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${muralMessage}`,
    params
  );
}

// dribbble reply
function dribbbleReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${dribbbleMessage}`,
    params
  );
}

// wireframePro reply
function wireframeProReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${wireframeProMessage}`,
    params
  );
}

// sketchTogether reply
function sketchTogetherReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${sketchTogetherMessage}`,
    params
  );
}

// sentry reply
function sentryReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${sentryMessage}`,
    params
  );
}

// slackDeveloperTools reply
function slackDeveloperToolsReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${slackDeveloperToolsMessage}`,
    params
  );
}

// stackOverflow reply
function stackOverflowReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${stackOverflowMessage}`,
    params
  );
}

// visualStudio reply
function visualStudioReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${visualStudioMessage}`,
    params
  );
}

// circleCI reply
function circleCIReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${circleCIMessage}`,
    params
  );
}

// pingdom reply
function pingdomReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${pingdomMessage}`,
    params
  );
}

// rollbar reply
function rollbarReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${rollbarMessage}`,
    params
  );
}

// bugsnag reply
function bugsnagReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${bugsnagMessage}`,
    params
  );
}

// nagios reply
function nagiosReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${nagiosMessage}`,
    params
  );
}

// opsGenie reply
function opsGenieReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${opsGenieMessage}`,
    params
  );
}

// tettraWiki reply
function tettraWikiReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${tettraWikiMessage}`,
    params
  );
}

// notes reply
function notesReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${notesMessage}`,
    params
  );
}

// egnyte reply
function egnyteReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${egnyteMessage}`,
    params
  );
}

// frameIO reply
function frameIOReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${frameIOMessage}`,
    params
  );
}

// helloSign reply
function helloSignReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${helloSignMessage}`,
    params
  );
}

// hpPrintBot reply
function hpPrintBotReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${hpPrintBotMessage}`,
    params
  );
}

// slimWiki reply
function slimWikiReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${slimWikiMessage}`,
    params
  );
}

// pdfFiller reply
function pdfFillerReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${pdfFillerMessage}`,
    params
  );
}

// highSpot reply
function highSpotReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${highSpotMessage}`,
    params
  );
}

// smash reply
function smashReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${smashMessage}`,
    params
  );
}

// brandfolder reply
function brandfolderReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${brandfolderMessage}`,
    params
  );
}

// papyrs reply
function papyrsReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${papyrsMessage}`,
    params
  );
}

// greenhouse reply
function greenhouseReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${greenhouseMessage}`,
    params
  );
}

// concur reply
function concurReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${concurMessage}`,
    params
  );
}

// caviar reply
function caviarReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${caviarMessage}`,
    params
  );
}

// lattice reply
function latticeReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${latticeMessage}`,
    params
  );
}

// continually reply
function continuallyReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${continuallyMessage}`,
    params
  );
}

// reviewBot reply
function reviewBotReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${reviewBotMessage}`,
    params
  );
}

// doodleBot reply
function doodleBotReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${doodleBotMessage}`,
    params
  );
}

// envoy reply
function envoyReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${envoyMessage}`,
    params
  );
}

// monday reply
function mondayReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${mondayMessage}`,
    params
  );
}

// harvest reply
function harvestReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${harvestMessage}`,
    params
  );
}

// expenseTron reply
function expenseTronReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${expenseTronMessage}`,
    params
  );
}

// spoke reply
function spokeReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${spokeMessage}`,
    params
  );
}

// calamari reply
function calamariReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${calamariMessage}`,
    params
  );
}

// stripe reply
function stripeReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${stripeMessage}`,
    params
  );
}

// chargebee reply
function chargebeeReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${chargebeeMessage}`,
    params
  );
}

// teampay reply
function teampayReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${teampayMessage}`,
    params
  );
}

// zohoFlow reply
function zohoFlowReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${zohoFlowMessage}`,
    params
  );
}

// zohoBooks reply
function zohoBooksReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${zohoBooksMessage}`,
    params
  );
}

// zohoExpense reply
function zohoExpenseReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${zohoExpenseMessage}`,
    params
  );
}

// zohoCRM reply
function zohoCRMReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${zohoCRMMessage}`,
    params
  );
}

// rydoo reply
function rydooReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${rydooMessage}`,
    params
  );
}

// spendesk reply
function spendeskReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${spendeskMessage}`,
    params
  );
}

// baremetrics reply
function baremetricsReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${baremetricsMessage}`,
    params
  );
}

// timecamp reply
function timecampReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${timeCampMessage}`,
    params
  );
}

// coupaMessenger reply
function coupaMessengerReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${coupaMessengerMessage}`,
    params
  );
}

// approveSimple reply
function approveSimpleReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${approveSimpleMessage}`,
    params
  );
}

// abacus reply
function abacusReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${abacusMessage}`,
    params
  );
}

// zipBooks reply
function zipBooksReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${zipBooksMessage}`,
    params
  );
}

// confluence reply
function confluenceReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${confluenceMessage}`,
    params
  );
}

// evernote reply
function evernoteReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${evernoteMessage}`,
    params
  );
}

// micro reply
function microReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${microMessage}`,
    params
  );
}

// airtable reply
function airtableReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${airtableMessage}`,
    params
  );
}

// wrike reply
function wrikeReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${wrikeMessage}`,
    params
  );
}

// workstreams reply
function workstreamsReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${workstreamsMessage}`,
    params
  );
}

// clickup reply
function clickupReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${clickupMessage}`,
    params
  );
}

// dealbot reply
function dealbotReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${dealbotMessage}`,
    params
  );
}

// copper reply
function copperReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${copperMessage}`,
    params
  );
}

// insightly reply
function insightlyReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${insightlyMessage}`,
    params
  );
}

// olark reply
function olarkReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${olarkMessage}`,
    params
  );
}

// salesLoft reply
function salesLoftReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${salesLoftMessage}`,
    params
  );
}

// clearbit reply
function clearbitReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${clearbitMessage}`,
    params
  );
}

// paperTrail reply
function paperTrailReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${paperTrailMessage}`,
    params
  );
}

// onePassword reply
function onePasswordReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${onePasswordMessage}`,
    params
  );
}

// updown reply
function updownReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${updownMessage}`,
    params
  );
}

// uptime reply
function uptimeReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${uptimeMessage}`,
    params
  );
}

// dbot reply
function dbotReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${dbotMessage}`,
    params
  );
}

// betterCloud reply
function betterCloudReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${betterCloudMessage}`,
    params
  );
}

// pulseway reply
function pulsewayReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${pulsewayMessage}`,
    params
  );
}

// mcAfee reply
function mcAfeeReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${mcAfeeMessage}`,
    params
  );
}

// hackerOne reply
function hackerOneReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${hackerOneMessage}`,
    params
  );
}

// cronitor reply
function cronitorReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${cronitorMessage}`,
    params
  );
}

// drum reply
function drumReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${drumMessage}`,
    params
  );
}

// ustream reply
function ustreamReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${ustreamMessage}`,
    params
  );
}

// rss reply
function rssReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${rssMessage}`,
    params
  );
}

// digg reply
function diggReply() {
  const params = { };

  bot.postMessageToChannel(
    'ask-selly',
    `${diggMessage}`,
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
