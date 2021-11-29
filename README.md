# Example Web Application

This is an example web application built with React, TypeScript, webpack, and babel. It is built and served with [Docker](https://www.docker.com/).

## Running Locally

Install dependencies with `npm i`, then run `npm run build:watch`. In a separate terminal shell, then run `npm run docker:debug`.

This will build several Docker images for the application, then start a container with several services. It uses the debug profile to cause the server to restart when changes are made to the source code. The build watch command re-compiles the application when source code changes, and the `npm run build:run` command (called in `docker-compose.yml`) runs `nodemon` to restart the web server when the compiled files change.

Note: your local copy of the [server repository](https://github.com/tmonfre/example-typescript-server) must be in the same directory as your local copy of this repository. The default names used in the Docker compose files are "webapp" and "server".

## Deploying

To deploy, simply run `npm run docker:prod` or `docker-compose --profile prod up`. These commands should be identical.

This will build several Docker images for the application, then start a container for several services. It uses the prod profile so no hot-reloading occurs.
