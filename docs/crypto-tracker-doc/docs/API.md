---
sidebar_position: 2
---

# API Integration Details

This document explains how data is fetched and updated in the Crypto Price Tracker application.

## Fetching Data

The Crypto Price Tracker application fetches data from the CoinCap API. The API key is stored in environment variables for security.

### Fetching Asset Data to Display

The following snippet demonstrates how crypto asset data is fetched from the CoinCap API using the `fetch` function and CoinCap's `/v3/assets` OPEN API route.
Additionally, this API call is limited to 5 assets using the limit filter at the end of the API route:

```tsx
const fetchAssets = async () => {
    setLoading(true);
    try {
        const apiKey = process.env.NEXT_PUBLIC_COIN_CAP_API_KEY;
        const response = await fetch("https://rest.coincap.io/v3/assets?limit=5", {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        const data = await response.json();

        if (response.ok) {
            setDefaultAssets(data.data || []);
            setAssets(data.data || []);
        } else {
            setError("Failed to fetch crypto data");
        }
    } catch (err) {
        setError("An error occurred while fetching initial data");
    } finally {
        setLoading(false);
    }
};
```

The `fetchAssets()` function is called when the page is initialized and again when the Refresh button  is
clicked. This will update the page with the newest crypto asset price data from CoinCap.

### Fetching Asset Data from a Search Query

The `fetchSearchResults` method is used to fetch data based on a search query entered by the user. This
method is triggered when the user clicks the search button or presses the Enter key. The search uses a search filter provided
by CoinCap API at the end of the route, much like the limit filter.

```tsx
const fetchSearchResults = async () => {
  if (!searchQuery.trim()) {
    // If search query is empty, show top 5 assets
    setAssets(defaultAssets);
    return;
  }

  setLoading(true);
  setError(null);

  try {
    const apiKey = process.env.NEXT_PUBLIC_COIN_CAP_API_KEY;
    const encodedQuery = encodeURIComponent(searchQuery);
    const response = await fetch(`https://rest.coincap.io/v3/assets?search=${encodedQuery}&limit=5`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    });
    const data = await response.json();

    if (response.ok) {
      setAssets(data.data || []);
    } else {
      setError("Failed to fetch search results");
    }
  } catch (err) {
    setError("An error occurred while searching");
  } finally {
    setLoading(false);
  }
};
```

The `fetchSearchResults` method is triggered by a form event or keyboard event (i.e., when the user clicks
the search button or press the Enter key).
