import React, { useState, useEffect, useRef } from 'react';
import { Camera, Mic, MoreHorizontal, PhoneOff, Copy, Users } from 'lucide-react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
import './VideoCall.css'; // Import the CSS file

const VideoCall = () => {
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isMicOn, setIsMicOn] = useState(true);
  const [stream, setStream] = useState(null);
  const [peers, setPeers] = useState([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [participantCount, setParticipantCount] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState('');

  const socketRef = useRef();
  const userVideo = useRef();
  const peersRef = useRef([]);

  useEffect(() => {
    socketRef.current = io('http://localhost:5000');

    socketRef.current.on('connect', () => {
      console.log('Connected to server');
    });

    socketRef.current.on('connect_error', (error) => {
      setError('Failed to connect to server');
      console.error('Connection error:', error);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleJoinRoom = async () => {
    if (!username || !roomId) {
      setError('Please enter both username and room ID');
      return;
    }

    setIsConnecting(true);
    setError('');

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });
      
      setStream(mediaStream);
      userVideo.current.srcObject = mediaStream;
      setIsCameraOn(true);
      
      socketRef.current.emit('join-room', roomId, username);
      setParticipantCount(prev => prev + 1);
      
    } catch (err) {
      console.error('Error accessing media devices:', err);
      setError('Failed to access camera/microphone');
    } finally {
      setIsConnecting(false);
    }
  };

  const toggleCamera = async () => {
    if (stream) {
      const videoTrack = stream.getVideoTracks()[0];
      videoTrack.enabled = !isCameraOn;
      setIsCameraOn(!isCameraOn);
    }
  };

  const toggleMic = () => {
    if (stream) {
      const audioTrack = stream.getAudioTracks()[0];
      audioTrack.enabled = !isMicOn;
      setIsMicOn(!isMicOn);
    }
  };

  const handleLeaveCall = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    peers.forEach(peer => peer.destroy());
    setPeers([]);
    setStream(null);
    setIsCameraOn(false);
    setIsMicOn(true);
    socketRef.current.emit('leave-room', roomId);
    setParticipantCount(prev => Math.max(0, prev - 1));
  };

  const copyLink = () => {
    const shareLink = `${window.location.origin}/video-call/${roomId}`;
    navigator.clipboard.writeText(shareLink);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="video-call-container">
      {/* Main content */}
      <div className="content">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        <div className="grid">
          {/* Video area */}
          <div className="video-area">
            {isConnecting && (
              <div className="connecting-overlay">
                <div className="loading-spinner"></div>
                <span>Connecting...</span>
              </div>
            )}
            
            {!isCameraOn && !isConnecting && (
              <div className="camera-off-message">
                Camera is off
              </div>
            )}
            
            <video
              ref={userVideo}
              autoPlay
              playsInline
              muted
              className={`video ${!isCameraOn ? 'hidden' : ''}`}
            />
            
            {/* Participant count */}
            <div className="participant-count">
              <Users size={16} className="participant-icon" />
              <span>{participantCount}</span>
            </div>
            
            {/* Controls */}
            <div className="controls">
              <button 
                className={`control-button ${isCameraOn ? 'camera-on' : 'camera-off'}`}
                onClick={toggleCamera}
              >
                <Camera size={20} />
              </button>
              <button 
                className={`control-button ${isMicOn ? 'mic-on' : 'mic-off'}`}
                onClick={toggleMic}
              >
                <Mic size={20} />
              </button>
              <button 
                className="control-button leave-call"
                onClick={handleLeaveCall}
              >
                <PhoneOff size={20} />
              </button>
            </div>
          </div>

          {/* Join Room and Share Link section */}
          <div className="join-room">
            <h2 className="join-room-title">Join Room</h2>
            <div className="join-room-inputs">
              <input
                type="text"
                placeholder="userName2043"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
                disabled={isConnecting}
              />
              <input
                type="text"
                placeholder="Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="input"
                disabled={isConnecting}
              />
              <button 
                className={`join-button ${isConnecting ? 'disabled' : ''}`}
                onClick={handleJoinRoom}
                disabled={isConnecting}
              >
                {isConnecting ? 'Connecting...' : 'Join'}
              </button>
            </div>

            <div className="share-link">
              <h3 className="share-link-title">Share the link</h3>
              <div className="share-link-container">
                <input
                  readOnly
                  value={`http://localhost:3000/video-call/${roomId}`}
                  className="share-input"
                />
                <button
                  className="copy-button"
                  onClick={copyLink}
                >
                  <Copy size={16} />
                  {copySuccess ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
