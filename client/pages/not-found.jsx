import React from 'react';

export default function NotFound() {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <div className="m-auto text-center">
        <h1>
          <span className="text-danger">404</span> - Page Not Found
        </h1>
        <a href="#">Return Home</a>
      </div>
    </div>
  );
}
