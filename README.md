# kleio

> kleio is a single page music player app built with service oriented architecture. Sidebar is a service for the app that displays related data on the song page. :metal:

## Data Model
![Kleio sidebar Entity Relationship Diagram (ERD) image](https://drive.google.com/uc?id=13Titqsh1SvDLD-0WZY6VggmmntJ1tipY)

## Built With

* React.js - for dynamism
* Styled Components - for style
* MariaDB/MySQL - for storage
* Sequelize - for translation
* A little razzle dazzle :sparkles:

## Related Services

  - [Main Player](https://github.com/kle-io/main-song-player)
  - [Toolbar Player](https://github.com/kle-io/toolbar)
  - [Comments](https://github.com/kle-io/Comment-section)

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
