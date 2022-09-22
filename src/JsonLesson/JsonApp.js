import React from 'react';
import Users from './users.json';

const JsonApp = () => {
    return (
        <div>
          {Users.map((post) => {
             return(
                <div className='infos'>
                    <h1>Name: {post.name}</h1>
                    <h2>Age: {post.age}</h2> 
                    <h3>Country: {post.country}</h3>
                    <h4>Phone number: {post.phone}</h4>
                </div>
             )
          })}
        </div>
    );
};

export default JsonApp;