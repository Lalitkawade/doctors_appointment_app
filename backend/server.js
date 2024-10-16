// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", // Your React app URL
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

// Store active rooms and their users
const rooms = new Map();

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('join-room', (roomId, username) => {
    console.log(`User ${username} joining room ${roomId}`);
    
    // Create room if it doesn't exist
    if (!rooms.has(roomId)) {
      rooms.set(roomId, new Set());
    }
    
    // Add user to room
    rooms.get(roomId).add({
      id: socket.id,
      username: username
    });
    
    // Join socket room
    socket.join(roomId);
    
    // Get all other users in the room
    const usersInRoom = Array.from(rooms.get(roomId))
      .filter(user => user.id !== socket.id);
    
    // Send existing users cto the joining user
    socket.emit('all-users', usersInRoom);
    
    // Notify others about new user
    socket.to(roomId).emit('user-joined', {
      id: socket.id,
      username: username
    });
  });

  socket.on('sending-signal', payload => {
    io.to(payload.userToSignal).emit('user-joined', { 
      signal: payload.signal, 
      callerID: payload.callerID,
      username: payload.username
    });
  });

  socket.on('returning-signal', payload => {
    io.to(payload.callerID).emit('receiving-returned-signal', { 
      signal: payload.signal, 
      id: socket.id 
    });
  });

  socket.on('disconnect', () => {
    // Remove user from all rooms
    rooms.forEach((users, roomId) => {
      users.forEach(user => {
        if (user.id === socket.id) {
          users.delete(user);
          // Notify others in the room
          socket.to(roomId).emit('user-left', socket.id);
        }
      });
      // Remove room if empty
      if (users.size === 0) {
        rooms.delete(roomId);
      }
    });
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});