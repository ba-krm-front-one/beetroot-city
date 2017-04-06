/**
 * Этот класс описывает солнечные панели.
 */
class SolarPanel extends PowerGenerator {
    /**
     * Задача этого метода - вернуть ссылку на изображение солнечной панели.
     *
     * @returns {string}
     */
    getObjectPicture() {
        return 'solar panel';
    }

    /**
     * Задача этого метода - нарисовать солнечную панель в окне браузера.
     */
    render() {
        // первым делом находим контейнер наших панелей
        let panels = document.querySelector('#panels');
        // потом создаем новый элемент, который будет выведент на экран. Пока мы элемент никуда не вставили
        // поэтому на текущий момент он еще не отображается
        let panel = document.createElement('li');

        // теперь мы записываем текст в наш новый элемент
        panel.textContent = 'Panel Street#' + this.streetNumber + ', Power: ' + this.power;

        // и вставляем элемент в контейнер. Сейчас он появляется на экране
        panels.appendChild(panel);
    }
}
