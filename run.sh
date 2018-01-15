#!/bin/bash

echo "Hi, installing dependencies now..."

npm install

echo 'Creating .env..'

cat .env.example >> .env
