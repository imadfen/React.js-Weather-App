export default function getUserLocation() {
    return new Promise((resolve) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    resolve({ latitude, longitude });
                },
                () => {
                    resolve(null);
                }
            );
        } else {
            resolve(null);
        }
    });
};