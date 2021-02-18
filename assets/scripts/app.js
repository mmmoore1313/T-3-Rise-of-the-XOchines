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
  $('#sign-out').click(function () {
    event.preventDefault()
    const signOutHtml = `
    <h4>Are you sure you want to leave?</h4><br>

    <button id='yeeah'>Yes</button>
    <button class='naah'>No</button>

    `
    $('#message').html(signOutHtml)
    $('#naah').click(function () {
        event.preventDefault()
        $('#message').html('')
      })
    $('#yeeah').on('click', authEvents.onSignOut)
  })
  $('#change-password').on('submit', authEvents.onChagePassword)

  // hidden until acted upon with new game
  $('#game').hide()
  // hidden until acted upon with signup or login buttons
  $('#sign-up').hide()
  $('#sign-in').hide()
  // hidden until signed-in
  $('#sign-out').hide()
  $('#user-section').hide()
  // hidden until how to is clicked
  $('#howto').hide()
  $('#home').hide()
  // hidden until edit button is clicked
  $('#changepw').hide()

  // show buttons
  $('#signup').click(function (){
    $('#sign-up').show()
    $('#signup').hide()
  })
  $('#login').click(function () {
    $('#sign-in').show()
    $('#login').hide()
  })
  $('#edit').click(function () {
    $('#changepw').show()
    $('#user-section').hide()
  })
  $('#how-to').click(function () {
    $('#howto').show()
    $('#front-screen').hide()
    $('.home').hide()
    $('#front').click(function () {
      $('#front-screen').show()
      $('#howto').hide()
    })
  })
  $('#instructions').click(function () {
    $('#howto').show()
    $('#user-section').hide()
    $('#front').hide()
  })
  $('.home').click( function () {
    $('#user-section').show()
    $('#howto').hide()
    $('#changepw').hide()
  })
  // game events
  $('#game-board').on('click', gameEvents.userChoice)
})
