---
sidebar_position: 3
---

# State Management Explanation

This document explains the state management approach used in the Crypto Price Tracker application.

## State Management in Crypto Price Tracker

The application utilizes React's built-in `useState` and `useEffect` hooks for state management. The following key states are maintained:

```tsx
const [searchQuery, setSearchQuery] = useState("");
const [assets, setAssets] = useState<Asset[]>([]);
const [defaultAssets, setDefaultAssets] = useState<Asset[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
```

1. **Search Query (`searchQuery`)**: Stores the user-inputted search term for filtering cryptocurrencies.
2. **Assets (`assets`)**: Holds the list of cryptocurrency assets currently being displayed.
3. **Default Assets (`defaultAssets`)**: Stores the initial list of top 5 assets, used as fallback when there is no search input.
4. **Loading (`loading`)**: Tracks whether the application is currently fetching data.
5. **Error (`error`)**: Stores error messages if the API request fails.

Using `useState` for managing UI state allows the application to dynamically update its content in response to user interactions, such as searching for a cryptocurrency or refreshing the list. Additionally, `useEffect` is leveraged to fetch data when the component mounts, ensuring the application loads data upon initialization.

### Benefits of This Approach

1. **Simplicity**: The `useState` and `useEffect` hooks are straightforward, making the code easier to read and maintain.
2. **Performance**: Since state updates only re-render components when necessary, performance remains optimal.
3. **Scalability**: While `useState` is sufficient for this small-scale application, it can be extended with a global state management tool like Redux or Context API if needed in the future.
4. **User Experience**: The loading state prevents unnecessary UI freezes, and error handling improves usability by informing users of issues.

By adopting this state management approach, the Crypto Price Tracker ensures a smooth and responsive experience for users searching and viewing cryptocurrency data.

