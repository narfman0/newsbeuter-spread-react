import React from 'react'

const API_ROOT = "http://localhost:5000/api";

const Stories = ({ stories }) => {
    return (
    <div>
        {stories.map((story) => (
        <div className="card" key={story.id}>
            <div className="card-body">
            <h5 className="card-title">{story.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
                <div>{story.author}</div>
                <div>{story.pub_date}</div>
            </h6>
            <p className="card-text">{story.content}></p>
            <a href={story.url} className="card-link">Card link</a>
            <a href={API_ROOT + '/items/' + story.id} className="card-link">Mark read</a>
            </div>
        </div>
        ))}
    </div>
    )
};

export default Stories