const ConversationV1 = require('watson-developer-cloud/conversation/v1');

const conversation = new ConversationV1({
    username: process.env.CONVERSATION_USERNAME,
    password: process.env.CONVERSATION_PASSWORD,
    version_date: ConversationV1.VERSION_DATE_2017_02_03
});


sendMessage = (text, context) => {
    const payload = {
        workspace_id: process.env.WORKSPACE_ID,
        input: {
            text: text
        },
        context: context
    };
    return new Promise((resolve, reject) => conversation.message(payload, (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    }));
};

module.exports.sendMessage = sendMessage;
