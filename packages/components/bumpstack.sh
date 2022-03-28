#!/bin/bash

npm un -S @papillonbits/css @papillonbits/library && npm i -S @papillonbits/css @papillonbits/library

npm run clean-up && npm run install-packages && npm audit fix
