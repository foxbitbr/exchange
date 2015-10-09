// This file was automatically generated from templates.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.templates');

goog.require('soy');


bitex.templates.AlgoPermissionsDialogContent = function(opt_data) {
  var output = '';
  /** @desc Algorithm trading request permmissions dialog content */
  var MSG_UNNAMED_1458 = goog.getMsg('This algorithm is requesting your permission to:');
  output += '<p class="lead"> ' + MSG_UNNAMED_1458 + '</p><ul class="list-unstyled" style="line-height: 2">';
  var permissionList7 = opt_data.permissions;
  var permissionListLen7 = permissionList7.length;
  for (var permissionIndex7 = 0; permissionIndex7 < permissionListLen7; permissionIndex7++) {
    var permissionData7 = permissionList7[permissionIndex7];
    output += '<li><span class="fa fa-check text-success"></span>';
    switch (permissionData7) {
      case 'notification':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1460 = goog.getMsg(' Show notifications');
        output += MSG_UNNAMED_1460;
        break;
      case 'balance':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1462 = goog.getMsg(' See your balances');
        output += MSG_UNNAMED_1462;
        break;
      case 'execution_report':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1464 = goog.getMsg(' Listen to the execution reports from your orders');
        output += MSG_UNNAMED_1464;
        break;
      case 'new_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1466 = goog.getMsg(' Send limited orders');
        output += MSG_UNNAMED_1466;
        break;
      case 'new_buy_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1468 = goog.getMsg(' Send buy limited orders');
        output += MSG_UNNAMED_1468;
        break;
      case 'new_sell_order_limited':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1470 = goog.getMsg(' Send sell limited orders');
        output += MSG_UNNAMED_1470;
        break;
      case 'new_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1472 = goog.getMsg(' Send market orders');
        output += MSG_UNNAMED_1472;
        break;
      case 'new_buy_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1474 = goog.getMsg(' Send buy market orders');
        output += MSG_UNNAMED_1474;
        break;
      case 'new_sell_market_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1476 = goog.getMsg(' Send sell market order');
        output += MSG_UNNAMED_1476;
        break;
      case 'cancel_order':
        /** @desc Permission in Algo Permissions Dialog */
        var MSG_UNNAMED_1478 = goog.getMsg(' Cancel orders');
        output += MSG_UNNAMED_1478;
        break;
      default:
        output += soy.$$escapeHtml(permissionData7);
    }
    output += '</li>';
  }
  output += '</ul>';
  return output;
};


bitex.templates.CustomerDetailDialog = function(opt_data) {
  var output = '';
  /** @desc Customer username */
  var MSG_UNNAMED_1480 = goog.getMsg('Username:');
  output += '<div class="row"><div class="span6">' + MSG_UNNAMED_1480 + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</div></div>';
  return output;
};


bitex.templates.ErrorDialogContent = function(opt_data) {
  var output = '';
  /** @desc Error code label on error dialog content */
  var MSG_UNNAMED_1482 = goog.getMsg('Error code');
  output += '<p class="lead">' + soy.$$escapeHtml(opt_data.error_message) + '</p><dl class="dl-horizontal"><dt>' + MSG_UNNAMED_1482 + '</dt><dd>' + soy.$$escapeHtml(opt_data.error_code) + '</dd></dl>';
  return output;
};


bitex.templates.FileViewDialogContent = function(opt_data) {
  return '<img src="' + soy.$$escapeHtml(opt_data.filename) + '" style="width:500px"/>';
};


