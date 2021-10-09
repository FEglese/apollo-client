# Apollo React App

## Description

## Running & Deploying

### Pre-requisites

To run this app you will need npm installed locally.

To clone this repository, in the terminal navigate to your target directory, then run:
`git clone https://github.com/FredrikEglese/apollo-client.git`

Navigate into the new directory `apollo-client` and run `npm i` to install the necesary npm packages.

### Dev mode run

Run `npm run start` which should open the app up

### Build and Deploy

To build an optimised version of the app run `npm run build`. This can then be deployed if you have serve installed locally.

If you don't have serve locally, run `npm i -g serve` then deploy with `serve -s build` while in the `apollo-client` directory.

### Runnin the test suite

`npm run test`

## To-do List

> Any component tasks must also include tests

- [ ] GraphQL / ApolloClient service for collecting data
- [ ] Feed list component
- [ ] Feed list item component
- [ ] Search component
- [ ] Ability to save previous searches
