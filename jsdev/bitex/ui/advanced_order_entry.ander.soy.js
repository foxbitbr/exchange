// This file was automatically generated from advanced_order_entry.ander.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.AdvancedOrderEntry.templates');

goog.require('soy');


bitex.ui.AdvancedOrderEntry.templates.AdvancedOrderEntry = function(opt_data) {
  var output = '';
  /** @desc Amount label in Advanced Order Entry */
  var MSG_UNNAMED_116 = goog.getMsg('Amount:');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_118 = goog.getMsg('Amount');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_120 = goog.getMsg('Price');
  /** @desc Total label in Order Entry */
  var MSG_UNNAMED_122 = goog.getMsg('Total:');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_124 = goog.getMsg('Total');
  /** @desc Client ID label in Order Entry */
  var MSG_UNNAMED_126 = goog.getMsg('Client ID');
  /** @desc Advanced Order Entry Label */
  var MSG_UNNAMED_128 = goog.getMsg('Client ID');
  output += '<form id="' + soy.$$escapeHtml(opt_data.id) + '" class="layout__item one-whole desk--one-half order-entry" data-uniform-control-holder-class="uniform-control-holder"><input id="' + soy.$$escapeHtml(opt_data.id) + '_symbol" type="hidden" name="symbol" value="' + soy.$$escapeHtml(opt_data.symbol) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_side" type="hidden" name="side" value="' + soy.$$escapeHtml(opt_data.side) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_type" type="hidden" name="type" value="' + soy.$$escapeHtml(opt_data.type) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_is_broker" type="hidden" value="' + soy.$$escapeHtml(opt_data.is_broker) + '"><input id="' + soy.$$escapeHtml(opt_data.id) + '_broker_id" type="hidden" name="broker_id" value="' + soy.$$escapeHtml(opt_data.broker_id) + '"><!-- .box --><div class="box box--bid-ask box--push-bottom"><!-- .box__head --><header class="box__head">';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_112 = goog.getMsg('Buy');
    output += MSG_UNNAMED_112;
  } else {
    /** @desc Sell button in Order Entry */
    var MSG_UNNAMED_114 = goog.getMsg('Sell');
    output += MSG_UNNAMED_114;
  }
  output += ' BTC</header><!-- /.box__head --><!-- .box__body --><div class="box__body"><!-- .table --><table class="table table--bordered table--bid-ask"><tbody><tr class="uniform-control-holder"><th class="one-half lap--four-tenths"><label for="" class="order-entry-label"><span>' + MSG_UNNAMED_116 + ' ' + soy.$$escapeHtml(opt_data.amount_currency_symbol) + '</label></th><td class="one-half lap--six-tenths order-entry-data"><input id="' + soy.$$escapeHtml(opt_data.id) + '_amount" name="amount" type="text" class="input input--full" data-uniform-label="' + MSG_UNNAMED_118 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" value="" required/></td></tr><tr class="uniform-control-holder"><th class="one-half lap--four-tenths"><label for=""><strong><span class="add-on advanced-order-entry-price-sign">' + soy.$$escapeHtml(opt_data.price_currency_symbol) + '</span></strong></label></th><td class="one-half lap--six-tenths order-entry-data"><input id="' + soy.$$escapeHtml(opt_data.id) + '_price" name="price" type="text" class="input input--full" data-uniform-label="' + MSG_UNNAMED_120 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" required/></td></tr><tr class="uniform-control-holder"><th class="one-half lap--four-tenths"><strong>' + MSG_UNNAMED_122 + '</strong></th><td class="one-half lap--four-tenths order-entry-data"><input id="' + soy.$$escapeHtml(opt_data.id) + '_total" name="total" type="text" class="input input--full" data-uniform-label="' + MSG_UNNAMED_124 + '" data-uniform-validators="validateNumber; required" data-uniform-type="number" data-uniform-filters="positive_number" required/></td></tr></tbody></table></div><!-- /.box__body --><!-- .box__foot --><footer class="box__foot uniform-control-holder"><!-- .layout --><div class="layout layout--half"><!-- .layout__item --><div class="layout__item six-tenths"><input id="' + soy.$$escapeHtml(opt_data.id) + '_client_id" name="client_id" type="text" value="' + ((opt_data.client_id) ? soy.$$escapeHtml(opt_data.client_id) : '') + '" class="input input--full" label="' + MSG_UNNAMED_126 + '" data-uniform-label="' + MSG_UNNAMED_128 + '"' + ((opt_data.is_broker) ? 'data-uniform-validators="required"' : 'style="display:none" disabled') + '/></div><!-- /.layout__item --><!-- .layout__item --><div class="layout__item four-tenths"><button id="' + soy.$$escapeHtml(opt_data.id) + '_action" class="btn btn--mini btn--full ' + ((opt_data.side == 1) ? 'btn--positive' : 'btn--negative') + ' btn-execution"><i class="icon-shopping-cart"></i>&nbsp;';
  if (opt_data.side == 1) {
    /** @desc Buy button in Order Entry */
    var MSG_UNNAMED_130 = goog.getMsg('BUY');
    output += MSG_UNNAMED_130;
  } else {
    /** @desc Sell button in Order Entry */
    var MSG_UNNAMED_132 = goog.getMsg('SELL');
    output += MSG_UNNAMED_132;
  }
  output += '</button></div><!-- /.layout__item --></div><!-- /.layout --></footer><!-- /.box__foot --></div><!-- /.box --></form>';
  return output;
};
