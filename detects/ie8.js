/*!
 * IE8
 * @cc_on Conditional Compilation to test the
 * JavaScript versions
 */
conditionizr.add('ie8', [], function () {
  var version = false;
  /*@cc_on if (@_jscript_version > 5.7 && !/^(9|10)/.test(@_jscript_version))
  version = true @*/
  return version;
});
