/**
 * Задача этого класса - построить город.
 */
class BuildingsFactory {
    /**
     *
     * @param {Object} cityDefinition
     */
    constructor(cityDefinition) {
        /**
         * Это массив с определениями строений в городе. Храним мы еего в приватном свойстве класса, т.к. определения
         * приходят в конструктор и потом не должны меняться.
         *
         * @type {Object}
         * @private
         */
        this._cityDefinition = cityDefinition;
    }

    /**
     * Это основной метод, у котором заключена логика постройки города.
     * Сначала иы строим электростанции, потом солнечные панели, а только потом дома
     */
    buildCity() {
        this.buildElectroStations();
        this.buildSolarPanels();
        this.buildHouses();
    }

    /**
     * Это метод постройки электростанций. Он обращается к ассоциативному массиву с определением готода (cityDefinition) и берет оттуда
     * конфигурацию электростанций (electroStations), которая является обычным массивом, и начинает перебирать этот массив и создавать
     * обьыекты класса ElectroStation, а потом выводить их на экран, вызывая метод  render у каждой станции.
     */
    buildElectroStations() {
        this.cityDefinition.electroStations.forEach(electroStationDefinition => {
            let station = new ElectroStation(electroStationDefinition.power, electroStationDefinition.streetNumber);
            station.render();
        });
    }

    /**
     * Это метод постройки солнечных панелей. Он обращается к ассоциативному массиву с определением готода (cityDefinition) и берет оттуда
     * конфигурацию электростанций (solarPanels), которая является обычным массивом, и начинает перебирать этот массив и создавать
     * обьыекты класса SolarPanel, а потом выводить их на экран, вызывая метод  render у каждой панели.
     */
    buildSolarPanels() {
        this.cityDefinition.solarPanels.forEach(panelDefinition => {
            let panel = new SolarPanel(panelDefinition.power, panelDefinition.streetNumber);
            panel.render();
        });
    }

    /**
     * Это метод постройки домов. Он обращается к ассоциативному массиву с определением готода (cityDefinition) и берет оттуда
     * конфигурацию домов (houses), которая является обычным массивом, и начинает перебирать этот массив и создавать
     * обьыекты класса House, а потом выводить их на экран, вызывая метод  render у каждого дома.
     */
    buildHouses() {
        this.cityDefinition.houses.forEach(houseDefinition => {
            let house = new House(houseDefinition.apartmentsCount, houseDefinition.streetNumber);
            house.render();
        });
    }

    /**
     * Это геттер для _cityDefinition, который дает только доступ на чтение к  _cityDefinition и позволяет обращаться к _cityDefinition
     * используя this.cityDefinition (или аналогичным способом используя не this, а переменную в которой будет храниться обьект)
     *
     * @returns {Object}
     */
    get cityDefinition() {
        return this._cityDefinition;
    }
}
