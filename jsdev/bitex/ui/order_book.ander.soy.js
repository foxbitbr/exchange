// This file was automatically generated from order_book.ander.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.OrderBook.templates');

goog.require('soy');


bitex.ui.OrderBook.templates.OrderBook = function(opt_data) {
  var output = '<div class="box box--history box--push-bottom"><!-- .box__head --><header class="box__head">' + soy.$$escapeHtml(opt_data.title) + '</header><!-- /.box__head --><!-- .box__body --><div class="box__body box__body--slide-x"><!-- .table --><table class="table table--bordered table--striped"><thead><tr>';
  var columnList6 = opt_data.columns;
  var columnListLen6 = columnList6.length;
  for (var columnIndex6 = 0; columnIndex6 < columnListLen6; columnIndex6++) {
    var columnData6 = columnList6[columnIndex6];
    output += '<th>' + soy.$$escapeHtml(columnData6) + '</th>';
  }
  output += '</tr></thead><tbody></tbody></table></div><!-- /.box__body --></div>';
  return output;
};
