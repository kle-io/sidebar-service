# kleio

> a clone of a Soundcloud song page built with service oriented architecture

## Related Projects

  - https://github.com/kle-io/main-song-player
  - https://github.com/kle-io/toolbar
  - https://github.com/kle-io/Comment-section

## Table of Contents

1. [Requirements](#requirements)
2. [Development](#development)

## Usage

> Some usage instructions

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

### Setup Sample Data
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
