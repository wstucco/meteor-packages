Bitcore
=======

A pure and powerful JavaScript Bitcoin library.

### DEPRECATION NOTICE

This Meteor package is no longer being maintained. Use [frabrunelle:bitcore-lib](https://atmospherejs.com/frabrunelle/bitcore-lib) instead. It works on both the client and the server.

## Get Started

```
meteor install mikamai:bitcore
```

Using it in Meteor:

```javascript
assert(bitcore.Address.isValid('126vMmY1fyznpZiFTTnty3cm1Rw8wuheev'));
var simpleTx = new bitcore.Transaction();
var simpleTx.from(unspent).to(address, amount);
simpleTx.sign(privateKey);
```

## Documentation

Refer to the original [bitcore documentation](http://bitcore.io/guide/)
