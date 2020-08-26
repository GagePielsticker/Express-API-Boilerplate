# Secure REST Api Boilerplate

## Introduction

> This is a boilerplate to help quickly throw up secure REST api's. It comes packaged with Mongoose, express, helmet. API will only except request over https and all requesters are ratelimited. All of this can be configured in the settings file located in `src/settings/api_settings.json`.

## Security offered
- Ratelimiting to prevent brute force style attacks and keep load down
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

## Dependencies
- Mongoose
- Express
- Express-rate-limit
- https
- Helmet