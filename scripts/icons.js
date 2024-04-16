let CassonettiIcons = L.Icon.extend({
    options: {
        iconSize: [40, 25],
        iconAnchor: [20, 25],
        popupAnchor: [0, -40]
    }
});

let plasticaIcon = new CassonettiIcons({ iconUrl: 'https://i.ibb.co/WH8wxT9/cass-blu.png' }),
    cartaIcon = new CassonettiIcons({ iconUrl: 'https://i.ibb.co/yX81gQN/cass-giallo.png' }),
    vetroIcon = new CassonettiIcons({ iconUrl: 'https://i.ibb.co/Kj9tRvv/cass-rosso.png' }),
    organicoIcon = new CassonettiIcons({ iconUrl: 'https://i.ibb.co/4Wz9Tyw/Cass-nero.png' });