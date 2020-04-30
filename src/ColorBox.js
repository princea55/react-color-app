import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import { withStyles } from "@material-ui/styles";
import './ColorBox.css'

const styles = {
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
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
                <div style={{ backgroundColor: background }} className="ColorBox">
                    <div style={{ background: background }}
                        className={`copy-overlay ${copied && "show"}`}
                    />
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    {showingFullPalette &&  <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                        <span className="see-more">MORE</span>
                    </Link>}
                </div>  
            </CopyToClipboard>
        );
    }
}
export default withStyles(styles)(ColorBox);
