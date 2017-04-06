/**
 * Этот класс описывает электростанции.
 */
class ElectroStation extends PowerGenerator{
    /**
     * Задача этого метода - вернуть ссылку на изображение станции.
     *
     * @returns {string}
     */
    getObjectPicture() {
        return 'electro station';
    }

    /**
     * Задача этого метода - нарисовать станцию в окне браузера.
     */
    render() {
        // первым делом находим контейнер наших станций
        let stations = document.querySelector('#stations');
        // потом создаем новый элемент, который будет выведент на экран. Пока мы элемент никуда не вставили
        // поэтому на текущий момент он еще не отображается
        let station = document.createElement('li');

        // теперь мы записываем текст в наш новый элемент
        station.textContent = 'Electro Station Street#' + this.streetNumber + ', Power: ' + this.power;

        // и вставляем элемент в контейнер. Сейчас он появляется на экране
        stations.appendChild(station);
    }
}
