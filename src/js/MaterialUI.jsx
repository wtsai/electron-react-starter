'use strict';
import React from "react";
import MuiThemeTest from './material-ui/components/MuiThemeTest/MuiThemeTest.jsx'; //把UI單獨成Render檔

export default class MaterialUI extends React.Component {
  render () {
    return (
      <div>
        <MuiThemeTest/>
      </div>
    );
  }
}
