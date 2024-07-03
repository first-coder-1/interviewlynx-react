export const sendEmail = async (
  text = "text",
  subject = "subject",
  to = process.env.ADMIN_EMAIL
) => {
  const apiKey = process.env.SENDGRID_API_KEY;
  const url = "https://api.sendgrid.com/v3/mail/send";

  const data = {
    personalizations: [
      {
        to: [{ email: to }],
        subject: subject,
      },
    ],
    from: {
      email: "firstcoder325@gmail.com",
    },
    content: [
      {
        type: "text/plain",
        value: text,
      },
    ],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
};
