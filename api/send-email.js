module.exports = async (req, res) => {
  if (req.method === "POST") {
    const { subject, text } = req.body;

    const apiKey = process.env.SENDGRID_API_KEY;
    const url = "https://api.sendgrid.com/v3/mail/send";

    const data = {
      personalizations: [
        {
          to: [
            { email: process.env.ADMIN_EMAIL },
            { email: process.env.SUBADMIN_EMAIL },
          ],
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

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(data),
      });
      console.log("response", response, response.status);
      if (response.status === 202) {
        res.status(200).json({ success: true });
      } else {
        res.status(500).json({ success: false, error: response.statusText });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
};
