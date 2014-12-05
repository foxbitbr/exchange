// This file was automatically generated from simple_order_entry.ander.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.SimpleOrderEntry.templates');

goog.require('soy');


bitex.ui.SimpleOrderEntry.templates.SimpleOrderEntry = function(opt_data) {
  var output = '';
  /** @desc I want to sell */
  var MSG_UNNAMED_77 = goog.getMsg('Quantity');
  /** @desc for a total of */
  var MSG_UNNAMED_79 = goog.getMsg(
      ' for a total of {$currencySymbol}',
      {'currencySymbol': soy.$$escapeHtml(opt_data.currency_symbol)});
  /** @desc I want to sell */
  var MSG_UNNAMED_81 = goog.getMsg('Total');
  /** @desc Fee label on simple order entry */
  var MSG_UNNAMED_87 = goog.getMsg('Fee');
  /** @desc Price per crypto currency label on simple order entry */
  var MSG_UNNAMED_89 = goog.getMsg(
      'Price per {$cryptocurrencydescription} :',
      {'cryptocurrencydescription': soy.$$escapeHtml(opt_data.cryptocurrencydescription)});
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '" class="trade"><!-- .trade__body --><div class="trade__body"><!-- .layout --><div class="layout layout--bottom layout--half"><!-- .layout__item --><div class="layout__item palm--one-whole four-tenths"><!-- .trade__label --><label for="" class="trade__label">';
  if (opt_data.side == 1) {
    /** @desc I want to buy */
    var MSG_UNNAMED_73 = goog.getMsg(
        'I want to buy {$cryptoCurrencySymbol}',
        {'cryptoCurrencySymbol': soy.$$escapeHtml(opt_data.crypto_currency_symbol)});
    output += MSG_UNNAMED_73;
  } else {
    /** @desc I want to sell */
    var MSG_UNNAMED_75 = goog.getMsg('I want to sell');
    output += MSG_UNNAMED_75;
  }
  output += '</label><!-- /.trade__label --><input id="' + soy.$$escapeHtml(opt_data.id) + '_qty" name="qty" data-uniform-label="' + MSG_UNNAMED_77 + '" class="input input--full" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" type="text" required/></div><!-- /.layout__item --><!-- .layout__item --><div class="layout__item palm--one-whole four-tenths"><!-- .trade__label --><label for="" class="trade__label">' + MSG_UNNAMED_79 + '</label><!-- /.trade__label --><input id="' + soy.$$escapeHtml(opt_data.id) + '_total" name="total" data-uniform-label="' + MSG_UNNAMED_81 + '" class="input input--full" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" type="text" required/></div><!-- /.layout__item --><!-- .layout__item --><div class="layout__item palm--one-whole two-tenths">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_83 = goog.getMsg('BUY');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_simple" class="btn btn--positive btn--full">' + MSG_UNNAMED_83 + '</button>';
  } else {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_85 = goog.getMsg('SELL');
    output += '<button id="' + soy.$$escapeHtml(opt_data.id) + '_action_simple" class="btn btn--negative btn--full">' + MSG_UNNAMED_85 + '</button>';
  }
  output += '</div><!-- /.layout__item --></div><!-- /.layout --></div><!-- /.trade__body --><!-- .trade__foot --><div class="trade__foot">' + MSG_UNNAMED_87 + ' ( ' + soy.$$escapeHtml(opt_data.formatted_fee) + ' ) : <span id="' + soy.$$escapeHtml(opt_data.id) + '_fee"></span>,' + MSG_UNNAMED_89 + '<strong><span id="' + soy.$$escapeHtml(opt_data.id) + '_avg_price"></span></strong></div><!-- /.trade__foot --></form>';
  return output;
};
