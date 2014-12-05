// This file was automatically generated from algorithm_runner.ander.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.AlgorithmRunner.templates');

goog.require('soy');


bitex.ui.AlgorithmRunner.templates.AlgorithmRunner = function(opt_data) {
  var output = '';
  /** @desc Market */
  var MSG_UNNAMED_66 = goog.getMsg('Market');
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '_form" class="algo-runner form-horizontal well" data-uniform-control-holder-class="control-group" ><div class="control-group" style=""><label class="control-label">' + MSG_UNNAMED_66 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.id) + '" class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.symbol.symbol) + '</label></div></div>';
  var fieldList13 = opt_data.algorithmDefinition['params'];
  var fieldListLen13 = fieldList13.length;
  for (var fieldIndex13 = 0; fieldIndex13 < fieldListLen13; fieldIndex13++) {
    var fieldData13 = fieldList13[fieldIndex13];
    output += '<div class="control-group"><label class="control-label">' + soy.$$escapeHtml(fieldData13['label']) + '</label><div class="controls"><input class="algo-runner-field" data-uniform-validators="' + soy.$$escapeHtml(fieldData13['validator']) + '" type="' + soy.$$escapeHtml(fieldData13['type']) + '" name="' + soy.$$escapeHtml(fieldData13['name']) + '" label="' + ((fieldData13['placeholder']) ? soy.$$escapeHtml(fieldData13['placeholder']) : '') + '" value="' + ((fieldData13['value']) ? soy.$$escapeHtml(fieldData13['value']) : '') + '" /></div></div>';
  }
  output += '<div class="control-group" style=""><div class="controls"><button id="' + soy.$$escapeHtml(opt_data.id) + '_btn_update_params" class="btn btn-primary" ' + ((opt_data.status == '1' || opt_data.status == '3') ? 'disabled' : '') + '></button><button id="' + soy.$$escapeHtml(opt_data.id) + '_btn_stop" class="btn btn-danger" style="' + ((opt_data.status == '0' || opt_data.status == '1') ? 'display:none;' : '') + '"  ' + ((opt_data.status == '3') ? 'disabled' : '') + '></button></div></div><small><i id="' + soy.$$escapeHtml(opt_data.id) + '_instance_id">' + soy.$$escapeHtml(opt_data.instanceID) + '</i></small></form>';
  return output;
};
