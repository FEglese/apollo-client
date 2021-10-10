# React SpaceX Launches

## Description

Find out about the recent spaceX flights in this React app, with data request handled by Apollo connecting to the spaceX open api [here](https://api.spacex.land/graphql/). This data doesn't appear to be kept up to date, hence why the most recent launch is only in 2020.

In the future, I would like to add more search parameters, user sorting, saving searches.

## Running & Deploying

These deployment methods assumes that the user has some familiarity with the command line, git and npm.

### Pre-requisites

To clone this repository, in the terminal navigate to your target directory, then run:
`git clone https://github.com/FredrikEglese/apollo-client.git`

Navigate into the new directory `apollo-client` and run `npm i` to install the necesary npm packages.

### Dev mode deploy

Run `npm run start` within the `apollo-client` directory. This will build the app and run it in a new tap of your web browser.

### Build and Deploy

To build an optimised version of the app, navigate to the `apollo-client` directory and then run `npm run build`. This can then be deployed if you have serve installed locally.

> If you don't have serve locally, run `npm i -g serve`

To deploy using serve, run `serve -s build`

### Netlify

I have set up a deployment on Netlify which is accessible [here](https://fredrik-spacex.netlify.app/). This automatically takes the most recent changes to `main` and deploys them publicly. This is especially useful for actually testing the app on mobile with the ios/android html components.

### Running the test suite

`npm run test`
