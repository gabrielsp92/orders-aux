# Aux Project for Orders-service

This project was created to help the development of `orders-service` with external dependencies mock and stress/load tests

## Setup
  - Install dependencies with `yarn install` command.
  - Create a new .env file from the example given in `.env.copy` file
  - Run docker-compose with the localstack sqs instance.
  - Run script to create queues (`yarn create-queues`).
  - copy the queues url generated in terminal.
  - Set the SQS env variables of both projects.

## Scripts
  - Starts the application server with accounts and origin service mocked endpoints, listening on port 4001 by default
    ```shell
      yarn start
    ```
  - Populate orders queue with a preset event flow described at `scripts/sendMessages.js`
    ```shell
      yarn send-messages
    ```
  - Run autocannon module to fire requests to load/stress test by the definitions described at `scripts/autocannon.js`
    ```shell
      yarn autocannon
    ```
  - Create order and pos queues inside the localstack
    ```shell
      yarn create-queues
    ```
