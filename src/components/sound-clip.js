// Local vars

// Component definition

Crafty.c('SoundClip', {
  playSoundClip: function (specs) {
    const { sound, volume } = specs
    Crafty.audio.play(sound, 1, volume || 1)
    // if (sound && !Crafty.audio.isPlaying(sound)) {
    // Crafty.audio.play(sound, 1, volume || 1)
    // }
  }
})
