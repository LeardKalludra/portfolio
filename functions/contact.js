exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Here you would typically:
    // 1. Validate the input
    // 2. Send an email using a service like SendGrid
    // 3. Store the message in a database

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Message received successfully!'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to process message'
      })
    };
  }
}; 