bitex.templates.DepositDetailDialogContent = function(opt_data) {
  var output = '<table class="table table-bordered table-condensed"><tbody>';
  var dataList66 = opt_data.depositDetailData;
  var dataListLen66 = dataList66.length;
  for (var dataIndex66 = 0; dataIndex66 < dataListLen66; dataIndex66++) {
    var dataData66 = dataList66[dataIndex66];
    output += '<tr><td>' + soy.$$escapeHtml(dataData66['key']) + ' :</td><td>' + soy.$$escapeHtml(dataData66['value']) + '</td></tr>';
  }
  if (opt_data.depositReceiptList) {
    /** @desc Download picture link on deposit receipt dialog content */
    var MSG_UNNAMED_1484 = goog.getMsg('Download');
    output += '<tr><td>Recibo:</td><td>';
    var receiptList76 = opt_data.depositReceiptList;
    var receiptListLen76 = receiptList76.length;
    for (var receiptIndex76 = 0; receiptIndex76 < receiptListLen76; receiptIndex76++) {
      var receiptData76 = receiptList76[receiptIndex76];
      output += '<a href="' + soy.$$escapeHtml(receiptData76['url']) + '" target="_blank">' + MSG_UNNAMED_1484 + '</a> ';
    }
    output += '</td></tr>';
    var receiptList85 = opt_data.depositReceiptList;
    var receiptListLen85 = receiptList85.length;
    for (var receiptIndex85 = 0; receiptIndex85 < receiptListLen85; receiptIndex85++) {
      var receiptData85 = receiptList85[receiptIndex85];
      output += '<tr><td colspan="2">' + ((receiptData85['type'] == 'image') ? '<img width="100%" src="' + soy.$$escapeHtml(receiptData85['url']) + '"/>' : (receiptData85['type'] == 'pdf') ? '<iframe src="https://docs.google.com/gview?url=' + soy.$$escapeHtml(receiptData85['url']) + '&embedded=true" style="width:515px; height:300px;" frameborder="0" />' : '') + '</td></tr>';
    }
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.DepositReceiptDialogContent = function(opt_data) {
  var output = '';
  /** @desc Download picture link on deposit receipt dialog content */
  var MSG_UNNAMED_1486 = goog.getMsg('Download');
  var receipt_urlList102 = opt_data.depositReceiptList;
  var receipt_urlListLen102 = receipt_urlList102.length;
  for (var receipt_urlIndex102 = 0; receipt_urlIndex102 < receipt_urlListLen102; receipt_urlIndex102++) {
    var receipt_urlData102 = receipt_urlList102[receipt_urlIndex102];
    output += '<img width="100%" src="' + soy.$$escapeHtml(receipt_urlData102) + '"/><a href="' + soy.$$escapeHtml(receipt_urlData102) + '" target="_blank">' + MSG_UNNAMED_1486 + '</a>';
  }
  return output;
};


bitex.templates.BrokerConfirmDepositContent = function(opt_data) {
  var output = '';
  /** @desc Control number label */
  var MSG_UNNAMED_1488 = goog.getMsg('Control number');
  /** @desc Amount label */
  var MSG_UNNAMED_1490 = goog.getMsg('Amount paid');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1492 = goog.getMsg('Fees:');
  /** @desc Net amount */
  var MSG_UNNAMED_1494 = goog.getMsg('Net amount');
  output += '<form class="form-horizontal broker-confirm-deposit"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1488 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.controlNumber) + '</label></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1490 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.id_value) + '" type="text" class="input-small" size="16" name="PaidValue" value="' + soy.$$escapeHtml(opt_data.value) + '"></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1492 + '</label><div class="controls"><div class="row-fluid"><div class="span4"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div></div><div class="span4"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label broker-confirm-deposit-fee" style="text-align: left;"></label></div></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1494 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div></form>';
  return output;
};


bitex.templates.BrokerView = function(opt_data) {
  var output = '';
  if (opt_data.show_title) {
    /** @desc Title for the Broker view */
    var MSG_UNNAMED_1496 = goog.getMsg('My broker');
    output += '<header class="page__head section-title"><h1 class="page__title h2"><i class="glyphicon glyphicon-search"></i> ' + MSG_UNNAMED_1496 + '</h1></header>';
  }
  output += '<div class="page__body content">';
  if (opt_data.msg_broker['BrokerID'] == -1) {
  } else {
    /** @desc Terms of service section subtitle on Broker view */
    var MSG_UNNAMED_1534 = goog.getMsg('Terms of service');
    output += '<div class="broker-address"><h4 class="broker-address__title">Address</h4><p><strong>' + soy.$$escapeHtml(opt_data.msg_broker['BusinessName']) + '</strong><br/>' + soy.$$escapeHtml(opt_data.msg_broker['Address']) + '<br/>' + soy.$$escapeHtml(opt_data.msg_broker['City']) + ', ' + soy.$$escapeHtml(opt_data.msg_broker['State']) + ' ' + soy.$$escapeHtml(opt_data.msg_broker['ZipCode']) + ' - ' + soy.$$escapeHtml(opt_data.msg_broker['Country']) + '<br/>';
    if (opt_data.msg_broker['PhoneNumber1']) {
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1498 = goog.getMsg('Phone');
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1500 = goog.getMsg('P:');
      output += '<abbr title="' + MSG_UNNAMED_1498 + '">' + MSG_UNNAMED_1500 + '</abbr>' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber1']) + ' ' + ((opt_data.msg_broker['PhoneNumber2']) ? ', ' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber2']) : '') + '<br/>';
    }
    output += ((opt_data.msg_broker['Skype']) ? 'Skype: ' + soy.$$escapeHtml(opt_data.msg_broker['Skype']) + '<br/>' : '') + '<a href="mailto:' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '" target="_blank">' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '</a></p></div><hr />';
    if (opt_data.msg_broker['BrokerID'] > 0) {
      /** @desc Allowed markets section subtitle on broker view */
      var MSG_UNNAMED_1502 = goog.getMsg('Markets');
      output += '<div class="broker-market"><h4 class="broker-market__title">' + MSG_UNNAMED_1502 + '</h4><p class="broker-market__markets">';
      var allowed_marketList206 = soy.$$getMapKeys(opt_data.msg_broker['AllowedMarkets']);
      var allowed_marketListLen206 = allowed_marketList206.length;
      for (var allowed_marketIndex206 = 0; allowed_marketIndex206 < allowed_marketListLen206; allowed_marketIndex206++) {
        var allowed_marketData206 = allowed_marketList206[allowed_marketIndex206];
        output += soy.$$escapeHtml(opt_data.msg_broker['AllowedMarkets'][allowed_marketData206]['description']);
      }
      output += '</p></div>';
    }
    output += '<hr />';
    if (opt_data.msg_broker['BrokerID'] >= 0) {
      if (opt_data.msg_broker['FeeStructure'].length > 0) {
        /** @desc Fee section subtitle on Broker view */
        var MSG_UNNAMED_1504 = goog.getMsg('Fees');
        /** @desc Operation column on Broker fees table */
        var MSG_UNNAMED_1506 = goog.getMsg('Operation');
        /** @desc Fees column on Broker fees table */
        var MSG_UNNAMED_1508 = goog.getMsg('Fee');
        /** @desc Terms column on Broker fees table */
        var MSG_UNNAMED_1510 = goog.getMsg('Terms');
        output += '<!-- .broker-fee --><div class="broker-fee"><h4 class="broker-fee__title">' + MSG_UNNAMED_1504 + '</h4><table class="broker-fee__table table"><thead><tr><th>' + MSG_UNNAMED_1506 + '</th><th>' + MSG_UNNAMED_1508 + '</th><th>' + MSG_UNNAMED_1510 + '</th></tr></thead><tbody>';
        if (! opt_data.msg_broker['IsBrokerHub']) {
          if (opt_data.msg_broker['FormattedTransactionFeeBuy'] == opt_data.msg_broker['FormattedTransactionFeeSell']) {
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1512 = goog.getMsg('Trade fee');
            output += '<tr><td>' + MSG_UNNAMED_1512 + '</td>' + ((opt_data.msg_broker['FormattedTakerTransactionFeeBuy'] == opt_data.msg_broker['FormattedTransactionFeeBuy']) ? '<td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td>' : '<td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTakerTransactionFeeBuy']) + ' / ' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td>') + '<td></td></tr>';
          } else {
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1514 = goog.getMsg('Trade fee - Buy side');
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1516 = goog.getMsg('Trade fee - Sell side');
            output += '<tr><td>' + MSG_UNNAMED_1514 + '</td>' + ((opt_data.msg_broker['FormattedTakerTransactionFeeBuy'] == opt_data.msg_broker['FormattedTransactionFeeBuy']) ? '<td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td>' : '<td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTakerTransactionFeeBuy']) + ' / ' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td>') + '<td></td></tr><tr><td>' + MSG_UNNAMED_1516 + '</td>' + ((opt_data.msg_broker['FormattedTakerTransactionFeeSell'] == opt_data.msg_broker['FormattedTransactionFeeSell']) ? '<td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeSell']) + ' %</td>' : '<td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTakerTransactionFeeSell']) + ' / ' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeSell']) + '</td>') + '<td></td></tr>';
          }
        }
        var feeList280 = opt_data.msg_broker['FeeStructure'];
        var feeListLen280 = feeList280.length;
        for (var feeIndex280 = 0; feeIndex280 < feeListLen280; feeIndex280++) {
          var feeData280 = feeList280[feeIndex280];
          output += '<tr><td>' + soy.$$escapeHtml(feeData280['Operation']) + '</td><td>' + soy.$$escapeHtml(feeData280['Fee']) + '</td><td>' + soy.$$escapeHtml(feeData280['Terms']) + '</td></tr>';
        }
        output += '</tbody></table></div><!-- /.broker-fee -->';
      }
    }
    if (! opt_data.msg_broker['IsBrokerHub']) {
      /** @desc Wallet section subtitle on Broker view */
      var MSG_UNNAMED_1518 = goog.getMsg('Wallets');
      /** @desc Coin  column on Broker wallet table */
      var MSG_UNNAMED_1520 = goog.getMsg('Coin');
      /** @desc type  column on Broker wallet table */
      var MSG_UNNAMED_1522 = goog.getMsg('Type');
      /** @desc address column type on Broker wallet table */
      var MSG_UNNAMED_1524 = goog.getMsg('Address');
      /** @desc multisig column type on Broker wallet table */
      var MSG_UNNAMED_1526 = goog.getMsg('Multi signature');
      /** @desc managed by column on Broker wallet table */
      var MSG_UNNAMED_1528 = goog.getMsg('Managed by');
      output += '<!-- .broker-wallet --><div class="broker-wallet"><h4 class="broker-wallet__title">' + MSG_UNNAMED_1518 + '</h4><table class="broker-wallet__table table"><thead><tr><th>' + MSG_UNNAMED_1520 + '</th><th>' + MSG_UNNAMED_1522 + '</th><th>' + MSG_UNNAMED_1524 + '</th><th>' + MSG_UNNAMED_1526 + '</th><th>' + MSG_UNNAMED_1528 + '</th></tr></thead><tbody>';
      var crypto_currenciesList311 = opt_data.msg_broker['CryptoCurrencies'];
      var crypto_currenciesListLen311 = crypto_currenciesList311.length;
      for (var crypto_currenciesIndex311 = 0; crypto_currenciesIndex311 < crypto_currenciesListLen311; crypto_currenciesIndex311++) {
        var crypto_currenciesData311 = crypto_currenciesList311[crypto_currenciesIndex311];
        var walletsList312 = crypto_currenciesData311['Wallets'];
        var walletsListLen312 = walletsList312.length;
        for (var walletsIndex312 = 0; walletsIndex312 < walletsListLen312; walletsIndex312++) {
          var walletsData312 = walletsList312[walletsIndex312];
          output += '<tr><td>' + soy.$$escapeHtml(crypto_currenciesData311['CurrencyDescription']) + '</td><td>' + soy.$$escapeHtml(walletsData312['type']) + '</td><td>';
          if (crypto_currenciesData311['CurrencyCode'] == 'BTC') {
            switch (walletsData312['address'][0]) {
              case 'm':
              case 'n':
              case '2':
              case '9':
              case 'c':
                output += '<a href="https://www.blocktrail.com/tBTC/address/' + soy.$$escapeHtml(walletsData312['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData312['address']) + '</a>';
                break;
              default:
                output += '<a href="https://www.blocktrail.com/BTC/address/' + soy.$$escapeHtml(walletsData312['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData312['address']) + '</a>';
            }
          } else {
            output += soy.$$escapeHtml(walletsData312['address']);
          }
          output += '</td><td>';
          if (walletsData312['multisig']) {
            /** @desc Multisig true */
            var MSG_UNNAMED_1530 = goog.getMsg('Yes');
            output += MSG_UNNAMED_1530;
          } else {
            /** @desc Multisig false */
            var MSG_UNNAMED_1532 = goog.getMsg('No');
            output += MSG_UNNAMED_1532;
          }
          output += '</td><td>' + soy.$$escapeHtml(walletsData312['managed_by']) + '</td></tr>';
        }
      }
      output += '</tbody></table></div><!-- /.broker-wallet -->';
    }
    output += '<!-- .broker-terms --><div class="broker-terms"><h4 class="broker-terms__title">' + MSG_UNNAMED_1534 + '</h4><iframe class="broker-terms__iframe" src="' + soy.$$escapeHtml(opt_data.msg_broker['TosUrl']) + '"></iframe></div><!-- /.broker-terms -->';
  }
  output += '</div>';
  return output;
};


bitex.templates.CancelDepositDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel deposit dialog message */
  var MSG_UNNAMED_1536 = goog.getMsg('Enter a reason for cancelling the deposit');
  /** @desc Cancel deposit reason label */
  var MSG_UNNAMED_1538 = goog.getMsg('Reason:');
  /** @desc reason for cancelling deposit */
  var MSG_UNNAMED_1540 = goog.getMsg('Other');
  output += '<p>' + MSG_UNNAMED_1536 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_1538 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value="0" selected>' + MSG_UNNAMED_1540 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style=""></textarea></div></div></fieldset></form>';
  return output;
};


bitex.templates.CancelWithdrawDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel withdraw dialog message */
  var MSG_UNNAMED_1542 = goog.getMsg('Enter a reason for cancelling the user withdraw');
  /** @desc Cancel withdraw reason label */
  var MSG_UNNAMED_1544 = goog.getMsg('Reason:');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1546 = goog.getMsg('Other');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1548 = goog.getMsg('Insufficient funds');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1550 = goog.getMsg('Account not verified');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1552 = goog.getMsg('Suspicion of fraud');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1554 = goog.getMsg('Withdrawing to a different account than yours');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1556 = goog.getMsg('Invalid wallet');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1558 = goog.getMsg('Invalid bank account');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1560 = goog.getMsg('Amount exceeded your daily withdraw limit');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1562 = goog.getMsg('User has deposits that are not yet confirmed');
  output += '<p>' + MSG_UNNAMED_1542 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_1544 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value="0">' + MSG_UNNAMED_1546 + '</option><option value="-1" selected>' + MSG_UNNAMED_1548 + '</option><option value="-2">' + MSG_UNNAMED_1550 + '</option><option value="-3">' + MSG_UNNAMED_1552 + '</option><option value="-4">' + MSG_UNNAMED_1554 + '</option><option value="-5">' + MSG_UNNAMED_1556 + '</option><option value="-6">' + MSG_UNNAMED_1558 + '</option><option value="-7">' + MSG_UNNAMED_1560 + '</option><option value="-8">' + MSG_UNNAMED_1562 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style="display:none;"></textarea></div></div></fieldset></form>';
  return output;
};


