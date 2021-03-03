const onIndexSuccess = function (responseData) {
  const games = responseData.games

  let gamesHtml = ''

  games.forEach(game => {
    gamesHtml += `
    <h4>${game.owner}</h4>
    <p>Started: ${game.createdAt}</p>
    <p>Last Played: ${game.updatedAt}</p>
    <p>Winner: ${game._v}</p>
    `
  })
  $('#message').html(gamesHtml)
}

const onError = function (error) {
  $('#message').html('<h4>Quite sorry, there seems to be an issue with your request</h4>')
}


module.exports = {
  onIndexSuccess,
  onError
}
