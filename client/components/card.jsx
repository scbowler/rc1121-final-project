import React from 'react';

export default function Card(props) {
  return (
    <div className="col-3">
      <div className="card">
        <img src={props.photoUrl} alt={props.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.notes}</p>
        </div>
      </div>
    </div>
  );
}
