import { styled } from "..";

export const DrawerContainer = styled("section", {
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: 999,
  display: "flex",
  justifyContent: "space-between",

  main: {
    flex: 1,
  },
});

export const DrawerContent = styled("aside", {
  width: 480,
  backgroundColor: "$gray800",
  padding: "3rem",

  "> svg": {
    fontSize: "$xl",
    position: "absolute",
    top: "1.5rem",
    right: "3rem",
    cursor: "pointer",

    "&:hover": {
      opacity: 0.7,
    },
  },
});

export const CartItemContainer = styled("div", {
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  minHeight: "55vh",
  maxHeight: "55vh",
  overflowY: "scroll",

  " &::-webkit-scrollbar": {
    width: "0.5rem",
    backgroundColor: "$gray100",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "$green500",
  },

  img: {
    background: "linear-gradient(180deg, #1ea483 0%, #7465b4 100%)",
    borderRadius: 8,
  },

  div: {
    display: "flex",
    gap: "1rem",

    div: {
      flexDirection: "column",
      justifyContent: "space-between",
      fontSize: "$md",
      gap: "0.5rem",

      span: {
        color: "$green500",
        fontWeight: 700,
        cursor: "pointer",

        "&:hover": {
          color: "$green300",
        },
      },

      div: {
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem",
      },

      "&.controller": {
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        padding: "0.0875rem",
        gap: 0,

        svg: {
          padding: 0,
          background: "none",
          fontSize: "1rem",
          color: "$green500",

          "&:last-child": {
            color: "red",
          },
        },
      },
    },
  },
});

export const CartFooter = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "1rem",

  div: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",

    h4: {
      fontSize: "$large",
    },
  },

  button: {
    width: "100%",
    marginTop: "1rem",
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

export const EmptyCart = styled("section", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "50%",
  gap: "1rem",

  svg: {
    fontSize: "$2xl",
  },
});
