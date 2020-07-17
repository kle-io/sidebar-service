# sidebar
> Sidebar is a service responsible for delivering content and representational data as a module for [kle-io](https://github.com/kle-io), a single page music player app. :metal:

<p align="center">
  <img width="320" height="443" src="https://media.giphy.com/media/SUQPHqGOwvqtW1pjBb/giphy.gif" alt="sidebar demo">
</p>

### Built With

* __Front-end:__ ReactJS, Styled Components, A little razzle dazzle :sparkles:  
* __Server:__ Express.js, Sequelize  
* __Database:__ MariaDB/MySQL
* __Testing:__ Jest + Enzyme  
* __Deployment:__ Docker, CircleCI, AWS EC2/S3/RDS

### Related Modules

  - [Main Player](https://github.com/kle-io/main-song-player)
  - [Toolbar Player](https://github.com/kle-io/toolbar)
  - [Comments](https://github.com/kle-io/Comment-section)

## Installation

### Requirements

* [MySQL](https://dev.mysql.com/doc/refman/8.0/en/installing.html)
* [NodeJS](https://nodejs.org/en/download/package-manager/) - An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

## Roadmap
See the project [Trello board](https://trello.com/b/xcm9TdP7/sidebar) for ticket history, current status, and future plans.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

#### Install Dependencies

From the root directory
```sh
npm install
```

#### Configure Environment Variables
1. Duplicate `.env.example` file
2. Rename to `.env`
3. Fill `.env` with your RDBMS credentials

#### Add Seed Data
```sh
npx sequelize init:config && npm run db:setup
```

#### Create Static JS Bundle
```sh
npm run dev
```

#### Start NodeJS Server
```sh
npm start
```

## Usage
Open your favorite browser and visit http://localhost:3004

