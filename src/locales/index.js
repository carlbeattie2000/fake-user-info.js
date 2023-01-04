const ImpostorBase = require("../core/impostorBase");

const en_GB = require("./en_GB");
const en_US = require("./en_US");

class LocalesDefinition extends ImpostorBase {
  constructor() {
    super();
    
    this.locales = {}
  }

  defineLocale(tag, module) {
    this.locales[tag] = module;
  }

  getLocale(tag) {
    if (tag == "random") {
      const keys = Object.keys(this.locales);

      return this.locales[this.randomArrayElement(keys)];
    }

    if (!this.locales.hasOwnProperty(tag)) {
      return console.log("Country tag does not exist, or support has not been added.")
    }

    return this.locales[tag];
  }
}

const LocalesDefinitionExport = new LocalesDefinition();


// Create local module classes for export
LocalesDefinitionExport.defineLocale("en_GB", en_GB);
LocalesDefinitionExport.defineLocale("en_US", en_US);

module.exports = LocalesDefinitionExport;