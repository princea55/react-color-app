import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Palette from './Palette';
import SinglePaletteColor from './SinglePaletteColor';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import NewPaletteForm from './NewPaletteForm';
import { generatePalette } from "./ColorHelper";
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {palette:seedColors}
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id) {
    return this.state.palette.find(function(palette) {
      return palette.id === id;
    });
  }
  savePalette(newPalette) {
    this.setState({palette: [...this.state.palette, newPalette]})
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => <NewPaletteForm savePalette={this.savePalette}{...routeProps}
          />} />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={routeProps => (
            <SinglePaletteColor
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />)}
        />
        <Route
          exact
          path="/"
          render={(routeprops) => <PaletteList palettes={this.state.palette} {...routeprops} />}

        />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
            palette={generatePalette(
              this.findPalette(routeProps.match.params.id)
            )}
          />)}
          
        />
        
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[1])}/>
      // </div>
    );
  }
}
export default App;



