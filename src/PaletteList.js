import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import Palette from './Palette';
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";   

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent:"center"
        
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
        color:"white"
    },
    palettes: {
        boxSizing: "border-box",
        widht: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap:"5%",

    }
}

class PaletteList extends Component{
    gotoPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const { palettes, classes } = this.props;
        return (
            
            <div className={classes.root}>
                <div className={classes.conatiner}>
                    <nav className={classes.nav}>
                        <h1>Recat Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(palette => (
                            
                                <MiniPalette {...palette} handleClick={() => this.gotoPalette(palette.id)}/>
                           
                        ))}
                    </div>
                </div>
                
                
          </div>  
        );
    }
}
export default withStyles(styles)(PaletteList);