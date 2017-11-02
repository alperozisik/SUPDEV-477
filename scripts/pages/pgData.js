const Data = require('sf-core/data');
const extend = require('js-base/core/extend');
const PgDataDesign = require('ui/ui_pgData');
const Color = require('sf-core/ui/color');

const PgData = extend(PgDataDesign)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
  superOnShow();
  const page = this;
  var value = Data.getStringVariable("some data");
  if (value) {
    Object.assign(page.lbl, {
      text: "Emulator project is not cleared!",
      textColor: Color.RED
    });
  }
  else {
    Object.assign(page.lbl, {
      text: "Emulator was clear.\nWe have added new data",
      textColor: Color.create("#006400")
    });
    Data.setStringVariable("some data", "alper");
  }
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
}

module && (module.exports = PgData);
