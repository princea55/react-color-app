import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from "@material-ui/styles";
import './ColorBox.css'

const styles = {
    ColorBox: {
        width: "20%",
        height: props => (props.showingFullPalette ? "25%" : "50%"),
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        "&:hover button": {
            opacity:1
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
    },
    copyButton: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block", 
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight:"20px",
        opacity: 0,
        textTransform: "uppercase",
        border: "none",
        borderRadius: "3px",
        textDecoration: "none",
    
    },
    boxContent:{
        position: "absolute",
        width: "80%",
        padding: "10px",
        left: "0px",
        bottom: "0px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
    },
    copyOverlay:{
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(10)",
        zIndex: "1",
        position: "absolute",
    } 
}
class ColorBox extends Component{
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1500);
        })
    }
    render() {
        const { name, background, moreUrl, showingFullPalette, classes } = this.props;
        const { copied } = this.state;
      
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ backgroundColor: background }} className={classes.ColorBox}>
                    <div style={{ background: background }}
                        className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
                    />
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette &&  <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                        <span className={classes.seeMore}>MORE</span>
                    </Link>}
                </div>  
            </CopyToClipboard>
        );
    }
}
export default withStyles(styles)(ColorBox);
