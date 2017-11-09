## Deployment instructions

- Install docker: [instructions](https://docs.docker.com/engine/installation/)

PRODUCTION ENVIRONMENT:

- Run `docker build . -t docart/app` in the main folder

- Execute `docker run -d -p 5000:5000 docart/app`

DEVELOPMENT ENVIRONMENT:

- Run `docker build . -f Dockerfile-dev -t docart/app:dev` in the main folder

- Execute `docker run -d -p 3000:3000 -v [your_current_path]:/usr/src/app docart/app:dev`