bitex.templates.GoogleAuthenticationCodeDialogContent = function(opt_data) {
  var output = '';
  /** @desc Google Authenticator code dialog label */
  var MSG_UNNAMED_1564 = goog.getMsg('Google Authenticator code:');
  /** @desc Limit table field header */
  var MSG_UNNAMED_1566 = goog.getMsg('Google authenticator code');
  /** @desc Google Authenticator code placeholder */
  var MSG_UNNAMED_1568 = goog.getMsg('eg. 555555');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label>' + MSG_UNNAMED_1564 + '</label><input name="token" data-uniform-validators="required" data-uniform-label="' + MSG_UNNAMED_1566 + '" label="' + MSG_UNNAMED_1568 + '" class="input-large" type="text" size="10"></div></fieldset></form>';
  return output;
};


bitex.templates.WithdrawConfirmationDialogContent = function(opt_data) {
  var output = '';
  /** @desc Withdraw confirmation dialog message */
  var MSG_UNNAMED_1570 = goog.getMsg('We just sent a confirmation code to your email.');
  /** @desc Confirmation code placeholder on withdraw confirmation dialog */
  var MSG_UNNAMED_1572 = goog.getMsg('Confirmation code');
  /** @desc Withdraw confirmation dialog security disclaimer */
  var MSG_UNNAMED_1574 = goog.getMsg('This is security measure to improve your account security');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><p>' + MSG_UNNAMED_1570 + '</p><div class="control-group"><label>Confirmation Code</label><input name="confirmation_code" type="text" data-uniform-validators="required" label="' + MSG_UNNAMED_1572 + '" class="input-block-level"></div><p><i>' + MSG_UNNAMED_1574 + '</i></p></fieldset></form>';
  return output;
};


