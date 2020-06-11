# kleio

> kleio is a Soundcloud song page clone built with service oriented architecture. Sidebar a service that displays information related to the song on the song page. :metal:

## Data Model
![Kleio sidebar Entity Relationship Diagram (ERD) image](https://drive.google.com/uc?id=13Titqsh1SvDLD-0WZY6VggmmntJ1tipY)

## Built With

* React.js - dynamism
* Styled Components - styles
* MariaDB - storage
* Sequelize - ODM for Node.js

## Related Projects

  - https://github.com/kle-io/main-song-player
  - https://github.com/kle-io/toolbar
  - https://github.com/kle-io/Comment-section

## Table of Contents

1. [Requirements](#requirements)
2. [Development](#development)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Configure Environment Variables
1. Duplicate `.env.example` file
2. Rename to `.env`
3. Fill `.env` with RDBMS user and database credentials

### Add Seed Data
```sh
npx sequelize init:config
npm run db:setup
```

### Create Static JS Bundle
```sh
npm run dev
```

### Start NodeJS Server
```sh
npm start
```
