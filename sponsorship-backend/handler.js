const axios = require('axios');

module.exports.index = async event => {
  const body = JSON.parse(event.body);
  const name = body.name;
  const company = body.company;
  const email = body.email;
  const message = body.message;
  await axios.post('https://hooks.slack.com/services/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', {
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
  };
};
