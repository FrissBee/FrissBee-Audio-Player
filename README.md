# Overview

This repro shows examples how to embed the FrissBee Audio Player into your website.

The audio player can be designed according to your ideas.

[For the full documentation click here](https://audio-player.frissbee.de).

For creating your own design there is the [Design Generator](https://audio-player.frissbee.de/docs/1.0.0/design-generator). With it it`s easy and fast. You can directly see the result.

# Short description

A little bit of code in your web page and you can fully play the sound.

Here is an example to embed the player with the default design into a web page:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <title>My Title</title>

    <!-- 1. Step: implement the frissbee-audio-player_1.0.0.js folder -->
    <script defer="defer" src="./assets/js/frissbee-audio-player_1.0.0.js"></script>
  </head>
  <body>
    <!-- 2.Step: Implement the "frissbee-audio-player" HTML tag -->
    <frissbee-audio-player></frissbee-audio-player>
  </body>

  <script>
    // 3. Step
    // a) a list of objects in an array containing the details of each audio file
    const myPlaylist = [
      {
        bandName: 'Band Name 1',
        songTitle: 'Song 1',
        songFile: './path-to-the-audio-file/song_1.mp3',
        songImage: './path-to-the-image/image_1.jpg',
      },
      {
        bandName: 'Band Name 2',
        songTitle: 'Song 2',
        songFile: './path-to-the-audio-file/audio/song_2.mp3',
        songImage: './path-to-the-image/image_2.jpg',
      },
      // more audio datas...
    ];

    // b) select the frissbee-audio-player HTML element
    const player = document.querySelector('frissbee-audio-player');

    // c) give the playlist to the selected frissbee-audio-player HTML element with the propery "playlist"
    player.playlist = myPlaylist;
  </script>
</html>
```
