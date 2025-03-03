---
sidebar_position: 1
---

# Project Setup Guide

This guide will help you set up the Next.js/React web app for the Crypto Price Tracker project.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 22 or higher)
- **npm** (version 10 or higher)
- **fnm** (Fast Node Manager)
- **Git**

## Setting Up the Web App

Follow these steps to set up and run the web app:

### 1. Clone the Repository

First, clone the repository to your local machine:

```sh
git clone https://github.com/gdneill/crypto-price-tracker.git
cd web-app
```

### 2. Install Project Dependencies

Navigate to the web app directory and install the necessary project dependencies:

```sh
npm install
```

### 3. Setup Environment Variables

Create a [CoinCap](https://splash.coincap.io/) API Key or add an existing one.
Then, create a `.env.local` file in the root of the web-app directory:

```
NEXT_PUBLIC_COIN_CAP_API_KEY={coin_cap_public_key}
```

### 4. Run the Development Server

Start the dev server:

```sh
npm run dev
```

The web app should now be running at http://localhost:3000.
