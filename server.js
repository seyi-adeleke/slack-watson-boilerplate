const express =  require('express');
const app = express();

const port = process.env.PORT || 3000;
require('dotenv').config();


app.listen(port,  () => {
    console.info(`Started Express server on port ${port}`);
});

require('./chatbots').slackBot();
