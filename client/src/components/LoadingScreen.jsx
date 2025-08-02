import React from 'react';
import { useState, useEffect } from 'react';

function LoadingScreen() {
  return (
    <div className="loading">
      <h1>Word Drift</h1>
      <p>Loading the drift...</p>
    </div>
  );
}

export default LoadingScreen;
