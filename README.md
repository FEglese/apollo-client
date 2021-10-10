# Apollo React App

## Description

## Running & Deploying

### Pre-requisites

To run this app you will need npm installed locally.

To clone this repository, in the terminal navigate to your target directory, then run:
`git clone https://github.com/FredrikEglese/apollo-client.git`

Navigate into the new directory `apollo-client` and run `npm i` to install the necesary npm packages.

### Dev mode deploy

Run `npm run start` within the `apollo-client` directory. This will build the app and run it in a new tap of your web browser.

### Build and Deploy

To build an optimised version of the app run `npm run build`. This can then be deployed if you have serve installed locally.

If you don't have serve locally, run `npm i -g serve`.

To deploy using serve, run `serve -s build` while in the `apollo-client` directory.

### Netlify

I have set up a deployment on Netlify [here](https://fredrik-spacex.netlify.app/). This automatically takes the most recent changes to `main` and deploys the application

### Runnin the test suite

`npm run test`

## To-do List

> Any component tasks should also include tests

- [x] GraphQL / ApolloClient service for collecting data
- [x] Feed list component
- [x] Feed list item component
- [x] Search component
- [ ] Ability to save previous searches
