import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
// import Palette from './Palette';

import styles from './styles/PaletteList';
import { withStyles } from "@material-ui/styles";   



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