import React, { useCallback } from "react";
import { sendEmail } from "../../../../apis";
import styles from "./Section5.module.css";
import { Alert, Snackbar } from "@mui/material";

const LIST = [
  {
    key: "first_name",
    label: "First Name",
    placeholder: "First Name",
  },
  {
    key: "last_name",
    label: "Last Name",
    placeholder: "Last Name",
  },
  {
    key: "email",
    label: "Email",
    placeholder: "Email",
    isRequired: true,
  },
  {
    key: "phone",
    label: "Phone",
    placeholder: "Phone",
    isRequired: true,
  },
  {
    key: "school_name",
    label: "School Name",
    placeholder: "",
  },
  {
    key: "school_website",
    label: "School Website",
    placeholder: "",
  },
  {
    key: "message",
    label: "Message",
    placeholder: "Message",
  },
];

const Block = ({ label, placeholder, value, setValue, isRequired }) => {
  return (
    <div className={styles.blockContainer}>
      <label className={styles.label}>
        {label}
        {isRequired && "*"}
      </label>
      <input
        className={styles.input}
        type="text"
        placeholder={placeholder}
        data-required={isRequired}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const Section5 = () => {
  const [data, setData] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const setValue = useCallback(
    (key) => (value) => {
      setData((preData) => ({ ...preData, [key]: value }));
    },
    []
  );

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    const text = LIST.map(
      (item) => data[item.key] && `${item.label}: ${data[item.key]}`
    )
      .filter(Boolean)
      .join("\n");
    const result = await sendEmail(text);
    console.log("result", result);
    if (result) {
      setData({});
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
    handleOpen();
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>Get In Touch</div>
        <div className={styles.subContainer}>
          <div className={styles.imageContainer}>
            <img
              decoding="async"
              width="100%"
              height="auto"
              src="https://i0.wp.com/www.interviewlynx.com/wp-content/uploads/2022/08/Screen-Shot-2022-08-17-at-2.17.14-PM.png?fit=482%2C482&amp;ssl=1"
              alt=""
            />
          </div>
          <div className={styles.content}>
            {LIST.map((item) => (
              <Block
                {...item}
                key={item.key}
                value={data[item.key] ?? ""}
                setValue={setValue(item.key)}
              />
            ))}
            <button className={styles.button} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        classes={{ root: styles.snackbar }}
      >
        <Alert
          onClose={handleClose}
          severity={isSuccess ? "success" : "error"}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {isSuccess
            ? "Thank you, your form has been submitted"
            : "Error submitting form"}
        </Alert>
      </Snackbar>
    </div>
  );
};
