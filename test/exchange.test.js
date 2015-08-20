test('buy should add a BUY nodestockmarket order', function(done) {
  exchangeData = enchange.buy(40, 100, exchangeData);
  exchangeData.buys.volumes[40].should.eql(100);
  done();
});
