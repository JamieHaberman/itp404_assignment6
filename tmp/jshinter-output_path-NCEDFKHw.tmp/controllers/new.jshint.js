QUnit.module('JSHint | controllers/new.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/new.js should pass jshint.\ncontrollers/new.js: line 11, col 21, \'$\' is not defined.\n\n1 error');
});
