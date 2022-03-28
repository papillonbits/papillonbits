#!/bin/bash

npm un -S @papillonbits/css && npm i -S @papillonbits/css

npm run clean-up && npm run install-packages && npm audit fix
