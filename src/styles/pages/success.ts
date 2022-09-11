import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: "100vh",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
    marginTop: "2rem",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 520,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    display: "block",
    marginTop: "3rem",
    fontSize: "large",
    color: "$green500",
    textDecoration: "none",
    fontWeight: 700,

    "&:hover": {
      color: "$green300",
    },
  },

  section: {
    display: "flex",
  },
});

export const ImageContainer = styled("div", {
  borderRadius: "50%",
  background: "linear-gradient(180deg, #1ea483 0%, #7465b4 100%)",
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "2rem",
  marginLeft: "-2.5rem",
  border: "1px solid $gray900",

  img: {
    objectFit: "cover",
  },
});
