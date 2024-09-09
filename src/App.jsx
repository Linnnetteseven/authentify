import React from 'react';
import './App.css';

function Apps() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Authentify</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search for art..." />
        </div>
        <nav>
          <ul>
            <li><a href="#">Featured</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Top Artists</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="art-gallery">
          {/* Art pieces will be displayed here */}
          <div className="art-card">
            <img src="https://via.placeholder.com/300x200.png" alt="Artwork" />
            <h3>Artwork Title</h3>
            <p>Artist Name</p>
            <div className="preview">
              <img src="https://via.placeholder.com/50x50.png" alt="Preview" />
            </div>
            <p className="price">Current Price: 0.5 ETH</p>
          </div>
          {/* More art cards will be added here */}
        </div>
      </main>
    </div>
  );
}

export default Apps;
