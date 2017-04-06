/**
 * Этот класс описывает дома.
 */
class House {
    /**
     *
     * @param {number} apartmentsCount  это кол-во квартир в доме. Его мы будем брать из нашего файла data
     * @param {number} streetNumber это номер улицы на которой находится генератор. Его мы будем брать из нашего файла data
     */
    constructor(apartmentsCount, streetNumber) {
        /**
         *
         * @type {number}
         * @private
         */
        this._apartmentsCount = apartmentsCount;
        /**
         * Это номер улицы на которой находится генератор, храним мы ее в приватном свойстве класса, чтобы никто не мог
         * изменить улицу в процессе работы программы - улица у нас всегда одна и не меняется.
         *
         * @type {number}
         * @private
         */
        this._streetNumber = streetNumber;
        /**
         * Это значение дневного потребления энергии в мегаваттах. Храним мы еего в приватном свойстве класса, т.к. это свойство
         * должно быть расчитано на основе кол-ва квартир и не может быть задано извне.
         * По умолчанию null т.к. мы хотим производить расчет этого значения только тогда, когда его запросят в геттере.
         *
         * @type {number}
         * @private
         */
        this._dayPowerConsumption = null;
        /**
         * Это значение ночного потребления энергии в мегаваттах. Храним мы еего в приватном свойстве класса, т.к. это свойство
         * должно быть расчитано на основе кол-ва квартир и не может быть задано извне.
         * По умолчанию null т.к. мы хотим производить расчет этого значения только тогда, когда его запросят в геттере.
         *
         * @type {number}
         * @private
         */
        this._nightPowerConsumption = null;

    }

    /**
     * Это геттер для _apartmentsCount, который дает только доступ на чтение к  _apartmentsCount и позволяет обращаться к _apartmentsCount
     * используя this.apartmentsCount (или аналогичным способом используя не this, а переменную в которой будет храниться обьект)
     *
     * @returns {number}
     */
    get apartmentsCount() {
        console.log('someone tries to access _apartmentsCount');
        return this._apartmentsCount;
    }

    /**
     * Это сеттер для _apartmentsCount. Суть сеттера заключается в том, чтобы мы могли записать значение в свойство
     * _apartmentsCount используя следующий синтакс this.apartmentsCount = 123 (или аналогичным способом используя не this, а переменную в которой будет храниться обьект)
     *
     * При срабатывании this.apartmentsCount = 123 выховется это т сетод и в value попадет значение того, что стоит справа от = (тоесть 123 из нашего примера)
     * далее мы можем с этим значением делать что захотим. Можем записать в свойство _apartmentsCount (this._apartmentsCount = value;) или же
     * запретить (в нашем методе мы запрещаем запись и только логирум попытку записи)
     *
     * @param {number} value
     */
    set apartmentsCount(value) {
        console.log('someone tries to set _apartmentsCount: ' + value);
    }

    /**
     * Это геттер для _streetNumber, который дает только доступ на чтение к  _streetNumber и позволяет обращаться к _streetNumber
     * используя this.streetNumber (или аналогичным способом используя не this, а переменную в которой будет храниться обьект)
     *
     * @returns {number}
     */
    get streetNumber() {
        return this._streetNumber;
    }



    /**
     * Это гететр для константного значения(которое никогда не изменяется). Тут мы всегда возвращаем одно и то же значение
     * дневного потребления энергии одной квартирой.
     *
     * @returns {number}
     */
    get apartmentDayPowerConsumption() {
        return 4;
    }

    /**
     * Это гететр для константного значения(которое никогда не изменяется). Тут мы всегда возвращаем одно и то же значение
     * ночного потребления энергии одной квартирой.
     *
     * @returns {number}
     */
    get apartmentNightPowerConsumption() {
        return 1;
    }

    /**
     *
     * Это геттер для _dayPowerConsumption, который дает только доступ на чтение к  _dayPowerConsumption и позволяет обращаться к _dayPowerConsumption
     * используя this.dayPowerConsumption (или аналогичным способом используя не this, а переменную в которой будет храниться обьект)
     *
     * @returns {number}
     */
    get dayPowerConsumption() {
        if (this._dayPowerConsumption == null) {
            this._dayPowerConsumption = this.calculateDayPowerConsumption();
        }
        return this._dayPowerConsumption;
    }

    /**
     * Это геттер для _nightPowerConsumption, который дает только доступ на чтение к  _nightPowerConsumption и позволяет обращаться к _nightPowerConsumption
     * используя this.nightPowerConsumption (или аналогичным способом используя не this, а переменную в которой будет храниться обьект)
     *
     * @returns {number}
     */
    get nightPowerConsumption() {
        if (this._nightPowerConsumption == null) {
            this._nightPowerConsumption = this.calculateNightPowerConsumption();
        }
        return this._nightPowerConsumption;
    }

    /**
     * Этот метод рассчитывает дневтое потребление энергии домом.
     * Рассчет основывается на кол-ве квартин и значении потребления одной квартиры.
     * Рассчеты идут в киловаттах, поэтомы в конче мы будем конвертировать киловатты в мегаватты.
     *
     * @returns {number}
     */
    calculateDayPowerConsumption() {
        let dayPowerConsumptionInKwt = this.apartmentsCount * this.apartmentDayPowerConsumption;
        return House.convertKwtToMwt(dayPowerConsumptionInKwt);
    }

    /**
     * Этот метод рассчитывает ночное потребление энергии домом.
     * Рассчет основывается на кол-ве квартин и значении потребления одной квартиры.
     * Рассчеты идут в киловаттах, поэтомы в конче мы будем конвертировать киловатты в мегаватты.
     *
     * @returns {number}
     */
    calculateNightPowerConsumption() {
        let nightPowerConsumption = this.apartmentsCount * this.apartmentNightPowerConsumption;
        return House.convertKwtToMwt(nightPowerConsumption);
    }

    /**
     * Этот метод кончертирует переданное ему значение в киловаттах в мегаватты
     *
     * @param {number} valueInKwt значение в киловаттах
     * @returns {number} ...
     */
    static convertKwtToMwt(valueInKwt) {
        return valueInKwt / 1000;
    }

    /**
     * Задача этого метода - вернуть ссылку на изображение дома.
     * @returns {string}
     */
    getObjectPicture() {
        return 'house';
    }

    /**
     * Задача этого метода - нарисовать дом в окне браузера.
     */
    render() {
        // первым делом находим контейнер наших домов
        let houses = document.querySelector('#houses');
        // потом создаем новый элемент, который будет выведент на экран. Пока мы элемент никуда не вставили
        // поэтому на текущий момент он еще не отображается
        let house = document.createElement('li');

        // теперь мы записываем текст в наш новый элемент
        house.textContent = 'House #' + this.streetNumber + ', Apartments count: ' + this.apartmentsCount;

        // и вставляем элемент в контейнер. Сейчас он появляется на экране
        houses.appendChild(house);
    }
}



