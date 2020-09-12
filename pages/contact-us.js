import style from "../styles/Contactus.module.css";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";

export default function ContactUs() {
  const [open, setOpen] = useState(false);

  const emptyTheValue = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  };

  const getValue = (e) => {
    e.preventDefault();
    const value = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    console.log(value);
    emptyTheValue();

    return setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.bg}>
      <Snackbar
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        message="Submitted Successfully"
      />
      <div>
        <div className={style.main}>
          <div className={style.container}>
            <div className={style.firstContainer}>
              <div className={style.firstContent}>
                <h2>Want to contact us</h2>
                <div>
                  <h4>leave a message</h4>
                  <form onSubmit={(e) => getValue(e)}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      id="name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email ID"
                      required
                    />
                    <textarea
                      id="message"
                      name="message"
                      type="textarea"
                      rows="5"
                      cols="2"
                      placeholder="Message"
                      className={style.message}
                      required
                    />
                    <button>Send</button>
                  </form>
                </div>
              </div>
            </div>
            <div className={style.secondContainer}>
              <div className={style.secondContent}>
                <h2>Contact us</h2>
                <div className={style.mainDiv}>
                  <div>
                    <EditLocationIcon
                      className={style.icon}
                      fontSize="large"
                      style={{ color: "#fff" }}
                    />
                    <p>11/22 baker street</p>
                  </div>
                  <div>
                    <EmailIcon className={style.icon} fontSize="large" />
                    <p>fxxxx@gmail.com</p>
                  </div>
                  <div>
                    <CallIcon className={style.icon} fontSize="large" />
                    <p>8218-XXXX-XX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
