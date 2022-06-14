#!/bin/bash

npm un -D nodemon && npm i -D nodemon

npm run clean-up && npm run install-packages && npm audit fix
