export default {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"

    },
    conatiner: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",

    },
    nav: {
        display: "flex",
        widht: "100%",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        
    },
    newPalette: {
        marginLeft: "24rem",
        textDecoration: "none",
        color:"white"
    },
    palettes: {
        boxSizing: "border-box",
        widht: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",

    }
}