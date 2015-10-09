// This file was automatically generated from deposit_withdraw_button_group.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.DepositWithdrawButtonGroup.templates');

goog.require('soy');


bitex.ui.DepositWithdrawButtonGroup.templates.DepositWithdrawButtonGroup = function(opt_data) {
  var output = '<div id="' + soy.$$escapeHtml(opt_data.id) + '" class="deposit-withdraw-button-group" >';
  var buttonList6 = opt_data.buttons;
  var buttonListLen6 = buttonList6.length;
  for (var buttonIndex6 = 0; buttonIndex6 < buttonListLen6; buttonIndex6++) {
    var buttonData6 = buttonList6[buttonIndex6];
    output += '<button class="btn btn-default btn-mini text-center" data-currency="' + soy.$$escapeHtml(buttonData6['currency']) + '" data-action="' + soy.$$escapeHtml(buttonData6['mode']) + '">';
    if (buttonData6['mode'] == 'deposit') {
      /** @desc Button caption label on deposit button in the deposit view */
      var MSG_UNNAMED_39 = goog.getMsg(
          'Deposit {$xxx}',
          {'xxx': soy.$$escapeHtml(buttonData6['currencyDescription'])});
      output += '<h2 class="icon-download-alt"> ' + soy.$$escapeHtml(buttonData6['currencySign']) + '</h2><br>' + MSG_UNNAMED_39;
    } else {
      /** @desc Button caption label on withdraw button in the withdraw view */
      var MSG_UNNAMED_41 = goog.getMsg(
          'Withdraw {$xxx}',
          {'xxx': soy.$$escapeHtml(buttonData6['currencyDescription'])});
      output += '<h2 class="icon-upload-alt"> ' + soy.$$escapeHtml(buttonData6['currencySign']) + '</h2><br>' + MSG_UNNAMED_41;
    }
    output += '</button>&nbsp;';
  }
  output += '</div>';
  return output;
};
