![Express API Boilerplate](https://i.imgur.com/P0ug3Qc.png)
# 
[![Known Vulnerabilities](https://snyk.io/test/github/gagepielsticker/Express-API-Boilerplate/badge.svg)](https://snyk.io/test/github/gagepielsticker/Express-API-Boilerplate/)
[![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/GagePielsticker/Express-API-Boilerplate/blob/master/LICENSE.md)
[![Build Status](https://travis-ci.org/GagePielsticker/Express-API-Boilerplate.svg?branch=master)](https://travis-ci.org/GagePielsticker/Express-API-Boilerplate)
![GitHub last commit](https://img.shields.io/github/last-commit/gagepielsticker/Express-API-Boilerplate)

## Foreword

This is a boilerplate to help quickly throw up semi-secure REST api's. It comes packaged with Mongoose, express, helmet, and a whole host of security features. All of this can be configured in the settings file located in `src/settings/api_settings.json`.

This does not garuntee complete and utter security. This is just a simple boilerplate to throw up a **semi-secure** api. To achieve absolute security you must take several steps outside of this code such as server hardening, reverse proxies, firewall rules, and many other things. This is strictly a boilerplate if you want to quickly throw up api's without necessarily having to worry about immediate security vulnerabilities presented in express apps.

## Security offered
- Application level ratelimiting to prevent brute force style attacks and keep load down.
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
- Key authentication if used by private seperate application (optional)
- Packaged with an express-validator in the routes to validate params
- XSS filter middleware to sanitize req.body, req.query, and req.params as well as manual filtration.
- Time based attack protection on the private key

## Running
To use this download and extract files as normal and navigate to the root folder (not src). Then type `npm i` in console to install the dependencies. Once they are installed you will want to run the app through the `npm start` script.

## Dependencies
- Express (main framework)
- Express-rate-limit (application layer brute force protection)
- Helmet (some header protection/safe defaults)
- xss-clean (xss filtration)
- Express-validator (route data validating)
- Mongoose (databasing)
- safe-compare (time based comparison protection)

## Dev-Dependencies
- Jest (unit testing framework)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

All code must follow standardjs principles. Keep documentation thorough as well.

![GitHub stars](https://img.shields.io/github/stars/gagepielsticker/Express-API-Boilerplate?style=social)
![GitHub followers](https://img.shields.io/github/followers/gagepielsticker?style=social)

