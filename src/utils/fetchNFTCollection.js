const fetch = require('node-fetch');

export const fetchNFTCollection = async () => {
  const url = 'https://api.opensea.io/v2/collection/parallelalpha/nfts';
  const params = { limit: 50 };
  const headers = {
                    accept: 'application/json',
                    'X-API-KEY': '64b4e2425ced4dcab6e950805bb32791'
                  };

  const queryString = new URLSearchParams(params).toString();
  const requestUrl = `${url}?${queryString}`;

  try {
    const response = await fetch(requestUrl, {
        method: 'GET',
        headers: headers
      });

    if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

    const data = await response.json();
    console.log(data);
  } 
  catch (error) {
    console.error('Error:', error.message);
  }
};

