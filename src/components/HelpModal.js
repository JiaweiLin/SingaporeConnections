import React from 'react';
import './HelpModal.css';

const HelpModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>How to Play Singapore Connections</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="help-section">
            <h3>🎯 Objective</h3>
            <p>Find groups of 4 words that share a common theme related to Singapore culture, landmarks, food, and local knowledge.</p>
          </div>
          
          <div className="help-section">
            <h3>🎮 How to Play</h3>
            <ul>
              <li>Click on 4 tiles that you think belong together</li>
              <li>When you select 4 tiles, they'll be automatically checked</li>
              <li>If correct, the category will be revealed and those tiles removed</li>
              <li>If incorrect, you'll lose one of your 4 allowed mistakes</li>
              <li>Win by finding all 4 categories before making 4 mistakes</li>
            </ul>
          </div>
          
          <div className="help-section">
            <h3>🌈 Difficulty Levels</h3>
            <div className="difficulty-grid">
              <div className="difficulty-item yellow">
                <span className="difficulty-color"></span>
                <div>
                  <strong>Yellow (Easiest)</strong>
                  <p>Straightforward connections most people would know</p>
                </div>
              </div>
              <div className="difficulty-item green">
                <span className="difficulty-color"></span>
                <div>
                  <strong>Green (Easy-Medium)</strong>
                  <p>Requires some local Singapore knowledge</p>
                </div>
              </div>
              <div className="difficulty-item blue">
                <span className="difficulty-color"></span>
                <div>
                  <strong>Blue (Medium-Hard)</strong>
                  <p>Deeper Singapore knowledge or wordplay required</p>
                </div>
              </div>
              <div className="difficulty-item purple">
                <span className="difficulty-color"></span>
                <div>
                  <strong>Purple (Hardest)</strong>
                  <p>Obscure connections, advanced wordplay, cultural nuances</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="help-section">
            <h3>🇸🇬 Singapore Themes</h3>
            <p>Categories may include:</p>
            <ul>
              <li><strong>Singlish:</strong> Local expressions and slang</li>
              <li><strong>Food:</strong> Hawker dishes, local cuisine</li>
              <li><strong>Places:</strong> MRT stations, landmarks, neighborhoods</li>
              <li><strong>Culture:</strong> Festivals, traditions, heritage</li>
              <li><strong>History:</strong> Important figures and events</li>
              <li><strong>Government:</strong> Agencies, policies, institutions</li>
            </ul>
          </div>
          
          <div className="help-section">
            <h3>💡 Tips</h3>
            <ul>
              <li>Start with the most obvious connections first</li>
              <li>Think about different types of relationships (not just literal)</li>
              <li>Consider Singlish, abbreviations, and local slang</li>
              <li>Use the Shuffle button to see words in a new arrangement</li>
              <li>Don't be afraid to deselect and try different combinations</li>
            </ul>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="close-modal-btn" onClick={onClose}>
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
