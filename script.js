
const sound = document.getElementById("bgSound");

document.body.addEventListener("click", () => {
    if (sound.paused) {
        sound.volume = 0.6;
        sound.play();
    }
}, { once: true });

document.getElementById("connectWallet").addEventListener("click", async () => {
    if (window.solana && window.solana.isPhantom) {
        try {
            const response = await window.solana.connect();
            alert("Connected with: " + response.publicKey.toString());
        } catch (err) {
            alert("Connection failed.");
        }
    } else {
        alert("Phantom Wallet not found.");
    }
});
