import React, { Component } from 'react';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { withStyles } from "@material-ui/styles";
import 'rc-slider/assets/index.css';
import './Palette.css';

import Navbar from './Navbar';
// import  Slider from "rc-slider";

const styles = {
    Palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    Colors: {
        height: "90%"
    }
};
class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: "hex"};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level) {
        this.setState({level})
    }
    changeFormat(val) {
        this.setState({format:val})
    }
    render() {
        const { colors, paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const { level, format } = this.state;
        const colorBox = colors[`${level}`].map(color => (
            <ColorBox
                background={color[format]}
                name={color.name}
                key={color.id}
                moreUrl={`/palette/${id}/${color.id}`}
                showingFullPalette={true}
            />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar
                    level={level}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    showingAllColors={true}
                />
               
                <div className={classes.Colors}>
                    {colorBox}
                </div>
                {<PaletteFooter paletteName={paletteName} emoji={emoji}/>}
                
            </div>
        );
    }
}
export default withStyles(styles)(Palette);