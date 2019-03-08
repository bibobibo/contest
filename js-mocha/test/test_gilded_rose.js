var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it("shows a passed test", function() {
    const items = [new Item('normal', 10, 20)]
    const shop = new Shop(items)

    shop.updateQuality()

    expect(shop.items[0].sellIn).to.equal(9);
    expect(shop.items[0].quality).to.equal(19);
  });

});
