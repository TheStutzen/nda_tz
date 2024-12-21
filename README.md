# NDA-TZ backend

## Project Setup and Usage

This guide provides instructions for setting up and running the project locally using Docker.

### Prerequisites

Before starting, ensure you have the following tools installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Setup Instructions

### 1. Clone the Repository

**Clone the project repository to your local machine:**

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Configure Environment Variables

**Create a .env file from the provided .env.example template:**

```bash
cp .env.example .env
```

This will create a copy of the environment configuration that the application uses.

Obtain an API Key from Etherscan

**To enable interaction with Ethereum blockchain data, you need to obtain an API key from Etherscan.io:**

    • Sign up or log in to your Etherscan account.
    • Navigate to the API-KEYs section in your dashboard.
    • Create a new API key by clicking on the “Add” button.
    • Copy the generated API key.
    • Add the API key to your .env file:

`ETHERSCAN_API_KEY=<your-etherscan-api-key>`

### 3. Start the Application

**Use Docker Compose to build and start the containers:**

```bash
docker compose up --build
```

**This command will:**

    • Pull necessary Docker images.
    • Build the application container.
    • Start the application.

Accessing the Application

**Once the containers are running, the application will be available at:**

    • API Endpoint: http://localhost:3000/api
    • Swagger Documentation: http://localhost:3000/swagger

# Application Features

### 1. Show address:

**Endpoint:** `/api/mostChangedBalance`

The API includes an endpoint that determines the address with the largest balance change (by absolute value) over the last 100 blocks.

**Functionality:**

    • Scans the latest 100 blocks from the blockchain.
    • Analyzes transactions to compute the balance changes for each address.
    • Returns the address with the greatest balance change along with the change amount.

### 2. Multilingual Error Responses:

**The API supports error responses in English and Russian. Use the ?lang query parameter to specify the language, e.g.:**

    • ?lang=ru for Russian
    • ?lang=en for English

_Additional Notes_

    • Check the Swagger UI for detailed API documentation and testing: http://localhost:3000/swagger.
    • The API base endpoint is: /api.
