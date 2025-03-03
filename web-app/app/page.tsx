"use client"; // Enable client-side rendering

import { encode } from "punycode";
import { useState, useEffect } from "react";

interface Asset {
    id: string;
    name: string;
    priceUsd: string;
}

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [assets, setAssets] = useState<Asset[]>([]);
    const [defaultAssets, setDefaultAssets] = useState<Asset[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

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

    // Fetch initial 5 assets when the page loads
    useEffect(() => {
        fetchAssets();
    }, []);

    // Fetch search results when searchQuery changes and the user clicks the search button or presses Enter
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

    // Handle the search button click or Enter key press
    const handleSearch = (e: React.FormEvent | React.KeyboardEvent) => {
        e.preventDefault(); // Prevent default form submission behavior
        fetchSearchResults(); // Trigger the search
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] w-4/5 items-center justify-self-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <div className="banner between">
                <div>
                    <h1 className="heading">Crypto Price Tracker</h1>
                    <p>made by Geigh Neill</p>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search cryptocurrencies..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={(e) => e.key === "Enter" && handleSearch(e)} // Trigger search on Enter key up
                        className="p-2 border border-white-400 rounded-md bg-gray-900 text-white"
                    />
                    <button
                        onClick={handleSearch} // Trigger search on button click
                        className="ml-2 p-2 bg-transparent border border-white-400 text-white rounded-md"
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Display Results */}
            <div className="w-3/5 min-h-[200px]">
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                <ul>
                    {assets.length > 0 ? (
                        assets.map((asset) => (
                            <li key={asset.id} className="text-lg font-bold p-2 bg-gray-800 rounded-lg my-4 p-4 flex justify-between">
                                <div>{asset.name}</div>
                                <div>${parseFloat(asset.priceUsd).toFixed(2)}</div>
                            </li>
                        ))
                    ) : (
                        !loading && <p className="text-gray-400">No results found.</p>
                    )}
                </ul>
            </div>

            <div>
                <button
                    onClick={fetchAssets}
                    className="p-2 p-2 bg-transparent border border-white-400 text-white rounded-md"
                >
                    Refresh
                </button>
            </div>
        </div>
    );
}
