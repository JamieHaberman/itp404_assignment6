define('crud-in-class/tests/routes/artists/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/artists/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/artists/new.js should pass jshint.\nroutes/artists/new.js: line 20, col 5, Unreachable \'return\' after \'return\'.\nroutes/artists/new.js: line 8, col 19, \'$\' is not defined.\n\n2 errors');
  });
});