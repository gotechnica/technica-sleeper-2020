const axios = require('axios');
const webhook = "XXX";

module.exports.index = async event => {
  const body = JSON.parse(event.body);
  const name = body.name;
  const company = body.company;
  const email = body.email;
  const message = body.message;
  await axios.post(webhook, {
    text: `New inbound sponsorship request. \nName: *${name}*\nCompany: ${company}\nEmail: ${email}\nMessage: ${message}`
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
    headers: {
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Credentials': true,
       }
  };
};
