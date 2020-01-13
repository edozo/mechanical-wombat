# Running yalc

## Prerequisites

- Remove mechanical-wombat from the package.json

## Install yalc

`yarn global add yalc`

## Publishing

"Publishing" mechanical-wombat locally with yalc.

- In the mechanical-wombat repo (locally), run `yalc publish` this will essentially replace `npm publish` for local use

## Using package

In the application (let's say edozo-maps-fe).

- Run yalc add mechanical-wombat
- Run `yarn`
- Run `yarn start`

## Updating

In mechanical-wombat

- Run `yarn publish`

In the application repo

- Run `yalc update`
- Run `yarn start`

# Notes

Documentation: https://github.com/whitecolor/yalc#pushing-updates-automatically-to-all-installations
Explanation: https://www.viget.com/articles/how-to-use-local-unpublished-node-packages-as-project-dependencies/

They talk about a faster way to do updates but I have not been able to get it working yet.
