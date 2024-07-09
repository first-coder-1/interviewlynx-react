export const sendEmail = async (text = "text", subject = "subject") => {
  // return true;
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      subject: subject,
      text: text,
    }),
  });

  const result = await response.json();

  if (result.success) {
    console.log("Email sent successfully");
    return true;
  } else {
    console.error("Error sending email:", result.error);
  }
};
