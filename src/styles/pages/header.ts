import { styled } from "..";

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 960,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  div: {
    display: "flex",
    alignItems: "flex-start",

    svg: {
      fontSize: "2.5rem",
      padding: "0.5rem",
      backgroundColor: "$gray800",
      borderRadius: 6,
      cursor: "pointer",

      "&:hover": {
        opacity: 0.7,
      },
    },
  },
});

export const CountCart = styled("div", {
  width: "2rem",
  height: "2rem",
  backgroundColor: "$green500",
  borderRadius: "50%",
  border: "3px solid $gray900",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  left: "-1rem",
  top: "-0.875rem",

  span: {
    marginTop: "0.25rem",
  },
});