bitex.templates.UserFeesDialogContent = function(opt_data) {
  var output = '';
  /** @desc Buy fee */
  var MSG_UNNAMED_1576 = goog.getMsg('Taker Buy fee ');
  /** @desc Buy fee */
  var MSG_UNNAMED_1578 = goog.getMsg('Maker Buy fee ');
  /** @desc Buy fee */
  var MSG_UNNAMED_1580 = goog.getMsg('Taker Sell fee');
  /** @desc Buy fee */
  var MSG_UNNAMED_1582 = goog.getMsg('Maker Sell fee');
  output += '<form class="form-horizontal"><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee">' + MSG_UNNAMED_1576 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_taker_buy_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.taker_buy_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_taker_buy_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee">' + MSG_UNNAMED_1578 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.buy_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_buy_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee">' + MSG_UNNAMED_1580 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_taker_sell_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.taker_sell_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_taker_sell_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee">' + MSG_UNNAMED_1582 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.sell_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_sell_fee"> Use Broker Fee</label></div></div></div></form>';
  return output;
};


bitex.templates.AccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList484 = opt_data.currencies;
  var currencyListLen484 = currencyList484.length;
  for (var currencyIndex484 = 0; currencyIndex484 < currencyListLen484; currencyIndex484++) {
    var currencyData484 = currencyList484[currencyIndex484];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1584 = goog.getMsg(
        'Available {$currency}',
        {'currency': soy.$$escapeHtml(currencyData484)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1584 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData484) + '" data-blink-class="balance-info-blink"></span></td>';
    if (opt_data.action == 'deposit') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1586 = goog.getMsg(' Deposit');
      output += '<td><button class="btn btn-mini" data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData484) + '"><i data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData484) + '" class="icon-plus"/>' + MSG_UNNAMED_1586 + '</button></td>';
    }
    if (opt_data.action == 'withdraw') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1588 = goog.getMsg(' Withdraw');
      output += '<td><button class="btn btn-mini" data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData484) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData484) + '" class="icon-minus"/>' + MSG_UNNAMED_1588 + '</button></td>';
    }
    output += '</tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.WaitingForDepositResponseDialogContent = function(opt_data) {
  var output = '';
  /** @desc processing deposit request waiting dialog msg */
  var MSG_UNNAMED_1590 = goog.getMsg('Processing deposit request...');
  output += '<div class="row-fluid" data-deposit-status="processing"><h5 class="text-center">' + MSG_UNNAMED_1590 + '</h5></div><div class="row-fluid"><div class="span6 offset3"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>';
  return output;
};


bitex.templates.DepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + '</h4>';
  if (opt_data.formattedAmount) {
    /** @desc deposit the amount */
    var MSG_UNNAMED_1592 = goog.getMsg(' Deposit the exact amount of :');
    output += '<div class="text-center">' + MSG_UNNAMED_1592 + ' ' + soy.$$escapeHtml(opt_data.formattedAmount) + '</div>';
  }
  output += '<div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=bitcoin%3A' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + ((opt_data.amount) ? '%3Famount%3D' + soy.$$escapeHtml(opt_data.amount) : '') + '"/></div>';
  if (opt_data.hasInstantDepositsEnabled) {
    /** @desc Instant deposit warning */
    var MSG_UNNAMED_1594 = goog.getMsg('Your account has instant deposits enabled. In case you intentionally try to do a "double spending" attack, your account will be frozen, even if your double spending attack is not successful.');
    output += '<div class="alert alert-block">' + MSG_UNNAMED_1594 + '</div>';
  }
  output += '</div>';
  return output;
};


