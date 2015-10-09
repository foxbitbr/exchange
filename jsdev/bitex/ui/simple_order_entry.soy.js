// This file was automatically generated from simple_order_entry.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.SimpleOrderEntry.templates');

goog.require('soy');


bitex.ui.SimpleOrderEntry.templates.SimpleOrderEntry = function(opt_data) {
  var output = '';
  /** @desc I want to sell */
  var MSG_UNNAMED_107 = goog.getMsg('Quantity');
  /** @desc for a total of */
  var MSG_UNNAMED_109 = goog.getMsg(' for a total of:');
  /** @desc I want to sell */
  var MSG_UNNAMED_111 = goog.getMsg('Total');
  /** @desc Fee label on simple order entry */
  var MSG_UNNAMED_113 = goog.getMsg('Fee');
  /** @desc Price per crypto currency label on simple order entry */
  var MSG_UNNAMED_115 = goog.getMsg(
      'Price per {$cryptocurrencydescription}:',
      {'cryptocurrencydescription': soy.$$escapeHtml(opt_data.cryptocurrencydescription)});
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '" class="order__cell"><!-- .order-form --><div class="order-form"><!-- .order-form__head --><header class="order-form__head"><h4 class="order-form__title"><i class="glyphicon glyphicon-shopping-cart"></i> ';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_99 = goog.getMsg('Buy');
    output += MSG_UNNAMED_99;
  } else {
    /** @desc Sell button in Order Entry */
    var MSG_UNNAMED_101 = goog.getMsg('Sell');
    output += MSG_UNNAMED_101;
  }
  output += ' BTC</h4></header><!-- /.order-form__head --><!-- .order-form__mid --><div class="order-form__mid"><!-- .form-group --><div class="form-group uniform-control-holder"><div class="input-group"><label for="' + soy.$$escapeHtml(opt_data.id) + '_qty" class="order-form__label">';
  if (opt_data.side == 1) {
    /** @desc I want to buy */
    var MSG_UNNAMED_103 = goog.getMsg('I want to buy:');
    output += MSG_UNNAMED_103;
  } else {
    /** @desc I want to sell */
    var MSG_UNNAMED_105 = goog.getMsg('I want to sell:');
    output += MSG_UNNAMED_105;
  }
  output += '<span class="add-on"></span></label><input id="' + soy.$$escapeHtml(opt_data.id) + '_qty" name="qty" data-uniform-label="' + MSG_UNNAMED_107 + '" class="form-control" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" type="text" required/><div id="' + soy.$$escapeHtml(opt_data.id) + '_amount_sign" id="' + soy.$$escapeHtml(opt_data.id) + '_amount_sign" class="input-group-addon  simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.crypto_currency_symbol) + '</div></div></div><!-- /.form-group --><!-- .form-group --><div class="form-group uniform-control-holder"><div class="input-group"><label for="' + soy.$$escapeHtml(opt_data.id) + '_total" class="order-form__label">' + MSG_UNNAMED_109 + '</label><input id="' + soy.$$escapeHtml(opt_data.id) + '_total" name="total" data-uniform-label="' + MSG_UNNAMED_111 + '" class="form-control" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" type="text" required/><div id="' + soy.$$escapeHtml(opt_data.id) + '_amount_sign" id="' + soy.$$escapeHtml(opt_data.id) + '_amount_sign" class="input-group-addon simple-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.currency_symbol) + '</div></div></div><!-- /.form-group --></div><!-- /.order-form__mid --><!-- .order-form__bot --><footer class="order-form__bot"><div class="order-form__total uniform-control-holder" style="padding-right: 10px; width: 60%;">' + MSG_UNNAMED_113 + ' ( ' + soy.$$escapeHtml(opt_data.formatted_fee) + ' ): <span id="' + soy.$$escapeHtml(opt_data.id) + '_fee"></span><br />' + MSG_UNNAMED_115 + '<strong><span id="' + soy.$$escapeHtml(opt_data.id) + '_avg_price"></span></strong></div><div class="order-form__action" style="padding-left: 10px; width: 40%;">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_117 = goog.getMsg('BUY');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_simple" class="btn btn-lg btn-success" style="display: block; width: 100%;">' + MSG_UNNAMED_117 + '</button>';
  } else {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_119 = goog.getMsg('SELL');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_simple" class="btn btn-lg btn-danger" style="display: block; width: 100%;">' + MSG_UNNAMED_119 + '</button>';
  }
  output += '</div></footer><!-- /.order-form__bot --></div><!-- /.order-form --></form>';
  return output;
};
