'use strict';

// Playlist 1 + 2 & Playlists
const myPlaylist_1 = [
  {
    bandName: 'Band Name 1',
    songTitle: 'Song 1',
    songFile: './audio/Song_1.mp3',
    songImage: './images/Song_1.jpg',
  },
  {
    bandName: 'Band Name 2',
    songTitle: 'Song 2',
    songFile: './audio/Song_2.mp3',
    songImage: './images/Song_2.jpg',
  },
];

const myPlaylist_2 = [
  {
    bandName: 'Band Name 3',
    songTitle: 'Song 3',
    songFile: './audio/Song_3.mp3',
    songImage: './images/Song_3.jpg',
  },
  {
    bandName: 'Band Name 4',
    songTitle: 'Song 4',
    songFile: './audio/Song_4.mp3',
    songImage: './images/Song_4.jpg',
  },
  {
    bandName: 'Band Name 5',
    songTitle: 'Song 5',
    songFile: './audio/Song_5.mp3',
    songImage: './images/Song_5.jpg',
  },
  {
    bandName: 'Band Name 6',
    songTitle: 'Song 6',
    songFile: './audio/Song_6.mp3',
    songImage: './images/Song_6.jpg',
  },
];

const myPlaylists = {
  'playlist 1': myPlaylist_1,
  'playlist 2': myPlaylist_2,
};

// =======================================
// Player default
// =======================================
const playerDefault = document.querySelector('frissbee-audio-player.player-default');
playerDefault.playlist = myPlaylist_1;

// =======================================
// Player with preset "dark"
// =======================================
const playerPresetDark = document.querySelector('frissbee-audio-player.player-preset-dark');
playerPresetDark.playlist = myPlaylist_1;

// =======================================
// Player default with multiple playlists
// =======================================
const playerWithPlaylists = document.querySelector('frissbee-audio-player.player-with-playlists');
playerWithPlaylists.playlists = myPlaylists;

// =======================================
// Player default with changed one attribute
// =======================================
const playerDefaultWithChangedOneAttribute = document.querySelector('frissbee-audio-player.player-default-with-changed-one-attribute');
playerDefaultWithChangedOneAttribute.playlist = myPlaylist_1;

// =======================================
// Player with changed all attributes
// =======================================
const playerWithChangedAllAttributes = document.querySelector('frissbee-audio-player.player-with-changed-all-attributes');
playerWithChangedAllAttributes.playlist = myPlaylist_1;

// =======================================
// Player with preset "dark-red" and with a changed attribute (volume-start) with setting by JavaScript
// =======================================
const playerDarkredWithJavascript = document.querySelector('frissbee-audio-player.player-with-javascript');
playerDarkredWithJavascript.playlist = myPlaylist_1;
playerDarkredWithJavascript.setAttribute('preset', 'dark-red');
playerDarkredWithJavascript.setAttribute('volume-start', '100');

// =======================================
// Player with own presets
// =======================================
const myCustomPresets = {
  'crazy-blue': {
    'bg-color': '#8ad1f5',
    'color-text-playerbar': '#0040ff',
    'font-band-name': "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    'font-song-title': "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    'color-slider': '#668cff',
    'color-play-pause': '#735492',
    'color-buttons': '#8972df',
    'height-playlist': 'auto',
    'on-off-playlist': 'on',
    'volume-start': '26',
    'color-playlist-text-inactive': '#213fd4',
    'color-playlist-text-active': '#132371',
    'color-playlist-bg-inactive': '#b1c6f2',
    'color-playlist-bg-active': '#dfe8fb',
    'shadow-player': 'off',
  },
};
const playerWithOwnPresets = document.querySelector('frissbee-audio-player.player-with-own-presets');

// The order is important!

// 1. set the custom preset datas
playerWithOwnPresets.customPresets = myCustomPresets;
// 2. set the attribute "preset" with your desired value
playerWithOwnPresets.setAttribute('preset', 'crazy-blue');
// 3. set the playlist datas (as the last one!)
playerWithOwnPresets.playlist = myPlaylist_1;