bitex.templates.CryptoCurrencyQRContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.data['Wallet']) + '</h4><div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=' + soy.$$escapeHtml(opt_data.data['Wallet']) + '"/></div></div>';
};


bitex.templates.ConfirmTrustedAddressContentDialog = function(opt_data) {
  var output = '';
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1596 = goog.getMsg(' Do you want to enable instant deposits for this address?');
  /** @desc confirm trusted label placeholder */
  var MSG_UNNAMED_1598 = goog.getMsg('Enter a label for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1600 = goog.getMsg('Only enable it if you have the private key for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1602 = goog.getMsg('Always remember what happened at MtGox');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1604 = goog.getMsg('Never ever under any circumstances leave your Bitcoins deposited at any Exchange, no matter how secure they claim to be. Bitcoins are meant to be with the people and not in the hands of the Exchange operator. We don\'t want to create a "pot of gold" that will attract hackers. The "Instant deposits" technology will allow you to send your bitcoins instantly to trade them in the exchange, thus eliminating the need for you to leave Bitcoins at the exchange in order to negotiate them quickly.');
  output += '<div class="row-fluid"><h3 class="text-center">' + MSG_UNNAMED_1596 + '</h3><h5 class="text-center">' + soy.$$escapeHtml(opt_data.data['Address']) + '</h5><div class="text-center"><input type="text" class="confirm-trusted-address-label" size="30" placeholder="' + MSG_UNNAMED_1598 + '"></input></div><h4 class="text-center">' + MSG_UNNAMED_1600 + '</h4><div class="alert alert-block"><h4>' + MSG_UNNAMED_1602 + '</h4>' + MSG_UNNAMED_1604 + '</div></div>';
  return output;
};


bitex.templates.ConfirmDepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '';
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1606 = goog.getMsg(' IMPORTANT! ');
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1608 = goog.getMsg(
      ' We will generate a unique {$currencydescription} address that will be valid only for this transaction.',
      {'currencydescription': soy.$$escapeHtml(opt_data.currencydescription)});
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1610 = goog.getMsg(' Did you understand? ');
  output += '<div data-deposit-status="confirm"><h5 style="margin-bottom:0;">' + MSG_UNNAMED_1606 + '<br /><br /><div style="font-weight:400;">' + MSG_UNNAMED_1608 + '</div><br />' + MSG_UNNAMED_1610 + '</h5></div>';
  return output;
};


bitex.templates.DepositSlipContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="done"><iframe allowtransparency="true" src="' + soy.$$escapeHtml(opt_data.rest_url) + '/get_deposit?deposit_id=' + soy.$$escapeHtml(opt_data.deposit_id) + '" frameborder="0" style="width: 500px; height: 500px; border: none;" scrolling="yes"></iframe></div>';
};


bitex.templates.FeesFormControls = function(opt_data) {
  var output = '';
  /** @desc Fee label */
  var MSG_UNNAMED_1612 = goog.getMsg('Fees:');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1614 = goog.getMsg('Percent fee');
  /** @desc Fee fixed label */
  var MSG_UNNAMED_1616 = goog.getMsg('Fixed fee');
  /** @desc Net amount */
  var MSG_UNNAMED_1618 = goog.getMsg('Net amount');
  output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1612 + '</label><div class="controls"><div class="row-fluid"><div class="span3"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16"  style="width: 40px;" name="PercentFee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div><span style="font-style: italic;">' + MSG_UNNAMED_1614 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">+</span></div><div class="span3"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" style="width: 40px;" name="FixedFee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div><span style="font-style: italic;">' + MSG_UNNAMED_1616 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">=</span></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div></div></div><div class="control-group" style="' + ((opt_data.hideNetValueID) ? 'display:none' : '') + '"><label class="control-label">' + MSG_UNNAMED_1618 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div>';
  return output;
};


bitex.templates.FeesForm = function(opt_data) {
  var output = '';
  /** @desc requested amount */
  var MSG_UNNAMED_1620 = goog.getMsg('Requested Amount');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '"><input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount) + '"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1620 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.formattedAmount) + '</label></div></div>' + bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: opt_data.percentFeeID, percentFee: opt_data.percentFee, fixedFeeID: opt_data.fixedFeeID, fixedFee: opt_data.fixedFee, totalFeesID: opt_data.totalFeesID, netValueID: opt_data.netValueID, hideNetValueID: true}) + '</form>';
  return output;
};


