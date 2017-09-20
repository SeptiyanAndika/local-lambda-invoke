# local-lambda-invoke
Example Serverless projects for showing how to invoke lambdas locally using the serverless-plugin-simulation package.

## Prerequisites

You must have installed Docker.

Download lambci/lambda:nodejs6.10 Docker image(s) using `docker pull`, like :

`docker pull lambci/lambda:nodejs6.10`

## Installation

Inside both directories `services` and `manager`, install the dependencies:

`npm install`

## Running the example

Inside the directory `services`, execute the following command:

```
npm run simulate-lambda
npm run simulate-gateway (new terminal/ new tab)
```

Inside the directory `manager`, execute the following command:
```
npm run handler-invoke
```
