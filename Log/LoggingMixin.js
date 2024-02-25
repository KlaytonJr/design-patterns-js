import Provider from "../Provider/Provider.js";
import LogObserver from "./LogObserver.js";

export const LoggingMixin = {
    log(item, verb) {
        const logObserver = new LogObserver();

        if (this instanceof Provider) {
            this.logItem(item, verb)
                .then(() => {
                    logObserver.update();
                })
        }
    }
};