bitex.templates.DepositWithdrawDialogContent = function(opt_data) {
  var output = '<form class="modal-form" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '">' + ((opt_data.side == 'broker') ? '<input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount / 1.0e8) + '">' : '') + '<div class="error"></div>';
  if (opt_data.type == 'withdrawal') {
    /** @desc Warning message when the user has unconfirmed deposits. */
    var MSG_UNNAMED_1622 = goog.getMsg('You can\'t withdraw funds from the exchange while you have unconfirmed deposits.');
    output += '<div class="alert alert-warning text-left bitex-model" data-model-action="show_element" data-model-key-list="HasAnyPosition" data-model-formula="HasAnyPosition" style="display:none;">' + MSG_UNNAMED_1622 + '</div>';
  }
  if (! opt_data.force_method) {
    if (opt_data.methods.length > 1) {
      /** @desc method */
      var MSG_UNNAMED_1624 = goog.getMsg('Method');
      output += '<label class="modal-form__label">' + MSG_UNNAMED_1624 + ':</label><select id="' + soy.$$escapeHtml(opt_data.methodID) + '" name="Method" class="withdraw-method-selector">';
      var methodList677 = opt_data.methods;
      var methodListLen677 = methodList677.length;
      for (var methodIndex677 = 0; methodIndex677 < methodListLen677; methodIndex677++) {
        var methodData677 = methodList677[methodIndex677];
        output += '<option value="' + soy.$$escapeHtml(methodData677['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData677['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData677['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData677['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">' + soy.$$escapeHtml(methodData677['description']) + '</option>';
      }
      output += '</select>';
    } else {
      var methodList698 = opt_data.methods;
      var methodListLen698 = methodList698.length;
      for (var methodIndex698 = 0; methodIndex698 < methodListLen698; methodIndex698++) {
        var methodData698 = methodList698[methodIndex698];
        output += '<input  id="' + soy.$$escapeHtml(opt_data.methodID) + '" type="hidden" name="Method"  value="' + soy.$$escapeHtml(methodData698['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData698['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData698['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData698['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">';
      }
    }
  }
  output += '<div class="withdraw-methods">';
  if (opt_data.methods.length == 0) {
    if (opt_data.verificationLevel <= 2) {
      /** @desc Error message when the user is not yet verified. */
      var MSG_UNNAMED_1626 = goog.getMsg(
          'Due to anti-money laundry international laws and government regulations, deposits/withdrawals in the local currency are only available to verified customers.{$break}We are very sorry for the inconvenience.',
          {'break': '<br/>'});
      output += '<div class="alert alert-warning text-left">' + MSG_UNNAMED_1626 + '</div>';
      if (opt_data.verificationLevel == 0) {
        /** @desc get verified message */
        var MSG_UNNAMED_1628 = goog.getMsg(' Verify your account ');
        output += '<a href="" data-switch-view="verification">' + MSG_UNNAMED_1628 + '</a>';
      }
    } else {
      /** @desc Error message when the brokers doesn't have deposit methods */
      var MSG_UNNAMED_1630 = goog.getMsg('We are not accepting deposits at this moment. We sorry for the inconvenience.');
      output += '<div class="alert alert-danger text-center">' + MSG_UNNAMED_1630 + '</div>';
    }
  }
  var methodList743 = opt_data.methods;
  var methodListLen743 = methodList743.length;
  for (var methodIndex743 = 0; methodIndex743 < methodListLen743; methodIndex743++) {
    var methodData743 = methodList743[methodIndex743];
    if (opt_data.force_method) {
      if (methodData743['method'] == opt_data.force_method) {
        if (opt_data.side == 'client') {
          /** @desc amount */
          var MSG_UNNAMED_1632 = goog.getMsg('Amount');
          output += '<label class="modal-form__label">' + MSG_UNNAMED_1632 + ' ' + soy.$$escapeHtml(opt_data.currencySign) + ':</label><input id="' + soy.$$escapeHtml(methodData743['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData743['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData743['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData743['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData743['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData743['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" data-uniform-filters="positive_number" type="text" class="withdraw-field input input--full" size="16" value="' + ((opt_data.formattedAmount) ? soy.$$escapeHtml(opt_data.formattedAmount) : '') + '" name="Amount">';
          if (methodData743['limits'][opt_data.verificationLevel]['enabled']) {
            output += '<small>';
            if (methodData743['limits'][opt_data.verificationLevel]['max']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1634 = goog.getMsg(
                  ' Available: {$xxx}',
                  {'xxx': soy.$$escapeHtml(methodData743['limits'][opt_data.verificationLevel]['formatted_max'])});
              output += MSG_UNNAMED_1634 + '<br>';
            }
            if (methodData743['limits'][opt_data.verificationLevel]['min']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1636 = goog.getMsg(
                  ' Minimum: {$xxx} per transaction.  ',
                  {'xxx': soy.$$escapeHtml(methodData743['limits'][opt_data.verificationLevel]['formatted_min'])});
              output += MSG_UNNAMED_1636;
            }
            output += '</small>';
          }
        }
        var fieldList796 = methodData743['fields'];
        var fieldListLen796 = fieldList796.length;
        for (var fieldIndex796 = 0; fieldIndex796 < fieldListLen796; fieldIndex796++) {
          var fieldData796 = fieldList796[fieldIndex796];
          output += (fieldData796['side'] == opt_data.side) ? '<label class="modal-form__label">' + soy.$$escapeHtml(fieldData796['label']) + ':</label><input class="withdraw-field input input--full" data-uniform-validators="' + soy.$$escapeHtml(fieldData796['validator']) + '" type="' + soy.$$escapeHtml(fieldData796['type']) + '" name="' + soy.$$escapeHtml(fieldData796['name']) + '" label="' + soy.$$escapeHtml(fieldData796['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData796['value']) + '"/>' : '';
        }
        if (opt_data.side == 'client') {
          /** @desc Fee percentage label */
          var MSG_UNNAMED_1638 = goog.getMsg('Fees');
          output += '<label class="modal-form__label">' + soy.$$escapeHtml(methodData743['disclaimer']) + ':</label><input id="' + soy.$$escapeHtml(methodData743['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData743['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData743['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData743['fixed_fee']) + '"><label class="modal-form__label">' + MSG_UNNAMED_1638 + ':</label><label id="' + soy.$$escapeHtml(methodData743['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label><div ' + ((opt_data.hideNetAmount) ? ' style="display:none;"' : '') + '>' + soy.$$escapeHtml(opt_data.netAmountLabel) + ':</label><label id="' + soy.$$escapeHtml(methodData743['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(methodData743['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div>';
        } else {
          output += (opt_data.side == 'broker') ? '<label class="modal-form__label">' + soy.$$escapeHtml(methodData743['disclaimer']) + ':</label>' + ((opt_data.showFeeDataEntry) ? bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: methodData743['method'] + '_' + opt_data.percentFeeID, percentFee: methodData743['percent_fee'], fixedFeeID: methodData743['method'] + '_' + opt_data.fixedFeeID, fixedFee: methodData743['fixed_fee'], totalFeesID: methodData743['method'] + '_' + opt_data.totalFeesID, netValueID: methodData743['method'] + '_' + opt_data.netValueID}) : '') : '';
        }
      }
    } else {
      /** @desc Fee percentage label */
      var MSG_UNNAMED_1646 = goog.getMsg('Fees:');
      output += '<div class="withdraw-method" data-withdraw-method="' + soy.$$escapeHtml(methodData743['method']) + '" style="' + ((opt_data.methods.length > 1) ? 'display:none;' : '') + '">';
      if (opt_data.side == 'client') {
        /** @desc amount */
        var MSG_UNNAMED_1640 = goog.getMsg('Amount');
        output += '<label class="modal-form__label">' + MSG_UNNAMED_1640 + ' ' + soy.$$escapeHtml(opt_data.currencySign) + ':</label><input id="' + soy.$$escapeHtml(methodData743['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData743['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData743['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData743['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData743['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData743['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" data-uniform-filters="positive_number" value="' + ((opt_data.formattedAmount) ? soy.$$escapeHtml(opt_data.formattedAmount) : '') + '" type="text" class="withdraw-field input input--full" size="16" name="Amount" ' + ((! (methodIndex743 == 0)) ? 'disabled' : '') + '>';
        if (methodData743['limits'][opt_data.verificationLevel]['enabled']) {
          output += '<small>';
          if (methodData743['limits'][opt_data.verificationLevel]['max']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1642 = goog.getMsg(
                ' Available: {$xxx}',
                {'xxx': soy.$$escapeHtml(methodData743['limits'][opt_data.verificationLevel]['formatted_max'])});
            output += MSG_UNNAMED_1642 + '<br>';
          }
          if (methodData743['limits'][opt_data.verificationLevel]['min']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1644 = goog.getMsg(
                ' Minimum: {$xxx} per transaction.  ',
                {'xxx': soy.$$escapeHtml(methodData743['limits'][opt_data.verificationLevel]['formatted_min'])});
            output += MSG_UNNAMED_1644;
          }
          output += '</small>';
        }
      }
      output += '<label class="modal-form__label">' + soy.$$escapeHtml(methodData743['disclaimer']) + '</label><input id="' + soy.$$escapeHtml(methodData743['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData743['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData743['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData743['fixed_fee']) + '"><label class="modal-form__label">' + MSG_UNNAMED_1646 + '</label><label id="' + soy.$$escapeHtml(methodData743['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label><div ' + ((opt_data.hideNetAmount) ? ' style="display:none;" ' : '') + '><label class="modal-form__label">' + soy.$$escapeHtml(opt_data.netAmountLabel) + ':</label><label id="' + soy.$$escapeHtml(methodData743['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(methodData743['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div>';
      var fieldList963 = methodData743['fields'];
      var fieldListLen963 = fieldList963.length;
      for (var fieldIndex963 = 0; fieldIndex963 < fieldListLen963; fieldIndex963++) {
        var fieldData963 = fieldList963[fieldIndex963];
        output += (fieldData963['side'] == opt_data.side) ? '<label class="modal-form__label">' + soy.$$escapeHtml(fieldData963['label']) + ':</label><input class="withdraw-field input input--full" data-uniform-validators="' + soy.$$escapeHtml(fieldData963['validator']) + '" type="' + soy.$$escapeHtml(fieldData963['type']) + '" name="' + soy.$$escapeHtml(fieldData963['name']) + '" label="' + soy.$$escapeHtml(fieldData963['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData963['value']) + '"' + ((! (methodIndex743 == 0)) ? 'disabled' : '') + ' />' : '';
      }
      output += '</div>';
    }
  }
  output += '<div class="control-group dlg-response-group"><label class="control-label dlg-response-group-label"></label><div class="controls" class="dlg-response-group-value" ></div></div></form>';
  return output;
};


bitex.templates.YourFeesBalances = function(opt_data) {
  var output = '';
  /** @desc label for user buy fee */
  var MSG_UNNAMED_1648 = goog.getMsg('Taker Buy Fee');
  /** @desc label for user buy fee */
  var MSG_UNNAMED_1652 = goog.getMsg('Maker Buy Fee');
  /** @desc label for user sell fee */
  var MSG_UNNAMED_1656 = goog.getMsg('Taker Sell Fee');
  /** @desc label for user sell fee */
  var MSG_UNNAMED_1660 = goog.getMsg('Maker Sell Fee');
  output += '<table class="table table-striped table-condensed"><tbody><tr><td><strong>' + MSG_UNNAMED_1648 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.taker_buy_fee) {
    output += soy.$$escapeHtml(opt_data.taker_buy_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1650 = goog.getMsg('-');
    output += MSG_UNNAMED_1650;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1652 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.buy_fee) {
    output += soy.$$escapeHtml(opt_data.buy_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1654 = goog.getMsg('-');
    output += MSG_UNNAMED_1654;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1656 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.taker_sell_fee) {
    output += soy.$$escapeHtml(opt_data.taker_sell_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1658 = goog.getMsg('-');
    output += MSG_UNNAMED_1658;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1660 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.sell_fee) {
    output += soy.$$escapeHtml(opt_data.sell_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1662 = goog.getMsg('-');
    output += MSG_UNNAMED_1662;
  }
  output += '</span></td></tr></tbody></table>';
  return output;
};


bitex.templates.YourAccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList1031 = opt_data.currencies;
  var currencyListLen1031 = currencyList1031.length;
  for (var currencyIndex1031 = 0; currencyIndex1031 < currencyListLen1031; currencyIndex1031++) {
    var currencyData1031 = currencyList1031[currencyIndex1031];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1664 = goog.getMsg(
        'Available {$code}',
        {'code': soy.$$escapeHtml(currencyData1031.code)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1664 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData1031.model_key) + '" data-blink-class="balance-info-blink">' + ((currencyData1031.balance) ? soy.$$escapeHtml(currencyData1031.balance) : '-') + '</span></td></tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.AccountOverviewHeaderVerified = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1666 = goog.getMsg('No');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1668 = goog.getMsg('Pending');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1670 = goog.getMsg('Progress');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1672 = goog.getMsg('Yes - Level I ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1674 = goog.getMsg('Yes - Level II ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1676 = goog.getMsg('Yes - Level III ');
  output += '<select id="id_select_new_verification_level" data-profile-change="Verified" ><option value="0" ' + ((opt_data.msg_customer_detail['Verified'] == 0) ? 'selected' : '') + '>' + MSG_UNNAMED_1666 + '</option><option value="1" ' + ((opt_data.msg_customer_detail['Verified'] == 1) ? 'selected' : '') + '>' + MSG_UNNAMED_1668 + '</option><option value="2" ' + ((opt_data.msg_customer_detail['Verified'] == 2) ? 'selected' : '') + '>' + MSG_UNNAMED_1670 + '</option><option value="3" ' + ((opt_data.msg_customer_detail['Verified'] == 3) ? 'selected' : '') + '>' + MSG_UNNAMED_1672 + '</option><option value="4" ' + ((opt_data.msg_customer_detail['Verified'] == 4) ? 'selected' : '') + '>' + MSG_UNNAMED_1674 + '</option><option value="5" ' + ((opt_data.msg_customer_detail['Verified'] == 5) ? 'selected' : '') + '>' + MSG_UNNAMED_1676 + '</option></select>';
  return output;
};


bitex.templates.AccountOverviewHeaderWithDrawEmailData = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['NeedWithdrawEmail']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1678 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1680 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1678 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1680 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1682 = goog.getMsg('Disabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1684 = goog.getMsg('Enabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1682 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1684 + '</a>';
  }
  return output;
};


bitex.templates.AccountOverviewHeaderTwoFactors = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['TwoFactorEnabled']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1686 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1688 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1686 + '</span><a href="#" class="btn btn-primary btn-mini" data-action="SET_TWO_FACTOR" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1688 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1690 = goog.getMsg('Disabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1690 + '</span>';
  }
  return output;
};


bitex.templates.AccountOverviewHeader = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_1692 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1694 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1696 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1698 = goog.getMsg('State');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1700 = goog.getMsg('Country');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1702 = goog.getMsg('Last login');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1704 = goog.getMsg('Is verified');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1706 = goog.getMsg('Has two step authentication');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1708 = goog.getMsg('Registration date');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1710 = goog.getMsg('Needs email confirmation on withdraw');
  output += '<table class="table table--bordered"><tbody><tr><td><strong>' + MSG_UNNAMED_1692 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1694 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1696 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1698 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['State']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1700 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['CountryCode']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1702 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['LastLogin']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1704 + '</strong></td><td class="account-overview-val account-overview-verified">' + bitex.templates.AccountOverviewHeaderVerified(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1706 + '</strong></td><td class="account-overview-val account-overview-two-factors" >' + bitex.templates.AccountOverviewHeaderTwoFactors(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1708 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Created']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1710 + '</strong></td><td class="account-overview-val account-overview-withdraw-email">' + bitex.templates.AccountOverviewHeaderWithDrawEmailData(opt_data) + '</td></tr></tbody></table>';
  return output;
};


bitex.templates.EnterVerificationDataDialogContent = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1712 = goog.getMsg('Verification data');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="ClientID" value="' + soy.$$escapeHtml(opt_data.clientID) + '"><div class="control-group"><label class="control-label"> ' + MSG_UNNAMED_1712 + ' </label><div class="controls"><input type="text" class="input-xlarge" size="16" name="VerificationData"></div></div></form>';
  return output;
};


bitex.templates.DataGrid = function(opt_data) {
  var output = '<div ' + ((opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + '  class="fuelux ' + ((opt_data.base_class) ? soy.$$escapeHtml(opt_data.base_class) : '') + '" style="width:100%;"><table class="table table-bordered datagrid datagrid-stretch-header"><thead><tr><th colspan="4" ' + ((! opt_data.title && ! opt_data.show_search) ? 'style="display: none;"' : '') + '><span class="datagrid-header-title"  ' + ((! opt_data.title) ? 'style="display: none;"' : '') + ' ><strong>' + soy.$$escapeHtml(opt_data.title) + '</strong></span><div class="datagrid-header-left" ' + ((! opt_data.show_search) ? 'style="display: none;"' : '') + '><div class="input-append search datagrid-search"><input type="text" class="input-medium" placeholder="' + soy.$$escapeHtml(opt_data.search_placeholder) + '"><button type="button" class="btn"><i class="icon-search"></i></button></div></div><div class="datagrid-header-right">';
  if (opt_data.button_filters) {
    output += '<div class="select filter datagrid-filter" data-resize="auto"><button type="button" data-toggle="dropdown" class="btn dropdown-toggle">';
    var buttonList1224 = opt_data.button_filters;
    var buttonListLen1224 = buttonList1224.length;
    for (var buttonIndex1224 = 0; buttonIndex1224 < buttonListLen1224; buttonIndex1224++) {
      var buttonData1224 = buttonList1224[buttonIndex1224];
      output += (buttonIndex1224 == 0) ? '<span class="dropdown-label" style="width: 111px;">' + soy.$$escapeHtml(buttonData1224['label']) + '</span>' : '';
    }
    output += '<span class="caret"></span></button><ul class="dropdown-menu">';
    var buttonList1232 = opt_data.button_filters;
    var buttonListLen1232 = buttonList1232.length;
    for (var buttonIndex1232 = 0; buttonIndex1232 < buttonListLen1232; buttonIndex1232++) {
      var buttonData1232 = buttonList1232[buttonIndex1232];
      output += '<li data-value="' + soy.$$escapeHtml(buttonData1232['value']) + '"><a href="#">' + soy.$$escapeHtml(buttonData1232['label']) + '</a></li>';
    }
    output += '</ul></div>';
  }
  output += '</div></th></tr></thead></table><div class="datagrid-stretch-wrapper" style="height:' + ((opt_data.wrapper_height) ? soy.$$escapeHtml(opt_data.wrapper_height) : '360') + 'px;"><table class="table table-bordered datagrid"><tbody></tbody></table></div><table class="table table-bordered datagrid datagrid-stretch-footer"><tfoot><tr><th colspan="4"><div class="datagrid-footer-left" style="visibility: visible;"><div class="grid-controls"><span><span class="grid-start"></span> -<span class="grid-end"></span></span></div></div><div class="datagrid-footer-right" style="visibility: visible;"><div class="grid-pager"><button type="button" class="btn grid-prevpage"><i class="icon-chevron-left"></i></button><button type="button" class="btn grid-nextpage"><i class="icon-chevron-right"></i></button></div></div></th></tr></tfoot></table></div>';
  return output;
};
