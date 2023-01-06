notify = {
    setup: function (conf) {
        let custom_html = typeof conf != 'undefined' && conf.html ? conf.html : null
        let position = typeof conf != 'undefined' && conf.position ? conf.position : null
        self.notify.config = {
            title: typeof conf != 'undefined' && typeof conf.title == "boolean" ? conf.title : true,
            icon: typeof conf != 'undefined' && typeof conf.icon == "boolean" ? conf.icon : true,
            html: self.notify.html_layout(custom_html),
            timeout: typeof conf != 'undefined' && conf.timeout ? conf.timeout : 4000, // auto remove timeout (in ms),
            position: self.notify.positions(position)
        }
    },
    positions: function (position) {
        let positions = ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-center', 'bottom-right', 'left-middle', 'right-middle']
        return positions.includes(position) ? position : 'top-right'
    },
    types: function () {
        return {
            'danger': ['danger', 'error'],
            'info': ['information', 'info', 'message'],
            'success': ['success'],
            'warning': ['warning'],
            'notice': ['notice']
        }
    },
    show: function (type = 'info', message = null, title = null) {
        let type_list = self.notify.types()
        let type_to_use = 'info'
        for (let list in type_list) {
            type_to_use = type_list[list].includes(type) ? list : type_to_use
        }

        //html
        self.notify.append_html()   // add notify defailt and hide it
        self.notify.append_notify_type(type_to_use) // append appropriate class according to notification to apply css
        self.notify.append_notify_message(message)
        self.notify.display_notify()
        //display noty
    },
    append_html: function () {
        let default_html = self.notify.config.html
        let container = document.getElementsByClassName('notify__container')[0]
        if (container) {
            container.insertAdjacentHTML('beforeend', default_html)
        } else {
            let container = document.createElement('div')
            container.className = 'notify__container ' + self.notify.config.position
            container.innerHTML = default_html
            let html_body = document.getElementsByTagName('body')[0]
            html_body.append(container)
        }
        /**
         * Hide default last element that is added so we can add css, class and message to notify
         *
         * Once all added we will display this
         */
        container = document.getElementsByClassName('notify__container')[0]
        container.lastElementChild.style.display = 'none'
    },
    append_notify_type: function (type) {
        let container = document.getElementsByClassName('notify__container')[0]
        container.lastElementChild.className += ' notify__' + type
    },
    append_notify_message: function (message) {
        let container = document.getElementsByClassName('notify__container')[0]
        let total_container = container.getElementsByClassName('notify__message').length
        let message_container = container.getElementsByClassName('notify__message')[total_container - 1]
        if (message_container) {
            message_container.textContent = message
        }
    },
    display_notify: function () {
        container = document.getElementsByClassName('notify__container')[0]
        container.lastElementChild.style.display = 'block'

        // psudo element (::after) for progress bar
        let progressBarTimeout = self.notify.config.timeout
        setTimeout(function () {
            container.lastElementChild.style.setProperty('--jsProgressBarWidth', '0')
            container.lastElementChild.style.setProperty('--jsProgressBarTimeout', 'all ' + progressBarTimeout + 'ms linear 0s')
        }, 10)

        // remove first noty after timeout
        setTimeout(function () {
            container.firstElementChild.remove()
        }, self.notify.config.timeout)
    },
    html_layout: function (html = null) {
        if (html) {
            return html
        }
        return '<div class="notify__area"><div class="notify__icon"></div><div class="notify__content">' +
            '<div class="notify__title"></div><div class="notify__message">test</div></div></div>'
    }
}

notify.setup({
    html: '<div class="notify__message">This i </div>'
})
notify.show('error', 'new')
notify.show('info', 'new')
notify.show('success', 'new')
notify.show('warning', 'nesdw')
notify.show('notice', 'newsdfff')