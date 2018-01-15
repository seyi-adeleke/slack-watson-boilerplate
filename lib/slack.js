const botkit = require('botkit');
const Watson =  require('./watson');


const slack_token = process.env.SLACK_TOKEN;

const slackBot = () => {

    const slackController = botkit.slackbot({
        debug: true,
        require_delivery: true,
    });
    const bot = slackController.spawn({
        token: slack_token
    }).startRTM();


    slackController.hears(['.*'], 'direct_message,direct_mention,mention', (bot, message) => {
        Watson.sendMessage(String(message.text), undefined)
            .then((response) => {
                slackController.log('Response from Watson received');
                bot.reply(message, response.output.text.join('\n'));
            })
            .catch(err => {
                console.error(JSON.stringify(err, null, 2));
            });

    });
};

module.exports.slackBot = slackBot;
