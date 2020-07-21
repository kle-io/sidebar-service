# sidebar

## About the Project
> Sidebar is a service responsible for delivering content and representational data as a module for [kle-io](https://github.com/kle-io), a single page music player app. :metal:

[Demo](https://giphy.com/gifs/WmuKrHEy9GItF1yfHL/fullscreen)

### Built With

* [React](https://github.com/facebook/react)
* [Styled Components](https://github.com/styled-components/styled-components)
* [Express.js](https://github.com/expressjs/express)
* [Sequelize](https://github.com/sequelize/sequelize)
* [Jest](https://github.com/facebook/jest)
* [Enzyme](https://github.com/enzymejs/enzyme)
* [Webpack](https://github.com/webpack/webpack)
* [Grunt](https://github.com/gruntjs/grunt)
* :sparkles: A little razzle dazzle :sparkles:

## Getting Started

### Requirements

* [MySQL](https://dev.mysql.com/doc/refman/8.0/en/installing.html)
* [NodeJS](https://nodejs.org/en/download/package-manager/) - An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

### Installation
Clone the project
```
git clone https://github.com/desrogers/sidebar.git
```
Install NPM packages
```
npm i
```
Configure environment Variables
  1. Duplicate `.env.example` file
  2. Rename to `.env`
  3. Replace placeholder credentials in `.env`

Add data to database
```sh
npx sequelize init:config && npm run db:setup
```

Run build (this will tell Webpack to watch for changes)
```sh
npm run dev
```

Start the server
```sh
npm start
```

Open your favorite browser and visit http://localhost:3004

## Roadmap
See the project [Trello board](https://trello.com/b/FizwOhpW/sidebar) for ticket history, current status, and future plans.

## Contributing
Pull requests are welcome and greatly appreciated. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/cool-feature)
3. Commit your Changes (git commit -m 'Add some cool-feature')
4. Push to the Branch (git push origin feature/cool-feature)
5. Open a Pull Request
