// api/deploy.js

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Global settings for API
const globalSettings = {
    eggV2: "15",
    nestidV2: "5",
    locV2: "1",
    domainV2: "https://domain.mu.my.id",
    apikeyV2: "ptla_",
};

// Endpoint to create a user and server panel
app.post('/create-panel', async (req, res) => {
    const { username, plan } = req.body;

    // Validate inputs
    if (!username || !plan) {
        return res.status(400).json({ error: "Username and plan are required." });
    }

    // Mock user creation
    const email = `${username}@gmail.com`;
    const password = `${username}1234`; // Generate a password

    try {
        // Create user
        const userResponse = await fetch(`${globalSettings.domainV2}/api/application/users`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${globalSettings.apikeyV2}`,
            },
            body: JSON.stringify({ email, username, password }),
        });

        const userData = await userResponse.json();
        if (userData.errors) throw new Error(userData.errors[0]);

        // Create server panel (mock)
        res.json({ message: `Panel created for ${username} with plan ${plan}` });
    } catch (error) {
        res.status(500).json({ error: `Failed to create panel: ${error.message}` });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


