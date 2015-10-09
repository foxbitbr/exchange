// This file was automatically generated from order_book.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.OrderBook.templates');

goog.require('soy');


bitex.ui.OrderBook.templates.OrderBook = function(opt_data) {
  var output = '<div class="orders"><!-- .orders__head --><header class="orders__head"><h4 class="orders__title">' + soy.$$escapeHtml(opt_data.title) + '</h4><div class="orders__status">Buying: <strong>BRL 496.90</strong></div></header><!-- /.orders__head --><!-- .orders__body --><div class="orders__body"><!-- .table-responsive --><div class="table-responsive"><!-- .orders-table --><table class="orders-table table"><thead><tr>';
  var columnList6 = opt_data.columns;
  var columnListLen6 = columnList6.length;
  for (var columnIndex6 = 0; columnIndex6 < columnListLen6; columnIndex6++) {
    var columnData6 = columnList6[columnIndex6];
    output += '<th>' + soy.$$escapeHtml(columnData6) + '</th>';
  }
  output += '</tr></thead><tbody></tbody></table><!-- /.orders-table --></div><!-- /.table-responsive --></div><!-- /.orders__body --></div>';
  return output;
};


bitex.ui.OrderBook.templates.OrderBookDragOrder = function(opt_data) {
  var output = '';
  /** @desc Caption shown when user is drag & dropping an order in the order book */
  var MSG_UNNAMED_99 = goog.getMsg('Cancel/Replace Order');
  output += '<div class="order-book-drag-order">' + MSG_UNNAMED_99 + '</div>';
  return output;
};


bitex.ui.OrderBook.templates.OrderBookOrderQtyEl = function(opt_data) {
  return '<td class="order-book-qty">' + soy.$$escapeHtml(opt_data.qty) + '</td>';
};


bitex.ui.OrderBook.templates.OrderBookOrderPriceEl = function(opt_data) {
  return '<td class="order-book-price ' + ((opt_data.side == '0') ? 'order-book-right' : 'order-book-left') + '">' + soy.$$escapeHtml(opt_data.price) + '</td>';
};


bitex.ui.OrderBook.templates.OrderBookOrderUsernameEl = function(opt_data) {
  return (opt_data.orderId) ? '<td class="order-book-username ' + ((opt_data.side == '0') ? 'order-book-left' : 'order-book-right') + '"><a href="" class="btn-cancel-order text-error" data-order-id="' + soy.$$escapeHtml(opt_data.orderId) + '">' + ((opt_data.side == '0') ? '<i class="glyphicon glyphicon-remove" data-order-id="' + soy.$$escapeHtml(opt_data.orderId) + '" style="line-height:2px;"></i> ' + soy.$$escapeHtml(opt_data.username) : soy.$$escapeHtml(opt_data.username) + ' <i class="glyphicon glyphicon-remove" data-order-id="' + soy.$$escapeHtml(opt_data.orderId) + '" style="line-height:2px;"></i>') + '</a></td>' : '<td class="order-book-username ' + ((opt_data.side == '0') ? 'order-book-left' : 'order-book-right') + '">' + soy.$$escapeHtml(opt_data.username) + '</td>';
};


bitex.ui.OrderBook.templates.OrderBookOrderRow = function(opt_data) {
  return '<tr class="order-book-row">' + ((opt_data.side == '0') ? bitex.ui.OrderBook.templates.OrderBookOrderUsernameEl(opt_data) + bitex.ui.OrderBook.templates.OrderBookOrderQtyEl(opt_data) + bitex.ui.OrderBook.templates.OrderBookOrderPriceEl(opt_data) : bitex.ui.OrderBook.templates.OrderBookOrderPriceEl(opt_data) + bitex.ui.OrderBook.templates.OrderBookOrderQtyEl(opt_data) + bitex.ui.OrderBook.templates.OrderBookOrderUsernameEl(opt_data)) + '</tr>';
};
