import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as serviceWorker from './serviceWorker';
import Poster from './event.js';
import Poll from './poll.js';


const posts = [ 
  {id: 1, url:'https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/46415010_2100447300070336_3992109060102029312_n.jpg?_nc_cat=108&_nc_ht=scontent.fpat1-1.fna&oh=ae5b09e2dabb7aa3ac80451866896793&oe=5C960BCF', clubname: 'IITG.FOSS',time: '6-7pm', date: '18 November 2018', venue: 'New Sac Conference Hall'},
  {id: 2, url:'https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/46161195_2096533280461738_2889864441556369408_n.jpg?_nc_cat=110&_nc_ht=scontent.fpat1-1.fna&oh=400c7d383a80e4b4ddf1d59629522096&oe=5C955002', clubname: 'IITG.FOSS',time: '6-8pm', date: '16th November 2018', venue: 'Conference Hall'},
  {id: 3, url:'https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/44520808_2053709711316055_78355888699604992_n.jpg?_nc_cat=111&_nc_ht=scontent.fpat1-1.fna&oh=fd2fee18dda7bb4a646b05ee89465030&oe=5C8FB3F0', clubname: 'Techniche, IIT Guwahati', time: '11am', date: '27 October 2018', venue: 'Conference Hall Near Auditorium'}
];

const polls=[
  {id:1,clubname:'Coding 101 - IIT Guwahati',date:'6 June 2018',textaboutpoll:'Hello everyone!As the Coding 101 course comes to an end, we would like to track your progress so that we can plan to get started with the projects.Please answer honestly.'}
];

const pollsField=[
  {id:1, field:'Partially completed Introductory Python'},
  {id:2, field:'Not yet started'},
  {id:3, field:'Completed till Module 1 and Task 1'},
  {id:4, field:'Completed till Module 2 and Task 2'},
  {id:5, field:'Done with Introductory Python and completed Google\'s Python Class exercises'},
  {id:6, field:'Completed till Module 3 and Task 3'}
];


ReactDOM.render(<Poster posts={posts}/>, document.getElementById('event')); 
ReactDOM.render(<Poll polls={polls} pollsField={pollsField}/>, document.getElementById('poll-react')); 
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
