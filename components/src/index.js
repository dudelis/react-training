import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () =>{
    return (        
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    commentText="Some text 1"
                    imageSource = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="John"
                    timeAgo="Yesterday at 5 PM"
                    commentText="Some text 2"
                    imageSource = {faker.image.avatar()}
                />
            </ApprovalCard>            
            <ApprovalCard>
                <CommentDetail 
                    author="Bill" 
                    timeAgo="Today at 6 AM"
                    commentText="Some text 3"
                    imageSource = {faker.image.avatar()}
                />  
            </ApprovalCard>                      
        </div>    
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));