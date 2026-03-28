exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  // Parse the incoming body containing form data
  const { name, email, message } = JSON.parse(event.body);

  // Use the Resend API key stored in Netlify environment variables
  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key is missing" }),
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        // 'onboarding@resend.dev' allows you to send emails to the address 
        // registered with your Resend account without domain verification
        from: "Portfolio Form <onboarding@resend.dev>",
        to: "siddarth.rajeswari@gmail.com",
        subject: `New Portfolio Message from ${name}`,
        reply_to: email,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: data.message || "Failed to send email." }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
