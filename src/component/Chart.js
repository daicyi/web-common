import React, { Component } from 'react';
import {Button} from "antd";
import "antd/dist/antd.css";
export default class Chart extends Component
{
  constructor(props,context)
  {
    super(props,context)
  }


  render()
  {
    return <div><Button icon="edit">hello</Button></div>
  }
}
