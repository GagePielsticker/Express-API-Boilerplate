# Express Api Boilerplate

Foreword: This does not garuntee complete and utter security. This is just a simple boilerplate to throw up a **semi-secure** api. To achieve absolute security you must take several steps outside of this code such as server hardening, reverse proxy ratelimiting, firewall rules, and many other things. This is strictly a boilerplate if you want to quickly throw up api's without necessarily having to worry about immediate security vulnerabilities.

## Introduction

This is a boilerplate to help quickly throw up semi-secure REST api's. It comes packaged with Mongoose, express, helmet, and a whole host of security features. All of this can be configured in the settings file located in `src/settings/api_settings.json`.

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
- Packaged with an express-validator in the routes to validate params
- XSS filter middleware to sanitize req.body, req.query, and req.params as well as manual filtration.
- Time based attack protection on the private key

## Running
To use this download and extract files as normal and navigate to the root folder (not src). Then type `npm i` in console to install the dependencies. Once they are installed you will want to run the app through the `npm start` script.

## Dependencies
- Express (main framework)
- Express-rate-limit (application layer brute force protection)
- https (TLS)
- Helmet (some header protection/safe defaults)
- xss-clean (xss filtration)
- Express-validator (route data validating)
- Mongoose (databasing)
- safe-compare (time based comparison protection)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

All code must follow standardjs principles. Keep documentation thorough as well.
