Tinytest.add('Bitcore package is correctly loaded', function (test) {
  test.equal(bitcore.version, 'v0.12.8');
});

Tinytest.add('Bitcore is working', function(test) {
  test.isTrue(bitcore.Address.isValid('126vMmY1fyznpZiFTTnty3cm1Rw8wuheev'));
})
