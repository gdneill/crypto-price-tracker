---
sidebar_position: 4
---

# Challenges and Solutions

This document outlines some of the key challenges encountered while developing the Crypto Price Tracker application and the solutions implemented to overcome them.

## Challenge 1: Testing the Display Without Using Too Many API Credits

### Problem:
During development, continuously fetching data from the CoinCap API to test the application’s display consumed API credits quickly, limiting the ability to test frequently.

### Solution:
To mitigate this, a list of fake asset objects was created to simulate API responses. This allowed testing of the application's UI without making actual API requests. The mock data was structured similarly to real API responses to ensure a seamless transition between testing and production.

#### Example of Fake Asset Data:
```tsx
const fakeAssets = [
    { id: "bitcoin", name: "Bitcoin", priceUsd: "50000" },
    { id: "ethereum", name: "Ethereum", priceUsd: "3000" },
    { id: "dogecoin", name: "Dogecoin", priceUsd: "0.25" },
];
```
By using this approach, UI testing became more efficient without unnecessary API calls.

## Challenge 2: Search Functionality Not Working

### Problem:
Initially, the search functionality was not returning expected results from the API. After debugging, it was discovered that special characters in search queries were causing incorrect API requests.

### Solution:
To fix this, the `encodeURIComponent` function was used to properly encode the `searchQuery` before sending it in the API request. This ensured that spaces and special characters were correctly formatted in the URL.

#### Fixed Code:
```tsx
const encodedQuery = encodeURIComponent(searchQuery);
const response = await fetch(`https://rest.coincap.io/v3/assets?search=${encodedQuery}&limit=5`, {
    headers: {
        'Authorization': `Bearer ${apiKey}`
    }
});
```
Using `encodeURIComponent` resolved the issue and allowed the search feature to function correctly with different types of user input.

By addressing these challenges effectively, the Crypto Price Tracker application became more reliable and efficient for both development and end-users.

