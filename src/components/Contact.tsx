import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Element } from "react-scroll";
import { useRef } from "react";
import { Iconbar } from "./Iconbar";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm, Controller } from "react-hook-form";

interface FormData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

export const Contact = (props: any) => {
  const form = useRef<HTMLFormElement>(null);

  const [formSuccess, setFormSuccess] = useState(false);

  const sendEmail = () => {
    if (form.current) {
      emailjs
        .sendForm(
          "service_po3ajlo",
          "template_cddtu5v",
          form.current,
          "ox0FtSFs-iATUKmK9"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormSuccess(true);
            console.log(formSuccess);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const theme = useTheme();
  return (
    <Element id="Contact" name="Contact">
      <Box
        sx={{
          paddingBottom: "5vh",
          paddingTop: "5vh",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundImage: `linear-gradient(to top, ${theme.palette.background.contact}, ${theme.palette.background.contactGradient})`,
        }}
        bgcolor={theme.palette.background.contact}
      >
        <Typography variant="h1" sx={{ marginBottom: "3vh" }}>
          Contact
        </Typography>
        {/* TODO  add a link to the email that opens an email window */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "700px",
            padding: "0% 2% 2% 2%",
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", marginBottom: "2%" }}
          >
            Send me an email or contact me below
          </Typography>
          <form
            onSubmit={handleSubmit((data) => {
              sendEmail();
            })}
            ref={form}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              maxHeight: "45vh",
              flexGrow: 1,
            }}
          >
            {/* name */}
            <Controller
              name="from_name"
              control={control}
              defaultValue=""
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="outlined-basic"
                  name="from_name"
                  label="Name"
                  variant="filled"
                  error={!!errors.from_name}
                  helperText={errors.from_name?.message}
                />
              )}
            />
            {/* email */}
            <Controller
              name="from_email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="outlined-basic"
                  name="from_email"
                  label="E-mail"
                  variant="filled"
                  error={!!errors.from_email}
                  helperText={errors.from_email?.message}
                />
              )}
            />
            {/* subject */}
            <Controller
              name="subject"
              control={control}
              defaultValue=""
              rules={{ required: "Subject is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="outlined-basic"
                  name="subject"
                  label="Subject"
                  variant="filled"
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="outlined-basic"
                  name="message"
                  label="Message"
                  variant="filled"
                  multiline
                  rows={4}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              )}
            />
            <Button
              type="submit"
              color="primary"
              variant="round"
              sx={{
                width: "50%",
                alignSelf: "center",
                marginTop: "2em",
                // opacity: 0,
              }}
            >
              Submit
            </Button>
          </form>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifySelf: "flex-end",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ padding: "3%" }}>
            Find me online at
          </Typography>
          <Iconbar />
        </Box>
      </Box>
    </Element>
  );
};
