# Usage:

## Without a docker

To run app without a docker eneter:
1. Run `ng serve --open`

## With a docker
1. Run `ng build --prod`
2. Run `docker image build -t test-angular-docker-app .`
3. Run `docker run -p 3000:80 --rm test-angular-docker-app`

If you now navigate to the “http://localhost:3000", you should get your initial Angular application up and running there. Moreover, the Nginx logs are redirected to your console output, so that you can see what’s happening inside the container.

To run image without logging run docker as `docker run -d -p 3000:80 --rm test-angular-docker-app`

# TestAngularDockerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
