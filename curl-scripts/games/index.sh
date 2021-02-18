#!/bin/bash

API="https://tic-tac-toe-api-production.herokuapp.com/games"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "games": []
  }'
