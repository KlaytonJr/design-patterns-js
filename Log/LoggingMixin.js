import Provider from "../Provider/Provider.js";

export const LoggingMixin = {
    log(item, verb) {
      if (this instanceof Provider) {
        this.logItem(item, verb);
      }
    }
};