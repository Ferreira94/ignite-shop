import { pseudoRandomBytes } from "crypto";
import { callbackify } from "util";
import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",
  maxWidth: 960,
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 400,
  height: 460,
  background: "linear-gradient(180deg, #1ea483 0%, #7465b4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    fontSize: "$md",
    color: "$gray300",
    lineHeight: 1.6,
    marginTop: "1.5rem",
  },

  button: {
    marginTop: "auto",
    backgroundColor: "$green500",
    color: "$white",
    border: 0,
    borderRadius: 8,
    padding: "1.125rem",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: "$md",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
});
