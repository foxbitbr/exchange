// This file was automatically generated from side_bar.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.view.SideBarView.templates');

goog.require('soy');


bitex.view.SideBarView.templates.YourAccountPortfolioValue = function(opt_data) {
  var output = '';
  /** @desc Approx. balance help message in the Your Balance widget in the Sidebar */
  var MSG_UNNAMED_123 = goog.getMsg(
      'Your total balance in {$currencyDescription} according to the most recent trade. This value varies according to the market. Be advised that this value doesn\'t represent your total balance or any commitment to the exchange rate.',
      {'currencyDescription': soy.$$escapeHtml(opt_data.currencyDescription)});
  /** @desc Approx. balance title in the Your Balance widget in the Sidebar */
  var MSG_UNNAMED_125 = goog.getMsg('Approx. value');
  output += '<span class="balance-currency__name"><i><abbr title="' + MSG_UNNAMED_123 + '">' + MSG_UNNAMED_125 + '</abbr></i></span> <span class="balance-currency__amount"><i><span class="bitex-model" data-model-key-list="' + soy.$$escapeHtml(opt_data.variables) + '" data-model-formula="' + soy.$$escapeHtml(opt_data.formula) + '" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(opt_data.currencyPattern) + '" data-blink-class="balance-info-blink"></span></i></span>';
  return output;
};


bitex.view.SideBarView.templates.YourAccountSummary = function(opt_data) {
  var output = '';
  /** @desc Unconfirmed deposits */
  var MSG_UNNAMED_127 = goog.getMsg('Unconfirmed deposits');
  var boxList20 = opt_data.boxes;
  var boxListLen20 = boxList20.length;
  for (var boxIndex20 = 0; boxIndex20 < boxListLen20; boxIndex20++) {
    var boxData20 = boxList20[boxIndex20];
    output += '<ul class="balance__currencies"><div><div><div><strong>' + soy.$$escapeHtml(boxData20['title']) + '</strong></div></div></div>';
    var balance_infoList24 = boxData20['balances'];
    var balance_infoListLen24 = balance_infoList24.length;
    for (var balance_infoIndex24 = 0; balance_infoIndex24 < balance_infoListLen24; balance_infoIndex24++) {
      var balance_infoData24 = balance_infoList24[balance_infoIndex24];
      output += '<!-- .balance-currency --><li class="balance-currency"><span class="balance-currency__name">' + soy.$$escapeHtml(balance_infoData24['currency']) + '</span> <span class="balance-currency__amount bitex-model" data-model-key-list="Balance_' + soy.$$escapeHtml(balance_infoData24['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData24['accountID']) + '_' + soy.$$escapeHtml(balance_infoData24['currency']) + '" data-model-formula="Balance_' + soy.$$escapeHtml(balance_infoData24['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData24['accountID']) + '_' + soy.$$escapeHtml(balance_infoData24['currency']) + ' / 100000000" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(balance_infoData24['currencyPattern']) + '" data-blink-class="balance-info-blink"></span></span> <abbr title="' + MSG_UNNAMED_127 + '" class="bitex-model" data-model-action="show_element" data-model-key-list="Position_' + soy.$$escapeHtml(balance_infoData24['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData24['accountID']) + '_' + soy.$$escapeHtml(balance_infoData24['currency']) + '" data-model-formula="Position_' + soy.$$escapeHtml(balance_infoData24['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData24['accountID']) + '_' + soy.$$escapeHtml(balance_infoData24['currency']) + '"><em><span class="bitex-model" data-model-key-list="Position_' + soy.$$escapeHtml(balance_infoData24['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData24['accountID']) + '_' + soy.$$escapeHtml(balance_infoData24['currency']) + '" data-model-formula="Position_' + soy.$$escapeHtml(balance_infoData24['brokerID']) + '_' + soy.$$escapeHtml(balance_infoData24['accountID']) + '_' + soy.$$escapeHtml(balance_infoData24['currency']) + ' / 100000000" data-model-formatter="currency" data-model-formatter-pattern="' + soy.$$escapeHtml(balance_infoData24['currencyPattern']) + '" data-blink-class="balance-info-blink"></span></em></abbr> ' + ((balance_infoData24['showDeposit']) ? '<a href="#" data-action="deposit" data-currency="' + soy.$$escapeHtml(balance_infoData24['currency']) + '"><i data-action="deposit" data-currency="' + soy.$$escapeHtml(balance_infoData24['currency']) + '" class="glyphicon glyphicon-save"></i></a>' : '') + ' ' + ((balance_infoData24['showWithdraw']) ? '<a href="#" data-action="withdraw" data-currency="' + soy.$$escapeHtml(balance_infoData24['currency']) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(balance_infoData24['currency']) + '" class="glyphicon glyphicon-open"></i></a>' : '') + '</li><!-- /.balance-currency --><li id="' + soy.$$escapeHtml(opt_data.id) + '_portfolio_value" class="balance-currency"></li>';
    }
    output += '</ul>';
  }
  return output;
};
