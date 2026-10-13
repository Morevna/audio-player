# Custom Web Audio Player 🎵

A responsive and visually dynamic web audio player built with custom controls, interactive progress tracking, and adaptive backgrounds. Developed as a personal project during the Rolling Scopes School curriculum.

## 🔗 Live Demo
[Launch the Audio Player](https://github.io)

## 🛠️ Tech Stack & Architecture
- **Language:** JavaScript (ES6+)
- **Markup & Styling:** HTML5, CSS3 (BEM methodology), Responsive/Mobile-first Layout
- **Web APIs:** HTML5 Audio API, DOM Manipulation & Event Handling APIs

## 🚀 Key Features Implemented in Code
- **Custom Playback Engine:** Utilizes native `Audio()` objects to implement independent play, pause, next, and previous track logic.
- **Dynamic Content & State Management:** Tracks playlist indices (`currentIndex`), track durations, and current playing states using global state variables.
- **Real-Time Progress Tracking:** Implements high-precision time calculations using asynchronous `setInterval` pools to update progress bars (`<input type="range">`) and current time counters continuously.
- **Cross-Platform Input Handling:** Supports both desktop mouse inputs (`mousedown`/`mouseup`) and mobile touch interfaces (`touchstart`/`touchend`) for seamless interactive scrubbing across progress sliders.
- **Automated Continuous Playback:** Includes an edge-case listener that monitors track completion (`progressFilled.value == duration`) to automatically transition to the next song in the playlist.
- **Immersive UI/UX Visuals:** Dynamically updates cover artwork (`showTrackCover`) and pulls dominant images into the document background (`changeBodyBg`) during runtime based on metadata arrays.
- **Time Formatting Utilities:** Features a time translation function (`fillTimeField`) that dynamically parses seconds into clean, padded `MM:SS` human-readable strings.

## 📂 Playlist Data Structure
The audio engine acts upon a structured JavaScript object array, storing paths to local files and metadata:
```javascript
const playList = [
  {
    artist: "Моя Дорогая",
    title: "Ной",
    duration: 244,
    cover: "image/мояДорогаяНой.jpg",
    audioPath: "audio/Моя Дорогая Ной.mp3",
  },
  // Additional tracks...
];
```
