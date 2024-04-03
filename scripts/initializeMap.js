let map = new L.Map('map', {
	fullscreenControl: true,
	fullscreenControlOptions: {
		position: 'topleft'
	}
}).fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);