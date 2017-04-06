class BuildingsFactory {
    /**
     *
     * @param {Object} cityDefinition
     */
    constructor(cityDefinition) {
        this._cityDefinition = cityDefinition;
    }

    /**
     *
     */
    buildCity() {
        this.buildElectroStations();
        this.buildSolarPanels();
        this.buildHouses();
    }

    /**
     *
     */
    buildHouses() {
        this.cityDefinition.houses.forEach(houseDefinition => {
            let house = new House(houseDefinition.apartmentsCount, houseDefinition.streetNumber);
            house.render();
        });
    }

    /**
     *
     */
    buildElectroStations() {
        this.cityDefinition.electroStations.forEach(electroStationDefinition => {
            let station = new ElectroStation(electroStationDefinition.power, electroStationDefinition.streetNumber);
            station.render();
        });
    }

    /**
     *
     */
    buildSolarPanels() {
        this.cityDefinition.solarPanels.forEach(panelDefinition => {
            let panel = new SolarPanel(panelDefinition.power, panelDefinition.streetNumber);
            panel.render();
        });
    }

    /**
     *
     * @returns {Object}
     */
    get cityDefinition() {
        return this._cityDefinition;
    }
}
