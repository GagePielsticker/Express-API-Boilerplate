# Express Api Boilerplate

## Introduction

This is a boilerplate to help quickly throw up semi-secure REST api's. It comes packaged with Mongoose, express, helmet. API will only except request over https and all requesters are ratelimited. All of this can be configured in the settings file located in `src/settings/api_settings.json`.

sidenote- the engine.js is where the functionality of the api is intended to be stored, and because its on the client we simply pass the client to our routes etc.

## Security offered
- Ratelimiting to prevent brute force style attacks and keep load down. This is simply an application level ratelimit to prevent bruteforce. A better implementation would be on the reverse proxy level, however i packaged it incase that option isnt available/unknown.
- HTTPS Transport layer only to enforce secure communications
- HelmetJS middleware security for headers which includes these enabled defaultly
- - ContentSecurityPolicy
- - dnsPrefetchControl
- - expectCt
- - frameguard
- - hidePoweredBy
- - hsts
- - ieNoOpen
- - noSniff
- - PermittedCrossDomainPolicies
- - referrerPolic
- - xssFilter
- Key authentication if used by private seperate application
- Packaged with an xss filter and express-validator in the routes to 1. help with xss filtration and 2. validate params

## Running
To use this download and extract files as normal and navigate to the root folder (not src). Then type `npm i` in console to install the dependencies. Once they are installed you will want to run the app through the `npm start` script.

## Dependencies
- Express
- Express-rate-limit
- https
- Helmet
- XSS
- Express-validator

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

All code must follow standardjs principles. Keep documentation thorough as well.
