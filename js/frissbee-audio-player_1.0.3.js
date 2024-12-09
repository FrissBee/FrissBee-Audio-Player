'use strict';
(() => {
  const template = document.createElement('template');

  template.innerHTML = /*html*/ `
  <style>

  div{
    line-height: 1;
  }

  div.container-player{
    width: 100%;
    padding: 4px;
    box-sizing: border-box;
  }

  div.container-player-transition {
    transition: all 1500ms;
  }

  div.container-top{
    display: flex;
    width: 100%;
  }

  div.preview-image{
    height: 120px;
    min-width: 120px;
    background-color: #d3d3d3;
    text-align: center;
    background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/></svg>');
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center;
  }

  div.container-player, div.preview-image, div.playlist-song{
    border: 1px solid #999999;
  }

  svg{
    height: 22px;
    cursor: pointer;
  }

  svg.backward, svg.play, svg.pause, svg.forward, svg.random, svg.rotate {
    margin-right: 4px;
  }

  svg.random{
    margin-left: 16px;
  }

  svg.music{
    fill: #f2f2f2;
    height: 40px;
    cursor: default;
    margin-top: 40px;
  }

  svg.list{
    margin-left: 8px;
  }

  div.playlist-image-list{
    height: auto;
    width: auto;
    padding: 6px 8px 6px 6px;
    background-color: #d3d3d3;
  }

  svg.music-list{
    fill: #f2f2f2;
    height: 14px;
    cursor: default;
    
  }

  div.container-bar{
    width: 100%;
    padding: 0 8px 0 8px;
    position: relative;
  }

  div.band-name{
    font-size: 12px;
    margin-bottom: 8px;
  }

  div.song-title{
    font-size: 18px;
    margin-bottom: 4px;
  }

  div.button-bar{
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0px;
    padding: 0px;
  }

  div.player-buttons{
    text-align: left;
  }

  div.container-list{
    text-align:right;
    display:flex;
  }

  input.song-slider{
    width: 100%;
  }

  input.volume-slider{
    width: 140px;
  }

  input[type="range"]{
    height: 5px;
    border-radius: 10px; 
    padding: 0px;
    cursor: pointer;
    -webkit-appearance: none;
    outline: none;
    margin: 5px 0 5px 0;
  }

  input[type="range"]::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: #b9b9b9;
    border-radius: 10px;
    border: 1px solid #ffffff;
  }

  input[type="range"]::-moz-range-thumb{
    width: 10px;
    height: 10px;
    background: #b9b9b9;
    border-radius: 10px;
    border: 1px solid #ffffff;
  }

  div.container-time{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  div.time-start, div.time-end{
    font-size: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  div.playlist-song{
    display: flex;
    height: 30px;
    margin: 4px 0 0 0;
    font-size: 12px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    cursor: pointer;
    text-align: left;
  }

  div.playlist-song:hover{
    opacity: 0.8;
  }

  img.playlist-image{
    height: auto;
    width: auto;
  }

  div.playlist-song-title{
    margin: auto 8px;
  }

  div.container-playlist{
    overflow: auto;
    margin-top: 10px;
  }

  img.playerbar-image{
    height: 100%;
    width: auto;
  }

  .shadow-player{
    box-shadow: 0 0 18px #727272a4;
    -webkit-box-shadow: 0 0 18px #727272a4;
    -moz-box-shadow: 0 0 18px #727272a4
  }

  .no-audio-datas{
    color: #229ccc;
    text-align: center;
    padding: 8px;
    background-color: #ffffff;
  }

  .container-band-title{
    display: flex;
    justify-content: space-between;
  }

  .disco-effect{
    height: 12px;
    width: 12px;
    border: 1px solid #737373;
    border-radius: 12px;
    cursor: pointer;
    right: 0px;
    position: absolute;
    background-image: radial-gradient(circle, #9e9e9e, #212121);
  }

  div.container-select{
    margin-right: 8px;
  }

  select.multi-playlists{
    position: relative;
    width: 100px;
    height: 24px;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding-top: 0.1rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    font-size: 12px;
    outline: none;
    display: none;
  }

  .text-left{
    text-align: left;
  }

  @media screen and (max-width: 480px){
    div.container-top{
      display: block;
    }

    div.container-bar{
      width: auto;
    }

    div.band-name{
      margin-top: 10px;
    }

    div.band-name, div.song-title{
      text-align:center;
    }

    div.preview-image{
      width: 120px;
      margin: 0 auto;
    }

    div.preview-image, img.playerbar-image {
      border-radius: 120px;
    }

    div.preview-image {
      margin-top: -60px;
    }

    div.container-player{
      margin-top: 60px;
    }
  }

  @media screen and ( max-width: 360px){
    div.button-bar{
      position: relative;
      display: block;
    }

    div.container-list{
      margin: 8px 0;
      justify-content: right;
    }
  }

  </style>

  <div class="container-player">
    <div class="container-top">
      <div class="preview-image">
        <img class="playerbar-image" src="" alt="" />
      </div>
      <div class="container-bar">
        <div class="disco-effect" title="Disco Effect"></div>
        <div class="text-left band-name"></div>
        <div class="text-left song-title" style="text-align: left"></div>
        <input class="song-slider" type="range" name="song-slider" step="1" min="0" max="100" value="0" title="">
        <div class="container-time">
          <div class="time-start">00:00</div>
          <div class="time-end">- 00:00</div>
        </div>
        <div class="button-bar">
          <div class="player-buttons">
            <svg xmlns="http://www.w3.org/2000/svg" class="backward" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"/><title>previous Audio</title></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="play" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/><title>play Audio</title></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="pause" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/><title>pause Audio</title></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="forward" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"/><title>next Audio</title></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="random" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"/><title>random Audio</title></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="rotate" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/><title>repeat Playlist</title></svg>
          </div>
          <div class="container-list">
            <div class="container-select">
              <select class="multi-playlists" title="presets" name="multi-playlists"></select>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="list" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/><title>on/off Playlist</title></svg>
          </div>
        </div>
        <div class="text-left">
          <input class="volume-slider" type="range" name="volume" step="0.01" min="0" max="1" title="Volume" >
        </div>
      </div>
    </div>
    <div class="container-playlist"></div>
  </div>
  `;

  class FrissBeeAudioPlayer extends HTMLElement {
    #default = {
      'bg-color': '#f7f7f7',
      'color-text-playerbar': '#3d3d3d',
      'font-band-name': 'Verdana',
      'font-song-title': 'Verdana',
      'color-slider': '#931a1a',
      'color-play-pause': '#931a1a',
      'color-buttons': '#2b2b2b',
      'height-playlist': 'auto',
      'on-off-playlist': 'on',
      'volume-start': '50',
      'color-playlist-text-inactive': '#2b2b2b',
      'color-playlist-text-active': '#efefef',
      'color-playlist-bg-inactive': '#83bfea',
      'color-playlist-bg-active': '#931a1a',
      'shadow-player': 'off',
    };

    #presets = {
      default: this.#default,
      light: this.#default,
      'light-shadow': {
        'bg-color': '#f7f7f7',
        'color-text-playerbar': '#3d3d3d',
        'font-band-name': 'Verdana',
        'font-song-title': 'Verdana',
        'color-slider': '#931a1a',
        'color-play-pause': '#931a1a',
        'color-buttons': '#2b2b2b',
        'height-playlist': 'auto',
        'on-off-playlist': 'on',
        'volume-start': '50',
        'color-playlist-text-inactive': '#2b2b2b',
        'color-playlist-text-active': '#efefef',
        'color-playlist-bg-inactive': '#83bfea',
        'color-playlist-bg-active': '#931a1a',
        'shadow-player': 'on',
      },
      'light-sm': {
        'bg-color': '#f7f7f7',
        'color-text-playerbar': '#3d3d3d',
        'font-band-name': 'Verdana',
        'font-song-title': 'Verdana',
        'color-slider': '#931a1a',
        'color-play-pause': '#931a1a',
        'color-buttons': '#2b2b2b',
        'height-playlist': 'auto',
        'on-off-playlist': 'off',
        'volume-start': '50',
        'color-playlist-text-inactive': '#2b2b2b',
        'color-playlist-text-active': '#efefef',
        'color-playlist-bg-inactive': '#83bfea',
        'color-playlist-bg-active': '#931a1a',
        'shadow-player': 'off',
      },
      'light-sm-shadow': {
        'bg-color': '#f7f7f7',
        'color-text-playerbar': '#3d3d3d',
        'font-band-name': 'Verdana',
        'font-song-title': 'Verdana',
        'color-slider': '#931a1a',
        'color-play-pause': '#931a1a',
        'color-buttons': '#2b2b2b',
        'height-playlist': 'auto',
        'on-off-playlist': 'off',
        'volume-start': '50',
        'color-playlist-text-inactive': '#2b2b2b',
        'color-playlist-text-active': '#efefef',
        'color-playlist-bg-inactive': '#83bfea',
        'color-playlist-bg-active': '#931a1a',
        'shadow-player': 'on',
      },
      white: {
        'bg-color': '#ffffff',
        'color-text-playerbar': '#616161',
        'font-band-name': 'Verdana, Geneva, Tahoma, sans-serif',
        'font-song-title': "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        'color-slider': '#949494',
        'color-play-pause': '#6b6b6b',
        'color-buttons': '#9e9e9e',
        'height-playlist': 'auto',
        'on-off-playlist': 'on',
        'volume-start': '50',
        'color-playlist-text-inactive': '#575757',
        'color-playlist-text-active': '#ffffff',
        'color-playlist-bg-inactive': '#ededed',
        'color-playlist-bg-active': '#9e9e9e',
        'shadow-player': 'off',
      },
      'white-shadow': {
        'bg-color': '#ffffff',
        'color-text-playerbar': '#616161',
        'font-band-name': 'Verdana, Geneva, Tahoma, sans-serif',
        'font-song-title': "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        'color-slider': '#949494',
        'color-play-pause': '#6b6b6b',
        'color-buttons': '#9e9e9e',
        'height-playlist': 'auto',
        'on-off-playlist': 'on',
        'volume-start': '50',
        'color-playlist-text-inactive': '#575757',
        'color-playlist-text-active': '#ffffff',
        'color-playlist-bg-inactive': '#ededed',
        'color-playlist-bg-active': '#9e9e9e',
        'shadow-player': 'on',
      },
      'white-sm': {
        'bg-color': '#ffffff',
        'color-text-playerbar': '#616161',
        'font-band-name': 'Verdana, Geneva, Tahoma, sans-serif',
        'font-song-title': "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        'color-slider': '#949494',
        'color-play-pause': '#6b6b6b',
        'color-buttons': '#9e9e9e',
        'height-playlist': 'auto',
        'on-off-playlist': 'off',
        'volume-start': '50',
        'color-playlist-text-inactive': '#575757',
        'color-playlist-text-active': '#ffffff',
        'color-playlist-bg-inactive': '#ededed',
        'color-playlist-bg-active': '#9e9e9e',
        'shadow-player': 'off',
      },
      'white-sm-shadow': {
        'bg-color': '#ffffff',
        'color-text-playerbar': '#616161',
        'font-band-name': 'Verdana, Geneva, Tahoma, sans-serif',
        'font-song-title': "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        'color-slider': '#949494',
        'color-play-pause': '#6b6b6b',
        'color-buttons': '#9e9e9e',
        'height-playlist': 'auto',
        'on-off-playlist': 'off',
        'volume-start': '50',
        'color-playlist-text-inactive': '#575757',
        'color-playlist-text-active': '#ffffff',
        'color-playlist-bg-inactive': '#ededed',
        'color-playlist-bg-active': '#9e9e9e',
        'shadow-player': 'on',
      },
      dark: {
        'bg-color': '#262626',
        'color-text-playerbar': '#c9c9c9',
        'font-band-name': 'Verdana, Geneva, Tahoma, sans-serif',
        'font-song-title': "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        'color-slider': '#616161',
        'color-play-pause': '#c9c9c9',
        'color-buttons': '#808080',
        'height-playlist': 'auto',
        'on-off-playlist': 'on',
        'volume-start': '50',
        'color-playlist-text-inactive': '#b3b3b3',
        'color-playlist-text-active': '#1a1a1a',
        'color-playlist-bg-inactive': '#454545',
        'color-playlist-bg-active': '#808080',
        'shadow-player': 'off',
      },
      'dark-shadow': {
        'bg-color': '#262626',
        'color-text-playerbar': '#c9c9c9',
        'font-band-name': 'Verdana, Geneva, Tahoma, sans-serif',
        'font-song-title': "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        'color-slider': '#616161',
        'color-play-pause': '#c9c9c9',
        'color-buttons': '#808080',
        'height-playlist': 'auto',
        'on-off-playlist': 'on',
        'volume-start': '50',
        'color-playlist-text-inactive': '#b3b3b3',
        'color-playlist-text-active': '#1a1a1a',
        'color-playlist-bg-inactive': '#454545',
        'color-playlist-bg-active': '#808080',
        'shadow-player': 'on',
      },
      'dark-sm': {
        'bg-color': '#262626',
        'color-text-playerbar': '#c9c9c9',
        'font-band-name': 'Verdana, Geneva, Tahoma, sans-serif',
        'font-song-title': "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        'color-slider': '#616161',
        'color-play-pause': '#c9c9c9',
        'color-buttons': '#808080',
        'height-playlist': 'auto',
        'on-off-playlist': 'off',
        'volume-start': '50',
        'color-playlist-text-inactive': '#b3b3b3',
        'color-playlist-text-active': '#1a1a1a',
        'color-playlist-bg-inactive': '#454545',
        'color-playlist-bg-active': '#808080',
        'shadow-player': 'off',
      },
      'dark-sm-shadow': {
        'bg-color': '#262626',
        'color-text-playerbar': '#c9c9c9',
        'font-band-name': 'Verdana, Geneva, Tahoma, sans-serif',
        'font-song-title': "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
        'color-slider': '#616161',
        'color-play-pause': '#c9c9c9',
        'color-buttons': '#808080',
        'height-playlist': 'auto',
        'on-off-playlist': 'off',
        'volume-start': '50',
        'color-playlist-text-inactive': '#b3b3b3',
        'color-playlist-text-active': '#1a1a1a',
        'color-playlist-bg-inactive': '#454545',
        'color-playlist-bg-active': '#808080',
        'shadow-player': 'on',
      },
      neon: {
        'bg-color': '#000000',
        'color-text-playerbar': '#e5351d',
        'font-band-name': 'Impact',
        'font-song-title': 'Impact',
        'color-slider': '#1a9322',
        'color-play-pause': '#1a2e93',
        'color-buttons': '#ccd822',
        'height-playlist': 'auto',
        'on-off-playlist': 'on',
        'volume-start': '50',
        'color-playlist-text-inactive': '#e2e2e2',
        'color-playlist-text-active': '#353535',
        'color-playlist-bg-inactive': '#217f16',
        'color-playlist-bg-active': '#60b556',
        'shadow-player': 'off',
      },
      'neon-shadow': {
        'bg-color': '#000000',
        'color-text-playerbar': '#e5351d',
        'font-band-name': 'Impact',
        'font-song-title': 'Impact',
        'color-slider': '#1a9322',
        'color-play-pause': '#1a2e93',
        'color-buttons': '#ccd822',
        'height-playlist': 'auto',
        'on-off-playlist': 'on',
        'volume-start': '50',
        'color-playlist-text-inactive': '#e2e2e2',
        'color-playlist-text-active': '#353535',
        'color-playlist-bg-inactive': '#217f16',
        'color-playlist-bg-active': '#60b556',
        'shadow-player': 'on',
      },
      'neon-sm': {
        'bg-color': '#000000',
        'color-text-playerbar': '#e5351d',
        'font-band-name': 'Impact',
        'font-song-title': 'Impact',
        'color-slider': '#1a9322',
        'color-play-pause': '#1a2e93',
        'color-buttons': '#ccd822',
        'height-playlist': 'auto',
        'on-off-playlist': 'off',
        'volume-start': '50',
        'color-playlist-text-inactive': '#e2e2e2',
        'color-playlist-text-active': '#353535',
        'color-playlist-bg-inactive': '#217f16',
        'color-playlist-bg-active': '#60b556',
        'shadow-player': 'off',
      },
      'neon-sm-shadow': {
        'bg-color': '#000000',
        'color-text-playerbar': '#e5351d',
        'font-band-name': 'Impact',
        'font-song-title': 'Impact',
        'color-slider': '#1a9322',
        'color-play-pause': '#1a2e93',
        'color-buttons': '#ccd822',
        'height-playlist': 'auto',
        'on-off-playlist': 'off',
        'volume-start': '50',
        'color-playlist-text-inactive': '#e2e2e2',
        'color-playlist-text-active': '#353535',
        'color-playlist-bg-inactive': '#217f16',
        'color-playlist-bg-active': '#60b556',
        'shadow-player': 'on',
      },
      red: {
        'bg-color': '#8e2626',
        'color-text-playerbar': '#ffffff',
        'font-band-name': 'Verdana, Geneva, Tahoma, sans-serif',
        'font-song-title': 'Verdana, Geneva, Tahoma, sans-serif',
        'color-slider': '#b0b0b0',
        'color-play-pause': '#ffffff',
        'color-buttons': '#bababa',
        'height-playlist': 'auto',
        'on-off-playlist': 'on',
        'volume-start': '50',
        'color-playlist-text-inactive': '#dedede',
        'color-playlist-text-active': '#ffffff',
        'color-playlist-bg-inactive': '#454545',
        'color-playlist-bg-active': '#963636',
        'shadow-player': 'off',
      },
      'red-shadow': {
        'bg-color': '#8e2626',
        'color-text-playerbar': '#ffffff',
        'font-band-name': 'Verdana, Geneva, Tahoma, sans-serif',
        'font-song-title': 'Verdana, Geneva, Tahoma, sans-serif',
        'color-slider': '#b0b0b0',
        'color-play-pause': '#ffffff',
        'color-buttons': '#bababa',
        'height-playlist': 'auto',
        'on-off-playlist': 'on',
        'volume-start': '50',
        'color-playlist-text-inactive': '#dedede',
        'color-playlist-text-active': '#ffffff',
        'color-playlist-bg-inactive': '#454545',
        'color-playlist-bg-active': '#963636',
        'shadow-player': 'on',
      },
      'red-sm': {
        'bg-color': '#8e2626',
        'color-text-playerbar': '#ffffff',
        'font-band-name': 'Verdana, Geneva, Tahoma, sans-serif',
        'font-song-title': 'Verdana, Geneva, Tahoma, sans-serif',
        'color-slider': '#b0b0b0',
        'color-play-pause': '#ffffff',
        'color-buttons': '#bababa',
        'height-playlist': 'auto',
        'on-off-playlist': 'off',
        'volume-start': '50',
        'color-playlist-text-inactive': '#dedede',
        'color-playlist-text-active': '#ffffff',
        'color-playlist-bg-inactive': '#454545',
        'color-playlist-bg-active': '#963636',
        'shadow-player': 'off',
      },
      'red-sm-shadow': {
        'bg-color': '#8e2626',
        'color-text-playerbar': '#ffffff',
        'font-band-name': 'Verdana, Geneva, Tahoma, sans-serif',
        'font-song-title': 'Verdana, Geneva, Tahoma, sans-serif',
        'color-slider': '#b0b0b0',
        'color-play-pause': '#ffffff',
        'color-buttons': '#bababa',
        'height-playlist': 'auto',
        'on-off-playlist': 'off',
        'volume-start': '50',
        'color-playlist-text-inactive': '#dedede',
        'color-playlist-text-active': '#ffffff',
        'color-playlist-bg-inactive': '#454545',
        'color-playlist-bg-active': '#963636',
        'shadow-player': 'on',
      },
    };

    #root = null;
    #DOM = {};
    #audio = new Audio();
    #onOffPlaylist = false;
    #discoEffectOnOff = false;
    #intervalDiscoEffect = null;
    #intervalPlay = null;
    #currentSongElement = null;
    #currentSongIndex = 0;
    #onOffRepeat = false;
    #onOffRandom = false;
    #randomAudioIndexes = [];
    #state = {
      playlist: false,
      playlists: false,
      customPresets: false,
    };
    #opacity = '0.6';

    // ==========================
    // Getter & Setter
    // ==========================
    get getdefaultPresetsNames() {
      return Object.keys(this.#presets).slice(1);
    }

    get customPresets() {
      return this.#state.customPresets;
    }

    set customPresets(value) {
      this.#state.customPresets = value;
      this.#presets = value;
    }

    get playlist() {
      return this.#state.playlist;
    }

    set playlist(value) {
      this.#state.playlist = value;
      this.#setPlaylistToStart();
    }

    get playlists() {
      return this.#state.playlists;
    }

    set playlists(value) {
      this.#state.playlists = value;
      this.#setSelectPlaylists();
    }

    constructor() {
      super();
      this.#root = this.attachShadow({ mode: 'closed' });
      this.#root.appendChild(template.content.cloneNode(true));
      this.#selectAllDomElements();
    }

    connectedCallback() {
      this.#checkAttributePreset();
      this.#setNoAudioDatas();
      this.#addEvents();
    }

    static get observedAttributes() {
      return [
        'bg-color',
        'color-text-playerbar',
        'font-band-name',
        'font-song-title',
        'color-slider',
        'color-play-pause',
        'color-buttons',
        'height-playlist',
        'on-off-playlist',
        'volume-start',
        'color-playlist-text-inactive',
        'color-playlist-bg-inactive',
        'shadow-player',
        'playlist',
        'preset',
      ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'bg-color') {
        this.#DOM.containerPlayer.style.backgroundColor = newValue;
        this.#DOM.selectPlaylists.style.backgroundColor = newValue;
      }

      if (name === 'color-text-playerbar') {
        this.#DOM.containerBar.style.color = newValue;
        this.#DOM.selectPlaylists.style.color = newValue;
      }

      if (name === 'font-band-name') {
        this.#DOM.bandName.style.fontFamily = newValue;
      }

      if (name === 'font-song-title') {
        this.#DOM.songTitle.style.fontFamily = newValue;
      }

      if (name === 'color-slider') {
        this.#DOM.allInputRange.forEach((element) => {
          element.style.backgroundColor = newValue;
        });
      }

      if (name === 'color-play-pause') {
        this.#DOM.svgPause.style.fill = newValue;
        this.#DOM.svgPlay.style.fill = newValue;
      }

      if (name === 'color-buttons') {
        this.#DOM.svgBackward.style.fill = newValue;
        this.#DOM.svgForward.style.fill = newValue;
        this.#DOM.svgRandom.style.fill = newValue;
        this.#DOM.svgRotate.style.fill = newValue;
        this.#DOM.svgList.style.fill = newValue;
      }

      if (name === 'height-playlist') {
        this.#DOM.containerPlaylist.style.height = newValue;
      }

      if (name === 'on-off-playlist') {
        if (this.getAttribute('on-off-playlist') === 'on') {
          this.#onOffPlaylist = false;
          this.#setOnOffPlaylist();
        } else {
          this.#onOffPlaylist = true;
          this.#setOnOffPlaylist();
        }
      }

      if (name === 'volume-start') {
        this.#DOM.volumeSlider.value = Number(newValue) / 100;
      }

      if (name === 'color-playlist-text-inactive') {
        this.#DOM.allPlaylistSongs.forEach((element) => {
          element.style.color = newValue;
        });
      }

      if (name === 'color-playlist-bg-inactive') {
        this.#DOM.allPlaylistSongs.forEach((element) => {
          element.style.backgroundColor = newValue;
        });
      }

      if (name === 'shadow-player') {
        if (this.getAttribute('shadow-player') === 'on') {
          this.#DOM.containerPlayer.classList.add('shadow-player');
        } else {
          this.#DOM.containerPlayer.classList.remove('shadow-player');
        }
      }

      if (name === 'preset') {
        this.#DOM.containerPlayer.classList.remove('shadow-player');
        this.#setSettings();
      }
    }

    // ==============================
    // Select DOM
    // ==============================
    #selectAllDomElements() {
      // Playerbar
      this.#DOM.containerPlayer = this.#root.querySelector('div.container-player');
      this.#DOM.containerBar = this.#root.querySelector('div.container-bar');
      this.#DOM.bandName = this.#DOM.containerBar.querySelector('div.band-name');
      this.#DOM.songTitle = this.#DOM.containerBar.querySelector('div.song-title');
      this.#DOM.allInputRange = this.#DOM.containerBar.querySelectorAll('input[type="range"]');
      this.#DOM.svgPlay = this.#DOM.containerBar.querySelector('svg.play');
      this.#DOM.svgPause = this.#DOM.containerBar.querySelector('svg.pause');
      this.#DOM.svgBackward = this.#DOM.containerBar.querySelector('svg.backward');
      this.#DOM.svgForward = this.#DOM.containerBar.querySelector('svg.forward');
      this.#DOM.svgRandom = this.#DOM.containerBar.querySelector('svg.random');
      this.#DOM.svgRotate = this.#DOM.containerBar.querySelector('svg.rotate');
      this.#DOM.svgList = this.#DOM.containerBar.querySelector('svg.list');
      this.#DOM.songSlider = this.#DOM.containerBar.querySelector('input.song-slider');
      this.#DOM.volumeSlider = this.#DOM.containerBar.querySelector('input.volume-slider');
      this.#DOM.playerbarImage = this.#root.querySelector('img.playerbar-image');
      this.#DOM.timeStart = this.#DOM.containerBar.querySelector('div.time-start');
      this.#DOM.timeEnd = this.#DOM.containerBar.querySelector('div.time-end');
      this.#DOM.discoEffect = this.#DOM.containerBar.querySelector('div.disco-effect');
      this.#DOM.selectPlaylists = this.#DOM.containerBar.querySelector('select.multi-playlists');
      // Playlist
      this.#DOM.containerPlaylist = this.#root.querySelector('div.container-playlist');
      this.#DOM.allPlaylistSongs = [];
    }

    // ==============================
    // connectedCallback Methodes
    // ==============================
    #checkAttributePreset() {
      // Ist das Attribute "preset" nicht gesetzt, oder das angegebene nicht in der Liste, so wird das "default" Preset gesetzt
      if (!this.hasAttribute('preset') || Object.keys(this.#presets).includes(this.getAttribute('preset')) === false) {
        this.setAttribute('preset', 'default');
      }
    }

    #setNoAudioDatas() {
      this.#DOM.containerPlaylist.innerHTML = /* html */ `<p class="no-audio-datas">No audio data could be loaded.</p>`;
    }

    // ==============================
    // SETTINGS
    // ==============================
    #attributeOrPreset(preset, attr) {
      return this.hasAttribute(attr) ? this.getAttribute(attr) : preset[attr];
    }

    #setSettings() {
      const preset = this.#presets[this.getAttribute('preset')];

      // Opacity of svg radmom & rotate
      this.#setElementToOpacity(this.#DOM.svgRandom);
      this.#setElementToOpacity(this.#DOM.svgRotate);

      // bg-color
      this.#DOM.containerPlayer.style.backgroundColor = this.#attributeOrPreset(preset, 'bg-color');

      // Select Multi Playlists BG
      this.#DOM.selectPlaylists.style.backgroundColor = this.#DOM.containerPlayer.style.backgroundColor;

      // color-text-playerbar
      this.#DOM.containerBar.style.color = this.#attributeOrPreset(preset, 'color-text-playerbar');

      // Select Multi Plalists Text Color
      this.#DOM.selectPlaylists.style.color = this.#DOM.containerBar.style.color;

      // font-band-name
      this.#DOM.bandName.style.fontFamily = this.#attributeOrPreset(preset, 'font-band-name');

      // font-song-title
      this.#DOM.songTitle.style.fontFamily = this.#attributeOrPreset(preset, 'font-song-title');

      // color-slider
      this.#DOM.allInputRange.forEach((element) => {
        element.style.backgroundColor = this.#attributeOrPreset(preset, 'color-slider');
      });

      // color-play-pause
      this.#DOM.svgPause.style.fill = this.#DOM.svgPlay.style.fill = this.#attributeOrPreset(preset, 'color-play-pause');

      // color-buttons
      const colorButtons = this.#attributeOrPreset(preset, 'color-buttons');
      this.#DOM.svgBackward.style.fill = colorButtons;
      this.#DOM.svgForward.style.fill = colorButtons;
      this.#DOM.svgRandom.style.fill = colorButtons;
      this.#DOM.svgRotate.style.fill = colorButtons;
      this.#DOM.svgList.style.fill = colorButtons;

      // height-playlist
      this.#DOM.containerPlaylist.style.height = this.#attributeOrPreset(preset, 'height-playlist');

      // on-off-playlist
      if (this.hasAttribute('on-off-playlist') === true) {
        if (this.getAttribute('on-off-playlist') === 'on') {
          this.#onOffPlaylist = false;
          this.#setOnOffPlaylist();
        } else {
          this.#onOffPlaylist = true;
          this.#setOnOffPlaylist();
        }
      } else {
        if (preset['on-off-playlist'] === 'on') {
          this.#onOffPlaylist = false;
          this.#setOnOffPlaylist();
        } else {
          this.#onOffPlaylist = true;
          this.#setOnOffPlaylist();
        }
      }

      // volume-start & this.#audio.volume
      const volumeSliderValue = this.hasAttribute('volume-start')
        ? Number(this.getAttribute('volume-start')) / 100
        : Number(preset['volume-start']) / 100;
      this.#DOM.volumeSlider.value = volumeSliderValue;
      this.#audio.volume = volumeSliderValue;

      // color-playlist-text-inactive & color-playlist-bg-inactive
      this.#DOM.allPlaylistSongs.forEach((element) => {
        element.style.color = this.#attributeOrPreset(preset, 'color-playlist-text-inactive');
        element.style.backgroundColor = this.#attributeOrPreset(preset, 'color-playlist-bg-inactive');
      });

      // shadow-player
      if (this.hasAttribute('shadow-player')) {
        if (this.getAttribute('shadow-player') === 'on') {
          this.#DOM.containerPlayer.classList.add('shadow-player');
        }
      } else {
        if (preset['shadow-player'] === 'on') {
          this.#DOM.containerPlayer.classList.add('shadow-player');
        }
      }
    }

    // ==============================
    // Playlist
    // ==============================
    #showPlaylist() {
      let result = '';

      this.playlist.forEach((element, index) => {
        if (element.songImage.trim() !== '') {
          result += /* html */ `
            <div class="playlist-song" data-index="${index}">
              <img class="playlist-image" src="${element.songImage}" alt="${element.bandName} - ${element.songTitle}" />
              <div class="playlist-song-title">${index + 1}. <b>${element.bandName}</b> - ${element.songTitle}</div>
            </div>
          `;
        } else {
          result += /* html */ `
              <div class="playlist-song" data-index="${index}">
                <div class="playlist-image-list">
                  <svg xmlns="http://www.w3.org/2000/svg" class="music-list" viewBox="0 0 512 512"><path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/>
                  </svg>
                </div>
              <div class="playlist-song-title">
                ${index + 1}. <b>${element.bandName}</b> - ${element.songTitle}
              </div>
            </div>
          `;
        }
      });

      return result;
    }

    #showPlaylists() {
      const result = Object.keys(this.playlists).map((value) => /* html */ `<option value="${value}">${value}</option>`);
      return result.join();
    }

    #setPlaylistStyle() {
      const preset = this.getAttribute('preset');

      this.#DOM.allPlaylistSongs.forEach((element) => {
        element.style.color = this.hasAttribute('color-playlist-text-inactive')
          ? this.getAttribute('color-playlist-text-inactive')
          : this.#presets[preset]['color-playlist-text-inactive'];

        element.style.backgroundColor = this.hasAttribute('color-playlist-bg-inactive')
          ? this.getAttribute('color-playlist-bg-inactive')
          : this.#presets[preset]['color-playlist-bg-inactive'];
      });
    }

    #setSelectPlaylist() {
      this.#DOM.containerPlaylist.innerHTML = this.#showPlaylist();
      this.#DOM.allPlaylistSongs = this.#root.querySelectorAll('div.playlist-song');
    }

    #setSelectPlaylists() {
      this.#DOM.selectPlaylists.innerHTML = this.#showPlaylists();
      this.playlist = this.playlists[Object.keys(this.playlists)[0]];
      this.#DOM.selectPlaylists.style.display = 'block';
    }

    #setPlaylistToStart() {
      this.#setSelectPlaylist();
      this.#setPlaylistStyle();
      this.#setAudioToStart();
      this.#addEventsToPlaylistSongs();
    }

    // ==============================
    // Add Events
    // ==============================
    #addEvents() {
      this.#onOnOffPlaylist();
      this.#addEventsToPlaylistSongs();
      this.#onPlay();
      this.#onPause();
      this.#onBackward();
      this.#onForward();
      this.#onRandom();
      this.#onRotate();
      this.#onSongSlider();
      this.#onVolumeSlider();
      this.#onDiscoEffect();
      this.#onShowTitleOfAudioSlider();
      this.#onSelectPlaylists();
    }

    // ==============================
    // Playlist Functions
    // ==============================
    #setOnOffOpacity(button, onOff, trueFalse) {
      button.style.opacity = onOff === trueFalse ? '1' : this.#opacity;
    }

    #setElementToOpacity(element) {
      element.style.opacity = this.#opacity;
    }

    #setOnOffPlaylist() {
      this.#setOnOffOpacity(this.#DOM.svgList, this.#onOffPlaylist, false);
      this.#DOM.containerPlaylist.style.display = this.#onOffPlaylist === false ? 'block' : 'none';
      this.#onOffPlaylist = !this.#onOffPlaylist;
    }

    #onOnOffPlaylist() {
      this.#DOM.svgList.addEventListener('click', (e) => {
        this.#setOnOffPlaylist();
      });
    }

    #addEventsToPlaylistSongs() {
      this.#DOM.allPlaylistSongs.forEach((element) => {
        element.addEventListener('click', (e) => this.#onPlaylistAudio(e));
      });
    }

    #onPlaylistAudio(e) {
      this.#activatePlaylistSong(e.currentTarget);
      this.#currentSongIndex = Number(e.currentTarget.dataset.index);
      this.#audio.src = this.playlist[this.#currentSongIndex].songFile;
      this.#setAudioDatasPlayerbar();
      this.#togglePlayPauseSvg(false);
      this.#playAudio();
    }

    #activatePlaylistSong(element) {
      const preset = this.getAttribute('preset');

      element.style.color = this.hasAttribute('color-playlist-text-active')
        ? this.getAttribute('color-playlist-text-active')
        : this.#presets[preset]['color-playlist-text-active'];

      element.style.backgroundColor = this.hasAttribute('color-playlist-bg-active')
        ? this.getAttribute('color-playlist-bg-active')
        : this.#presets[preset]['color-playlist-bg-active'];

      if (this.#currentSongElement !== element) {
        this.#deactivatePlaylistSong();
      }

      this.#currentSongElement = element;
    }

    #deactivatePlaylistSong() {
      const preset = this.getAttribute('preset');

      this.#currentSongElement.style.color = this.hasAttribute('color-playlist-text-inactive')
        ? this.getAttribute('color-playlist-text-inactive')
        : this.#presets[preset]['color-playlist-text-inactive'];

      this.#currentSongElement.style.backgroundColor = this.hasAttribute('color-playlist-bg-inactive')
        ? this.getAttribute('color-playlist-bg-inactive')
        : this.#presets[preset]['color-playlist-bg-inactive'];
    }

    #togglePlayPauseSvg(onOrOff) {
      if (onOrOff === false) {
        this.#DOM.svgPlay.style.display = 'none';
        this.#DOM.svgPause.style.display = 'inline';
      } else {
        this.#DOM.svgPlay.style.display = 'inline';
        this.#DOM.svgPause.style.display = 'none';
      }
    }

    #setAudioDatasPlayerbar() {
      const playIdx = this.playlist[this.#currentSongIndex];
      this.#DOM.bandName.textContent = playIdx.bandName.trim() === '' ? 'unknown' : playIdx.bandName;
      this.#DOM.songTitle.textContent = playIdx.songTitle.trim() === '' ? 'unknown' : playIdx.songTitle;
      this.#DOM.playerbarImage.src = playIdx.songImage;
      this.#DOM.playerbarImage.alt = playIdx.bandName + ' - ' + playIdx.songTitle;
      this.#DOM.timeEnd.textContent = '- 00:00';

      setTimeout(() => {
        this.#DOM.timeEnd.textContent = '- ' + this.#setSecondsToTime(this.#audio.duration);
        this.#DOM.songSlider.max = Math.round(this.#audio.duration);
      }, 500);
    }

    #setSecondsToTime(secs) {
      let std = Math.floor(secs / 3600);
      let min = Math.floor(secs / 60) % 60;
      let sec = Math.round(secs % 60);
      min = min < 10 ? '0' + min : min;
      sec = sec < 10 ? '0' + sec : sec;
      return std === 0 ? min + ':' + sec : std + ':' + min + ':' + sec;
    }

    #onShowTitleOfAudioSlider() {
      this.#DOM.songSlider.addEventListener('mousemove', (e) => {
        let secs = Math.round((e.offsetX / e.target.clientWidth) * parseInt(e.currentTarget.max, 10));
        this.#DOM.songSlider.title = this.#setSecondsToTime(secs);
      });
    }

    // ==============================
    // Player Functions
    // ==============================
    #setAudioInterval() {
      let setMax = false;

      this.#intervalPlay = setInterval(() => {
        if (this.#audio.ended) {
          clearInterval(this.#intervalPlay);
          this.#togglePlayPauseSvg(true);
          this.#DOM.songSlider.value = 0;
          this.#nextAudio();
        } else {
          // Slider
          if (setMax === false) {
            this.#DOM.songSlider.max = Math.round(this.#audio.duration);
          }
          setMax = true;
          this.#DOM.songSlider.value = Math.round(this.#audio.currentTime);
          // Time Start
          this.#DOM.timeStart.textContent = this.#setSecondsToTime(Math.round(this.#audio.currentTime));
          // Time End
          this.#DOM.timeEnd.textContent = '- ' + this.#setSecondsToTime(Math.round(this.#audio.duration) - Math.round(this.#audio.currentTime));
        }
      }, 1000);
    }

    #onPlay() {
      this.#DOM.svgPlay.addEventListener('click', (e) => {
        this.#togglePlayPauseSvg(false);
        this.#playAudio();
      });
    }

    #playAudio() {
      this.#audio.play();
      this.#activatePlaylistSong(this.#DOM.allPlaylistSongs[this.#currentSongIndex]);
      this.#checkRandom();
      this.#setAudioInterval();
    }

    #onPause() {
      this.#DOM.svgPause.addEventListener('click', (e) => {
        this.#togglePlayPauseSvg(true);
        this.#audio.pause();
        clearInterval(this.#intervalPlay);
        this.#deactivatePlaylistSong();
      });
    }

    #goToPreviousAudio() {
      if (this.#audio.currentTime === 0) {
        this.#startAudio();
      } else {
        this.#deactivatePlaylistSong();
        if (this.#onOffRandom === true) {
          this.#randomAudio();
        } else {
          if (this.#currentSongIndex > 0) {
            this.#currentSongIndex--;
            this.#startAudio();
          } else {
            this.#currentSongIndex = this.playlist.length - 1;
            this.#startAudio();
          }
        }

        this.#setAudioDatasPlayerbar();
      }
    }

    #goToNextAudio() {
      if (this.#audio.currentTime === 0) {
        this.#startAudio();
      } else {
        this.#deactivatePlaylistSong();
        if (this.#onOffRandom === true) {
          this.#randomAudio();
        } else {
          if (this.#currentSongIndex < this.playlist.length - 1) {
            this.#currentSongIndex++;
            this.#startAudio();
          } else {
            this.#currentSongIndex = 0;
            this.#startAudio();
          }
        }

        this.#setAudioDatasPlayerbar();
      }
    }

    #nextAudio() {
      this.#deactivatePlaylistSong();

      if (this.#onOffRandom === true) {
        this.#randomAudio();
      } else {
        if (this.#currentSongIndex < this.playlist.length - 1) {
          this.#currentSongIndex++;
          this.#startAudio();
        } else {
          this.#setAudioToStart();
          if (this.#onOffRepeat === true) {
            this.#startAudio();
          }
        }
      }

      this.#setAudioDatasPlayerbar();
    }

    #randomAudio() {
      const maxLength = this.playlist.length;
      const nextRandom = this.#getRandomNumber(0, maxLength - 1);

      if (this.#onOffRepeat !== true) {
        if (this.#randomAudioIndexes.includes(nextRandom)) {
          if (this.#randomAudioIndexes.length < maxLength) {
            this.#randomAudio();
          } else {
            this.#randomAudioIndexes = [];
            this.#setAudioToStart();
          }
        } else {
          this.#randomAudioIndexes.push(nextRandom);
          this.#currentSongIndex = nextRandom;
          this.#startAudio();
        }
      } else {
        if (this.#randomAudioIndexes.includes(nextRandom)) {
          if (this.#randomAudioIndexes.length < maxLength) {
            this.#randomAudio();
          } else {
            this.#randomAudioIndexes = [];
            this.#randomAudio();
          }
        } else {
          this.#randomAudioIndexes.push(nextRandom);
          this.#currentSongIndex = nextRandom;
          this.#startAudio();
        }
      }
    }

    #checkRandom() {
      if (this.#onOffRandom === true) {
        if (!this.#randomAudioIndexes.includes(this.#currentSongIndex)) {
          this.#randomAudioIndexes.push(this.#currentSongIndex);
        }
      }
    }

    #startAudio() {
      this.#currentSongElement = this.#DOM.allPlaylistSongs[this.#currentSongIndex];
      this.#activatePlaylistSong(this.#currentSongElement);
      this.#audio.src = this.playlist[this.#currentSongIndex].songFile;
      this.#playAudio();
      this.#togglePlayPauseSvg(false);
    }

    #onBackward() {
      this.#DOM.svgBackward.addEventListener('click', (e) => {
        this.#goToPreviousAudio();
      });
    }

    #onForward() {
      this.#DOM.svgForward.addEventListener('click', (e) => {
        this.#goToNextAudio();
      });
    }

    #onRandom() {
      this.#DOM.svgRandom.addEventListener('click', (e) => {
        this.#onOffRandom = !this.#onOffRandom;
        this.#setOnOffOpacity(this.#DOM.svgRandom, this.#onOffRandom, true);
      });
    }

    #onRotate() {
      this.#DOM.svgRotate.addEventListener('click', (e) => {
        this.#onOffRepeat = !this.#onOffRepeat;
        this.#setOnOffOpacity(this.#DOM.svgRotate, this.#onOffRepeat, true);
      });
    }

    #onSongSlider() {
      this.#DOM.songSlider.addEventListener('input', (e) => {
        this.#audio.currentTime = this.#DOM.songSlider.value;
      });
    }

    #onVolumeSlider() {
      this.#DOM.volumeSlider.addEventListener('input', (e) => {
        this.#audio.volume = e.currentTarget.value;
      });
    }

    #setAudioToStart() {
      this.#currentSongIndex = 0;
      this.#currentSongElement = this.#DOM.allPlaylistSongs[this.#currentSongIndex];
      this.#audio.src = this.playlist[this.#currentSongIndex].songFile;
      this.#setAudioDatasPlayerbar();
      this.#togglePlayPauseSvg(true);
    }

    #onSelectPlaylists() {
      this.#DOM.selectPlaylists.addEventListener('change', (e) => {
        this.playlist = this.playlists[e.currentTarget.value];
        this.#randomAudioIndexes = [];
      });
    }

    #onDiscoEffect() {
      this.#DOM.discoEffect.addEventListener('click', (e) => {
        this.#discoEffectOnOff = !this.#discoEffectOnOff;
        const containerPlayer = this.#DOM.containerPlayer;
        containerPlayer.style.backgroundColor = this.#getRandomColor();

        if (this.#discoEffectOnOff === true) {
          containerPlayer.classList.add('container-player-transition');
          this.#intervalDiscoEffect = setInterval(() => {
            containerPlayer.style.backgroundColor = this.#getRandomColor();
          }, 500);
        } else {
          clearInterval(this.#intervalDiscoEffect);
          containerPlayer.classList.remove('container-player-transition');
          containerPlayer.style.backgroundColor = this.#attributeOrPreset(this.#presets[this.getAttribute('preset')], 'bg-color');
        }
      });
    }

    #getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    #getRandomColor() {
      return `rgb(${this.#getRandomNumber(0, 255)}, ${this.#getRandomNumber(0, 255)}, ${this.#getRandomNumber(0, 255)})`;
    }
  }

  customElements.define('frissbee-audio-player', FrissBeeAudioPlayer);
})();
