import React from "react"; 
import { NavLink } from "react-router-dom";
import ApiMethod from "./ApiMethod";
import Todo from "./Todo";
import { render } from 'react-dom';
import * as Highcharts from "highcharts";
import HighchartsReact from 'highcharts-react-official';

import {
  CiOutlined,
  CommentOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";


const Sidebar = () => {

  //code for todolist get today day name of the week  

  const weekDay = new Date().toLocaleString('default', {weekday: 'long'});

  //code for date
  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const dateStr = date + "/" + month + "/" + year;
 
  const options = {
    hart: {
      type: 'column',
      styledMode: true
  },

  title: {
      text: 'Styling axes and columns'
  },

  yAxis: [{
      className: 'highcharts-color-0',
      title: {
          text: 'Primary axis'
      }
  }, {
      className: 'highcharts-color-1',
      opposite: true,
      title: {
          text: 'Secondary axis'
      }
  }],

  plotOptions: {
      column: {
          borderRadius: 5
      }
  },

  series: [{
      data: [1, 3, 2, 4]
  }, {
      data: [324, 124, 547, 221],
      yAxis: 1
  }]
};

const options2 = {
  chart: {
    styledMode: true
},

title: {
    text: 'Pie point CSS'
},

xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
},

series: [{
    type: 'pie',
    allowPointSelect: true,
    keys: ['name', 'y', 'selected', 'sliced'],
    data: [
        ['Apples', 29.9, false],
        ['Pears', 71.5, false],
        ['Oranges', 106.4, false],
        ['Plums', 129.2, false],
        ['Bananas', 144.0, false],
        ['Peaches', 176.0, false],
        ['Prunes', 135.6, true, true],
        ['Avocados', 148.5, false]
    ],
    showInLegend: true
}]
}
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 rem-pad">
            <div className="sidenav">
            <div className="sidenav-data">
              <div><NavLink exact to="/sample" activeclassname="active"><CiOutlined /></NavLink></div>
              <div><NavLink exact to="/sample" activeclassname="active" ><CommentOutlined /></NavLink></div>
              <div><NavLink exact to="/sample" activeclassname="active"><InfoCircleOutlined /></NavLink></div>
              <div><NavLink exact to="/sample" activeclassname="active" ><InfoCircleOutlined /></NavLink></div>
            </div>
          </div>
        </div>
        <div className="col-11 rem-pad">
        <div className="custom-padding">
          <div className="col-8">
            <div className="todo">
              <h1 className="white">Today To Do list</h1>
               <span className="white">{weekDay}</span>
                <p className="white">{dateStr}</p>
              
              <Todo/>
            </div>
          </div>
          <div className="col-8">
          <ApiMethod/>
          </div>
          <div className="col-md-8">
          <div className="custom-style">
            <div className="col-6">
            <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            <div className="col-6">
            <HighchartsReact highcharts={Highcharts} options={options2} />
            </div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
