## Deployment instructions

- Install docker: [instructions](https://docs.docker.com/engine/installation/)N

PRODUCTION ENVIRONMENT:

- Run `docker build . -t docart/app` in the main folder

- Execute `docker run -d -p 5000:5000 docart/app`

DEVELOPMENT ENVIRONMENT:

- Run `docker build . -f Dockerfile-env -t docart/app:dev' in the mail folder

- Execute `docker run -d -p 3000:3000 docart/app:dev`
