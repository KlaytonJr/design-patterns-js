import Provider from "../Provider/Provider.js";

export default class LogObserver {
    logProvider = new Provider("logs");
    list = document.getElementById("log-list");

    constructor() {
        if (!LogObserver.instance) {
            LogObserver.instance = this;
        }

        return LogObserver.instance;
    }

    update() {
        const logs = this.logProvider.get();

        this.list.innerHTML = ``;
        logs.forEach(log => this.updateItem(log));

        feather.replace();
    }

    updateItem(log) {
        const item = document.createElement('div');
        item.classList.add('log-item');

        item.innerHTML = `
            <div class="log-item-header">
                <p>${log.id}</p>
                <p class="verb ${log.verb.toLowerCase()}">${log.verb}</p>
            </div>
            <div class="log-item-content">   
                <p>id: ${log.item?.id || log.item.new?.id }</p>
                <p>date: ${log.date}</p>
            </div>
        `;

        this.list.appendChild(item);
    }
}