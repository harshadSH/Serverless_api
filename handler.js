const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'eu-north-1' });  // Specify your region

module.exports.sendEmail = async (event) => {
  const { receiver_email, subject, body_text } = JSON.parse(event.body);

  // Basic validation
  if (!receiver_email || !subject || !body_text) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Missing required fields: receiver_email, subject, and body_text.',
      }),
    };
  }

  const params = {
    Destination: {
      ToAddresses: [receiver_email],  // Email to send to
    },
    Message: {
      Body: {
        Text: {
          Data: body_text,  // Body text of the email
        },
      },
      Subject: {
        Data: subject,  // Subject of the email
      },
    },
    Source: 'yourmail@gmail.com',  // Change this to your verified SES email
  };

  try {
    // Send the email using SES
    await ses.sendEmail(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Email sent successfully.',
      }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to send email.',
        error: error.message,
      }),
    };
  }
};
