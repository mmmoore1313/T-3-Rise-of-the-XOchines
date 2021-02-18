'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const gameEvents = require('./games/events')
const authEvents = require('./auth/events')

$(() => {
  // your JS code goes here
  // auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChagePassword)

  // hidden until acted upon with new game
  $('#game').hide()
  // hidden until acted upon with sign-in
  $('#user-section').hide()
  // hidden until edit button is clicked
  $('#edit').hide()

  // game events
  $('#game-board').on('click', gameEvents.userChoice)
})
