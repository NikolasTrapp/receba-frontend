#!/bin/bash

VERSION=$(node -pe "require('./package.json').version")
PROJECT_NAME=$(node -pe "require('./package.json').name" )

docker build -t $PROJECT_NAME:$VERSION .
echo "Image $PROJECT_NAME:$VERSION builded!"
