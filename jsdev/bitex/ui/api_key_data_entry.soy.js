// This file was automatically generated from api_key_data_entry.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.APIKeyDataEntry.templates');

goog.require('soy');


bitex.ui.APIKeyDataEntry.templates.APIKeyDataEntry = function(opt_data) {
  var output = '';
  /** @desc API Key Data Entry form legend */
  var MSG_UNNAMED_114 = goog.getMsg('Create API Key');
  /** @desc Permissions clear all button on the API Key Data Entry form */
  var MSG_UNNAMED_116 = goog.getMsg('Clear all');
  /** @desc Permissions select all button on the API Key Data Entry form */
  var MSG_UNNAMED_118 = goog.getMsg('Select all');
  /** @desc Permissions title on the API Key Data Entry form */
  var MSG_UNNAMED_120 = goog.getMsg('Permissions');
  /** @desc Your Account on the API Key Data Entry form permissions section */
  var MSG_UNNAMED_122 = goog.getMsg('Your Account');
  /** @desc Account info permission label on API Key data entry */
  var MSG_UNNAMED_124 = goog.getMsg('Account info');
  /** @desc Order history permission label on API Key data entry */
  var MSG_UNNAMED_126 = goog.getMsg('Order history');
  /** @desc Ledger permission label on API Key data entry */
  var MSG_UNNAMED_128 = goog.getMsg('Ledger');
  /** @desc View withdrawals permission label on API Key data entry */
  var MSG_UNNAMED_130 = goog.getMsg('View withdrawals');
  /** @desc Balance permission label on API Key data entry */
  var MSG_UNNAMED_132 = goog.getMsg('Balance info');
  /** @desc View Deposits permission label on API Key data entry */
  var MSG_UNNAMED_134 = goog.getMsg('View deposits');
  /** @desc Buy and Sell orders on the API Key Data Entry form permissions section */
  var MSG_UNNAMED_136 = goog.getMsg('Buy and Sell Orders');
  /** @desc Buy limited orders permission label on API Key data entry */
  var MSG_UNNAMED_138 = goog.getMsg('Create Buy Limited Order');
  /** @desc Sell limited orders permission label on API Key data entry */
  var MSG_UNNAMED_140 = goog.getMsg('Create Sell Limited Order');
  /** @desc Buy market orders permission label on API Key data entry */
  var MSG_UNNAMED_142 = goog.getMsg('Create Buy Market Order');
  /** @desc Sell limited orders permission label on API Key data entry */
  var MSG_UNNAMED_144 = goog.getMsg('Create Sell Market Order');
  /** @desc Cancel orders permission label on API Key data entry */
  var MSG_UNNAMED_146 = goog.getMsg('Cancel Orders');
  /** @desc Deposit methods on the API Key Data Entry form permissions section */
  var MSG_UNNAMED_148 = goog.getMsg('Deposit');
  /** @desc Withdrawals methods on the API Key Data Entry form permissions section */
  var MSG_UNNAMED_150 = goog.getMsg('Withdrawals');
  /** @desc IP Whitelist title on the API Key Data Entry form */
  var MSG_UNNAMED_152 = goog.getMsg('IP Whitelist');
  /** @desc IP Addresses on the API Key Data Entry form IP Whitelist section */
  var MSG_UNNAMED_154 = goog.getMsg('IP Addresses');
  /** @desc IP Whitelist help on the API Key Data Entry form */
  var MSG_UNNAMED_156 = goog.getMsg('Enter a list of IP Address separated by comma (ie. 55.55.55.55,44.44.44.44) that you want to white list. Not specifying an IP Address means that you are allowing this API Key to be used from any IP');
  output += '<form  id="' + soy.$$escapeHtml(opt_data.id) + '_form" class="api-key-data-entry-form"><fieldset><h2>' + MSG_UNNAMED_114 + '</h2><div class="api-key-data-entry-form-block control-group"><label>API Key Label<input id="' + soy.$$escapeHtml(opt_data.id) + '_label" type="text" class="input-block-level"></label></div><div class="api-key-data-entry-form-block control-group"><div class="pull-right"><label class="no-selection">' + MSG_UNNAMED_116 + '</label></div><div class="pull-right api-key-data-entry-form-pipe">|</div><div class="pull-right"><label class="no-selection">' + MSG_UNNAMED_118 + '</label></div><h3>' + MSG_UNNAMED_120 + '</h3><table id="' + soy.$$escapeHtml(opt_data.id) + '_permissions_table" class="api-key-data-entry-form-permissions-table"><tbody><tr><td colspan="2"><h4>' + MSG_UNNAMED_122 + '</h4></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="BF">' + MSG_UNNAMED_124 + '</input></label></td><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U4">' + MSG_UNNAMED_126 + '</input></label></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U34">' + MSG_UNNAMED_128 + '</input></label></td><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U26">' + MSG_UNNAMED_130 + '</input></label></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U2">' + MSG_UNNAMED_132 + '</input></label></td><td  class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U30">' + MSG_UNNAMED_134 + '</input></label></td></tr><tr><td colspan="2"><h4>' + MSG_UNNAMED_136 + '</h4></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="D" data-permission-filters=\'[ ["Side","eq", "1", "OrdType","eq","2"]]\'>' + MSG_UNNAMED_138 + '</input></label></td><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="D" data-permission-filters=\'[ ["Side","eq", "2", "OrdType","eq","2"]]\'>' + MSG_UNNAMED_140 + '</input></label></td></tr><tr><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check"  data-permission-msg="D" data-permission-filters=\'[ ["Side","eq", "1", "OrdType","eq","1"]]\'>' + MSG_UNNAMED_142 + '</input></label></td><td class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check"  data-permission-msg="D" data-permission-filters=\'[ ["Side","eq", "2" , "OrdType","eq","1"]]\'>' + MSG_UNNAMED_144 + '</input></label></td></tr><tr><td colspan="2" class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="F">' + MSG_UNNAMED_146 + '</input></label></td></tr><tr><td colspan="2"><h4>' + MSG_UNNAMED_148 + '</h4></td></tr><tr><td colspan="2" class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U18" data-permission-filters=\'[ ["Currency","eq", "BTC"]]\'>Bitcoin</input></label></td></tr>';
  var mList64 = opt_data.depositMethods;
  var mListLen64 = mList64.length;
  for (var mIndex64 = 0; mIndex64 < mListLen64; mIndex64++) {
    var mData64 = mList64[mIndex64];
    output += '<tr><td colspan="2" class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U18" data-permission-filters=\'[ ["DepositMethodID","eq", "' + soy.$$escapeHtml(mData64['id']) + '"]]\' >' + soy.$$escapeHtml(mData64['currency']) + ' - ' + soy.$$escapeHtml(mData64['description']) + '</input></label></td></tr>';
  }
  output += '<tr><td colspan="2"><h4>' + MSG_UNNAMED_150 + '</h4></td></tr>';
  var mList77 = opt_data.withdrawalMethods;
  var mListLen77 = mList77.length;
  for (var mIndex77 = 0; mIndex77 < mListLen77; mIndex77++) {
    var mData77 = mList77[mIndex77];
    output += '<tr><td colspan="2" class="no-selection"><label class="checkbox"><input type="checkbox" class="api-key-data-entry-form-permissions-check" data-permission-msg="U6" data-permission-filters=\'[ ["Method", "eq", "' + soy.$$escapeHtml(mData77['id']) + '" ] ]\' >' + soy.$$escapeHtml(mData77['currency']) + ' - ' + soy.$$escapeHtml(mData77['description']) + '</input></label></td></tr>';
  }
  output += '</tbody></table></div><div class="api-key-data-entry-form-block control-group"><h3>' + MSG_UNNAMED_152 + '</h3><label>' + MSG_UNNAMED_154 + '<input id="' + soy.$$escapeHtml(opt_data.id) + '_ip_whitelist" type="text" class="input-block-level"><span class="helpblock">' + MSG_UNNAMED_156 + '</span></label></div><div class="text-center"><button id="' + soy.$$escapeHtml(opt_data.id) + '_cancel_btn" class="btn">Cancel</button><button id="' + soy.$$escapeHtml(opt_data.id) + '_create_btn" type="submit" class="btn btn-primary">Create</button></div></fieldset></form>';
  return output;
};
