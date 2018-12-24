import React, { Component } from 'react'; 
import './poll.css';
 
function Poll(props){

    const x = props.pollsField.map((y) =>
        <div key={y.id}>
             <div className="react-poll-field">
                 <input id={y.key} type="checkbox" value="test" />
                <span for={y.key} className="react-poll-label">{y.field}</span>
            </div> 
        </div>
    );
    const content = props.polls.map((poll) =>
        <div key={poll.id}>
            <p className="react-poll-clubname">{poll.clubname}</p>
            <p className="react-poll-date">created a poll. | {poll.date}</p>
            <p className="react-poll-textaboutpoll">{poll.textaboutpoll}</p> 
            {x}
        </div>
    );
  
  return(   
    <div className="container-poll">
        {content}
    </div>
  );
  
}
export default Poll;
 