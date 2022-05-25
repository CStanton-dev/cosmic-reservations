<p align='center'>
  <img src='public/cosmic-reservations-logo.svg' alt='Logo' height='280'/>
</p>

<h3 align='center'>Cosmic Reservations</h3>

<p align="center">
  A project allowing users to make reservations for the Cosmic Hotel
</p>

## Environment Variables

This demo requires that you have a Redis database running in the cloud or locally. Create a file named `.env.local` and export `REDIS_URL` with your connection details. Example: 

```
REDIS_URL=redis://default:PASSWORD@HOST:PORT
```

This demo leverages Github as an OAuth provider. In order to setup authentication with Github OAuth
please follow [this documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app).

Once OAuth is setup in github, add `GITHUB_ID` and `GITHUB_SECRET` to 
the `.env.local` file from the previous step. Example:

```
GITHUB_ID=PROVIDED_BY_GITHUB
GITHUB_SECRET=PROVIDED_BY_GITHUB
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/CStanton-dev/cosmic-reservations.git
```

Go to the project directory

```bash
  cd cosmic-reservations
```

Install dependencies

```bash
  npm install
```

Start the devlopment server

```bash
  npm run dev
```

## Acknowledgements

 - [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs)
 - [Getting Started with Next-Auth](https://next-auth.js.org/getting-started/example)
 - [RediSearch](https://redis.io/docs/stack/search/)
 - [RedisJSON](https://redis.io/docs/stack/json/)
 - [Reasonable Colors](https://reasonable.work/colors/)


## License

[MIT](https://github.com/CStanton-dev/cosmic-reservations/blob/master/LICENSE)