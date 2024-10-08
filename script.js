document.addEventListener("DOMContentLoaded", function () {
    async function fetchParkingData() {
        const channelID = '2677094';  // Replace with your ThingSpeak Channel ID
        const apiKey = 'WQFI4MR13PBT7UZB';  // Replace with your ThingSpeak Read API Key
        const url = `https://api.thingspeak.com/channels/${channelID}/feeds.json?api_key=${apiKey}&results=1`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const latestEntry = data.feeds[0]; // Fetch latest data

            const slotInfo = `
                Slot 1: ${latestEntry.field1}<br>
                Slot 2: ${latestEntry.field2}<br>
                Slot 3: ${latestEntry.field3}<br>
                Slot 4: ${latestEntry.field4}<br>
                Slot 5: ${latestEntry.field5}
            `;

            document.getElementById("slot-info").innerHTML = slotInfo;

        } catch (error) {
            console.error('Error fetching data:', error);
            document.getElementById("slot-info").innerHTML = "Error fetching data.";
        }
    }

    // Fetch parking data on page load
    fetchParkingData();

    // Optionally, refresh data every 30 seconds
    setInterval(fetchParkingData, 30000);
});
