// This file was automatically generated from templates.ander.soy.
// Please don't edit this file by hand.

goog.provide('bitex.templates');

goog.require('soy');


bitex.templates.CustomerDetailDialog = function(opt_data) {
  var output = '';
  /** @desc Customer username */
  var MSG_UNNAMED_1437 = goog.getMsg('Username:');
  output += '<div class="row"><div class="span6">' + MSG_UNNAMED_1437 + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</div></div>';
  return output;
};


bitex.templates.ErrorDialogContent = function(opt_data) {
  var output = '';
  /** @desc Error code label on error dialog content */
  var MSG_UNNAMED_1439 = goog.getMsg('Error code');
  output += '<p class="lead">' + soy.$$escapeHtml(opt_data.error_message) + '</p><dl class="dl-horizontal"><dt>' + MSG_UNNAMED_1439 + '</dt><dd>' + soy.$$escapeHtml(opt_data.error_code) + '</dd></dl>';
  return output;
};


bitex.templates.FileViewDialogContent = function(opt_data) {
  return '<img src="' + soy.$$escapeHtml(opt_data.filename) + '" style="width:500px"/>';
};


bitex.templates.DepositReceiptDialogContent = function(opt_data) {
  var output = '';
  /** @desc Download picture link on deposit receipt dialog content */
  var MSG_UNNAMED_1441 = goog.getMsg('Download');
  var receipt_urlList22 = opt_data.depositReceiptList;
  var receipt_urlListLen22 = receipt_urlList22.length;
  for (var receipt_urlIndex22 = 0; receipt_urlIndex22 < receipt_urlListLen22; receipt_urlIndex22++) {
    var receipt_urlData22 = receipt_urlList22[receipt_urlIndex22];
    output += '<img width="100%" src="' + soy.$$escapeHtml(receipt_urlData22) + '"/><a href="' + soy.$$escapeHtml(receipt_urlData22) + '" target="_blank">' + MSG_UNNAMED_1441 + '</a>';
  }
  return output;
};


bitex.templates.BrokerConfirmDepositContent = function(opt_data) {
  var output = '';
  /** @desc Control number label */
  var MSG_UNNAMED_1443 = goog.getMsg('Control number');
  /** @desc Amount label */
  var MSG_UNNAMED_1445 = goog.getMsg('Amount paid');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1447 = goog.getMsg('Fees:');
  /** @desc Net amount */
  var MSG_UNNAMED_1449 = goog.getMsg('Net amount');
  output += '<form class="form-horizontal broker-confirm-deposit"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1443 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.controlNumber) + '</label></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1445 + '</label><div class="controls"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.id_value) + '" type="text" class="input-small" size="16" name="PaidValue" value="' + soy.$$escapeHtml(opt_data.value) + '"></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1447 + '</label><div class="controls"><div class="row-fluid"><div class="span4"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div></div><div class="span4"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" name="Fee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label broker-confirm-deposit-fee" style="text-align: left;"></label></div></div></div></div><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1449 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div></form>';
  return output;
};


bitex.templates.BrokerView = function(opt_data) {
  var output = '';
  if (opt_data.show_title) {
    /** @desc Title for the Broker view */
    var MSG_UNNAMED_1451 = goog.getMsg('My broker');
    output += '<header class="page__head section-title"><h1 class="page__title beta">' + MSG_UNNAMED_1451 + '</h1></header>';
  }
  output += '<div class="page__body content">';
  if (opt_data.msg_broker['BrokerID'] == -1) {
  } else {
    /** @desc Terms of service section subtitle on Broker view */
    var MSG_UNNAMED_1489 = goog.getMsg('Terms of service');
    output += '<div class="broker-address"><h4 class="broker-address__title">Address</h4><strong>' + soy.$$escapeHtml(opt_data.msg_broker['BusinessName']) + '</strong><br/>' + soy.$$escapeHtml(opt_data.msg_broker['Address']) + '<br/>' + soy.$$escapeHtml(opt_data.msg_broker['City']) + ', ' + soy.$$escapeHtml(opt_data.msg_broker['State']) + ' ' + soy.$$escapeHtml(opt_data.msg_broker['ZipCode']) + ' - ' + soy.$$escapeHtml(opt_data.msg_broker['Country']) + '<br/>';
    if (opt_data.msg_broker['PhoneNumber1']) {
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1453 = goog.getMsg('Phone');
      /** @desc label in broker general information table */
      var MSG_UNNAMED_1455 = goog.getMsg('P:');
      output += '<abbr title="' + MSG_UNNAMED_1453 + '">' + MSG_UNNAMED_1455 + '</abbr>' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber1']) + ' ' + ((opt_data.msg_broker['PhoneNumber2']) ? ', ' + soy.$$escapeHtml(opt_data.msg_broker['PhoneNumber2']) : '') + '<br/>';
    }
    output += ((opt_data.msg_broker['Skype']) ? 'Skype: ' + soy.$$escapeHtml(opt_data.msg_broker['Skype']) + '<br/>' : '') + '<a href="mailto:' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '" target="_blank">' + soy.$$escapeHtml(opt_data.msg_broker['Email']) + '</a></div>';
    if (opt_data.msg_broker['BrokerID'] > 0) {
      /** @desc Allowed markets section subtitle on broker view */
      var MSG_UNNAMED_1457 = goog.getMsg('Markets');
      output += '<div class="broker-market"><h4 class="broker-market__title">' + MSG_UNNAMED_1457 + '</h4><div class="broker-market__markets">';
      var allowed_marketList126 = soy.$$getMapKeys(opt_data.msg_broker['AllowedMarkets']);
      var allowed_marketListLen126 = allowed_marketList126.length;
      for (var allowed_marketIndex126 = 0; allowed_marketIndex126 < allowed_marketListLen126; allowed_marketIndex126++) {
        var allowed_marketData126 = allowed_marketList126[allowed_marketIndex126];
        output += soy.$$escapeHtml(opt_data.msg_broker['AllowedMarkets'][allowed_marketData126]['description']);
      }
      output += '</div></div>';
    }
    if (opt_data.msg_broker['BrokerID'] >= 0) {
      if (opt_data.msg_broker['FeeStructure'].length > 0) {
        /** @desc Fee section subtitle on Broker view */
        var MSG_UNNAMED_1459 = goog.getMsg('Fees');
        /** @desc Operation column on Broker fees table */
        var MSG_UNNAMED_1461 = goog.getMsg('Operation');
        /** @desc Fees column on Broker fees table */
        var MSG_UNNAMED_1463 = goog.getMsg('Fee');
        /** @desc Terms column on Broker fees table */
        var MSG_UNNAMED_1465 = goog.getMsg('Terms');
        output += '<!-- .broker-fee --><div class="broker-fee"><h4 class="broker-fee__title">' + MSG_UNNAMED_1459 + '</h4><table class="broker-fee__table table"><thead><tr><th>' + MSG_UNNAMED_1461 + '</th><th>' + MSG_UNNAMED_1463 + '</th><th>' + MSG_UNNAMED_1465 + '</th></tr></thead><tbody>';
        if (! opt_data.msg_broker['IsBrokerHub']) {
          if (opt_data.msg_broker['FormattedTransactionFeeBuy'] == opt_data.msg_broker['FormattedTransactionFeeSell']) {
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1467 = goog.getMsg('Trade fee');
            output += '<tr><td>' + MSG_UNNAMED_1467 + '</td><td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td><td></td></tr>';
          } else {
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1469 = goog.getMsg('Trade fee - Buy side');
            /** @desc label in broker fees table */
            var MSG_UNNAMED_1471 = goog.getMsg('Trade fee - Sell side');
            output += '<tr><td>' + MSG_UNNAMED_1469 + '</td><td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeBuy']) + '</td><td></td></tr><tr><td>' + MSG_UNNAMED_1471 + '</td><td>' + soy.$$escapeHtml(opt_data.msg_broker['FormattedTransactionFeeSell']) + ' %</td><td></td></tr>';
          }
        }
        var feeList169 = opt_data.msg_broker['FeeStructure'];
        var feeListLen169 = feeList169.length;
        for (var feeIndex169 = 0; feeIndex169 < feeListLen169; feeIndex169++) {
          var feeData169 = feeList169[feeIndex169];
          output += '<tr><td>' + soy.$$escapeHtml(feeData169['Operation']) + '</td><td>' + soy.$$escapeHtml(feeData169['Fee']) + '</td><td>' + soy.$$escapeHtml(feeData169['Terms']) + '</td></tr>';
        }
        output += '</tbody></table></div><!-- /.broker-fee -->';
      }
    }
    if (! opt_data.msg_broker['IsBrokerHub']) {
      /** @desc Wallet section subtitle on Broker view */
      var MSG_UNNAMED_1473 = goog.getMsg('Wallets');
      /** @desc Coin  column on Broker wallet table */
      var MSG_UNNAMED_1475 = goog.getMsg('Coin');
      /** @desc type  column on Broker wallet table */
      var MSG_UNNAMED_1477 = goog.getMsg('Type');
      /** @desc address column type on Broker wallet table */
      var MSG_UNNAMED_1479 = goog.getMsg('Address');
      /** @desc multisig column type on Broker wallet table */
      var MSG_UNNAMED_1481 = goog.getMsg('Multi signature');
      /** @desc managed by column on Broker wallet table */
      var MSG_UNNAMED_1483 = goog.getMsg('Managed by');
      output += '<!-- .broker-wallet --><div class="broker-wallet"><h4 class="broker-wallet__title">' + MSG_UNNAMED_1473 + '</h4><table class="broker-wallet__table table"><thead><tr><th>' + MSG_UNNAMED_1475 + '</th><th>' + MSG_UNNAMED_1477 + '</th><th>' + MSG_UNNAMED_1479 + '</th><th>' + MSG_UNNAMED_1481 + '</th><th>' + MSG_UNNAMED_1483 + '</th></tr></thead><tbody>';
      var crypto_currenciesList200 = opt_data.msg_broker['CryptoCurrencies'];
      var crypto_currenciesListLen200 = crypto_currenciesList200.length;
      for (var crypto_currenciesIndex200 = 0; crypto_currenciesIndex200 < crypto_currenciesListLen200; crypto_currenciesIndex200++) {
        var crypto_currenciesData200 = crypto_currenciesList200[crypto_currenciesIndex200];
        var walletsList201 = crypto_currenciesData200['Wallets'];
        var walletsListLen201 = walletsList201.length;
        for (var walletsIndex201 = 0; walletsIndex201 < walletsListLen201; walletsIndex201++) {
          var walletsData201 = walletsList201[walletsIndex201];
          output += '<tr><td>' + soy.$$escapeHtml(crypto_currenciesData200['CurrencyDescription']) + '</td><td>' + soy.$$escapeHtml(walletsData201['type']) + '</td><td>';
          if (crypto_currenciesData200['CurrencyCode'] == 'BTC') {
            switch (walletsData201['address'][0]) {
              case 'm':
              case 'n':
              case '2':
              case '9':
              case 'c':
                output += '<a href="https://test-insight.bitpay.com/address/' + soy.$$escapeHtml(walletsData201['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData201['address']) + '</a>';
                break;
              default:
                output += '<a href="https://blockchain.info/address/' + soy.$$escapeHtml(walletsData201['address']) + '/" target="_blank">' + soy.$$escapeHtml(walletsData201['address']) + '</a>';
            }
          } else {
            output += soy.$$escapeHtml(walletsData201['address']);
          }
          output += '</td><td>';
          if (walletsData201['multisig']) {
            /** @desc Multisig true */
            var MSG_UNNAMED_1485 = goog.getMsg('Yes');
            output += MSG_UNNAMED_1485;
          } else {
            /** @desc Multisig false */
            var MSG_UNNAMED_1487 = goog.getMsg('No');
            output += MSG_UNNAMED_1487;
          }
          output += '</td><td>' + soy.$$escapeHtml(walletsData201['managed_by']) + '</td></tr>';
        }
      }
      output += '</tbody></table></div><!-- /.broker-wallet -->';
    }
    output += '<!-- .broker-terms --><div class="broker-terms"><h4 class="broker-terms__title">' + MSG_UNNAMED_1489 + '</h4><iframe class="broker-terms__iframe" src="' + soy.$$escapeHtml(opt_data.msg_broker['TosUrl']) + '"></iframe></div><!-- /.broker-terms -->';
  }
  output += '</div>';
  return output;
};


bitex.templates.CancelDepositDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel deposit dialog message */
  var MSG_UNNAMED_1491 = goog.getMsg('Enter a reason for cancelling the deposit');
  /** @desc Cancel deposit reason label */
  var MSG_UNNAMED_1493 = goog.getMsg('Reason:');
  /** @desc reason for cancelling deposit */
  var MSG_UNNAMED_1495 = goog.getMsg('Other');
  output += '<p>' + MSG_UNNAMED_1491 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_1493 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value=0 selected>' + MSG_UNNAMED_1495 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style=""></textarea></div></div></fieldset></form>';
  return output;
};


bitex.templates.CancelWithdrawDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel withdraw dialog message */
  var MSG_UNNAMED_1497 = goog.getMsg('Enter a reason for cancelling the user withdraw');
  /** @desc Cancel withdraw reason label */
  var MSG_UNNAMED_1499 = goog.getMsg('Reason:');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1501 = goog.getMsg('Other');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1503 = goog.getMsg('Insufficient funds');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1505 = goog.getMsg('Account not verified');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1507 = goog.getMsg('Suspicion of fraud');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1509 = goog.getMsg('Withdrawing to a different account than yours');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1511 = goog.getMsg('Invalid wallet');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1513 = goog.getMsg('Invalid bank account');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1515 = goog.getMsg('Amount exceeded your daily withdraw limit');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_1517 = goog.getMsg('User has deposits that are not yet confirmed');
  output += '<p>' + MSG_UNNAMED_1497 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_1499 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value=0>' + MSG_UNNAMED_1501 + '</option><option value=-1 selected>' + MSG_UNNAMED_1503 + '</option><option value=-2>' + MSG_UNNAMED_1505 + '</option><option value=-3>' + MSG_UNNAMED_1507 + '</option><option value=-4>' + MSG_UNNAMED_1509 + '</option><option value=-5>' + MSG_UNNAMED_1511 + '</option><option value=-6>' + MSG_UNNAMED_1513 + '</option><option value=-7>' + MSG_UNNAMED_1515 + '</option><option value=-8>' + MSG_UNNAMED_1517 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style="display:none;"></textarea></div></div></fieldset></form>';
  return output;
};


bitex.templates.GoogleAuthenticationCodeDialogContent = function(opt_data) {
  var output = '';
  /** @desc Google Authenticator code dialog label */
  var MSG_UNNAMED_1519 = goog.getMsg('Google Authenticator code:');
  /** @desc Limit table field header */
  var MSG_UNNAMED_1521 = goog.getMsg('Google authenticator code');
  /** @desc Google Authenticator code placeholder */
  var MSG_UNNAMED_1523 = goog.getMsg('eg. 555555');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><div class="control-group"><label>' + MSG_UNNAMED_1519 + '</label><input name="token" data-uniform-validators="required" data-uniform-label="' + MSG_UNNAMED_1521 + '" label="' + MSG_UNNAMED_1523 + '" class="input-large" type="text" size="10"></div></fieldset></form>';
  return output;
};


bitex.templates.WithdrawConfirmationDialogContent = function(opt_data) {
  var output = '';
  /** @desc Withdraw confirmation dialog message */
  var MSG_UNNAMED_1525 = goog.getMsg('We just sent a confirmation code to your email.');
  /** @desc Confirmation code placeholder on withdraw confirmation dialog */
  var MSG_UNNAMED_1527 = goog.getMsg('Confirmation code');
  /** @desc Withdraw confirmation dialog security disclaimer */
  var MSG_UNNAMED_1529 = goog.getMsg('This is security measure to improve your account security');
  output += '<form class="form-horizontal" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><fieldset><p>' + MSG_UNNAMED_1525 + '</p><div class="control-group"><label>Confirmation Code</label><input name="confirmation_code" type="text" data-uniform-validators="required" label="' + MSG_UNNAMED_1527 + '" class="input-block-level"></div><p><i>' + MSG_UNNAMED_1529 + '</i></p></fieldset></form>';
  return output;
};


bitex.templates.UserFeesDialogContent = function(opt_data) {
  var output = '';
  /** @desc Buy fee */
  var MSG_UNNAMED_1531 = goog.getMsg('Buy fee ');
  /** @desc Buy fee */
  var MSG_UNNAMED_1533 = goog.getMsg('Sell fee');
  output += '<form class="form-horizontal"><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee">' + MSG_UNNAMED_1531 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_buy_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.buy_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_buy_fee"> Use Broker Fee</label></div></div></div><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee">' + MSG_UNNAMED_1533 + '</label><div class="controls"><input type="text" id="' + soy.$$escapeHtml(opt_data.id) + '_sell_fee"  style="text-align: right;" value="' + soy.$$escapeHtml(opt_data.sell_fee) + '"/><div class="checkbox"><label><input type="checkbox" id="' + soy.$$escapeHtml(opt_data.id) + '_broker_sell_fee"> Use Broker Fee</label></div></div></div></form>';
  return output;
};


bitex.templates.YourAccountSummary = function(opt_data) {
  var output = '';
  /** @desc Your account label in the right side bar */
  var MSG_UNNAMED_1535 = goog.getMsg('Your account');
  /** @desc Unconfirmed deposits */
  var MSG_UNNAMED_1537 = goog.getMsg('Unconfirmed deposits from your confirmed addresses');
  output += '<div class="sidebar-box__head"><h6>' + MSG_UNNAMED_1535 + ':</h6></div><div class="sidebar-box__body">';
  var accountList354 = opt_data.accounts;
  var accountListLen354 = accountList354.length;
  for (var accountIndex354 = 0; accountIndex354 < accountListLen354; accountIndex354++) {
    var accountData354 = accountList354[accountIndex354];
    output += '<table class="sidebar-box__table"><thead><tr id="id_account_summary_' + soy.$$escapeHtml(accountData354['brokerID']) + '" class=\'account-summary-broker model-action-set\' data-key="SelectedBrokerID" data-value="' + soy.$$escapeHtml(accountData354['brokerID']) + '"' + ((opt_data.accounts.length <= 1 || accountData354['currencies'].length == 0) ? 'style="display:none;"' : '') + '><th colspan="3"><strong>' + soy.$$escapeHtml(accountData354['brokerName']) + '</strong></th></tr></thead><tbody>';
    var currency_infoList366 = accountData354['currencies'];
    var currency_infoListLen366 = currency_infoList366.length;
    for (var currency_infoIndex366 = 0; currency_infoIndex366 < currency_infoListLen366; currency_infoIndex366++) {
      var currency_infoData366 = currency_infoList366[currency_infoIndex366];
      output += '<tr><td><strong>' + soy.$$escapeHtml(currency_infoData366['currency']) + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(accountData354['brokerID']) + ':' + soy.$$escapeHtml(accountData354['clientID']) + '_' + soy.$$escapeHtml(currency_infoData366['currency']) + '" data-blink-class="balance-info-blink">' + soy.$$escapeHtml(currency_infoData366['formattedBalance']) + '</span><abbr title="' + MSG_UNNAMED_1537 + '"><em><span class="bitex-model" data-model-key="formatted_position_' + soy.$$escapeHtml(accountData354['brokerID']) + ':' + soy.$$escapeHtml(accountData354['clientID']) + '_' + soy.$$escapeHtml(currency_infoData366['currency']) + '" data-blink-class="balance-info-blink"></span></em></abbr></td><td>' + ((currency_infoData366['showDeposit'] && currency_infoData366['showWithdraw']) ? '<div class="btn-group">' : '') + ((currency_infoData366['showDeposit']) ? '<button class="btn" data-action="deposit" data-currency="' + soy.$$escapeHtml(currency_infoData366['currency']) + '"><i data-action="deposit" data-currency="' + soy.$$escapeHtml(currency_infoData366['currency']) + '" class="icon-download-alt"></i></button>' : '') + ((currency_infoData366['showWithdraw']) ? '<button class="btn" data-action="withdraw" data-currency="' + soy.$$escapeHtml(currency_infoData366['currency']) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(currency_infoData366['currency']) + '" class="icon-upload-alt"></i></button>' : '') + ((currency_infoData366['showDeposit'] && currency_infoData366['showWithdraw']) ? '</div>' : '') + '</td></tr>';
    }
    output += '</tbody></table>';
  }
  output += '</div>';
  return output;
};


bitex.templates.AccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList414 = opt_data.currencies;
  var currencyListLen414 = currencyList414.length;
  for (var currencyIndex414 = 0; currencyIndex414 < currencyListLen414; currencyIndex414++) {
    var currencyData414 = currencyList414[currencyIndex414];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1539 = goog.getMsg(
        'Available {$currency}',
        {'currency': soy.$$escapeHtml(currencyData414)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1539 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData414) + '" data-blink-class="balance-info-blink"></span></td>';
    if (opt_data.action == 'deposit') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1541 = goog.getMsg(' Deposit');
      output += '<td><button class="btn btn-mini" data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData414) + '"><i data-action="deposit"  data-currency="' + soy.$$escapeHtml(currencyData414) + '" class="icon-plus"/>' + MSG_UNNAMED_1541 + '</button></td>';
    }
    if (opt_data.action == 'withdraw') {
      /** @desc Deposit button label */
      var MSG_UNNAMED_1543 = goog.getMsg(' Withdraw');
      output += '<td><button class="btn btn-mini" data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData414) + '"><i data-action="withdraw" data-currency="' + soy.$$escapeHtml(currencyData414) + '" class="icon-minus"/>' + MSG_UNNAMED_1543 + '</button></td>';
    }
    output += '</tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.WaitingForDepositResponseDialogContent = function(opt_data) {
  var output = '';
  /** @desc processing deposit request waiting dialog msg */
  var MSG_UNNAMED_1545 = goog.getMsg('Processing deposit request...');
  output += '<div class="row-fluid" data-deposit-status="processing"><h5 class="text-center">' + MSG_UNNAMED_1545 + '</h5></div><div class="row-fluid"><div class="span6 offset3"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>';
  return output;
};


bitex.templates.DepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '<div class="row-fluid" data-deposit-status="prepare"><h4 class="text-center">' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + '</h4>';
  if (opt_data.formattedAmount) {
    /** @desc deposit the amount */
    var MSG_UNNAMED_1547 = goog.getMsg(' Deposit the exact amount of :');
    output += '<div class="text-center">' + MSG_UNNAMED_1547 + ' ' + soy.$$escapeHtml(opt_data.formattedAmount) + '</div>';
  }
  output += '<div class="text-center"><img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=bitcoin%3A' + soy.$$escapeHtml(opt_data.deposit_message['Data']['InputAddress']) + ((opt_data.amount) ? '%3Famount%3D' + soy.$$escapeHtml(opt_data.amount) : '') + '"/></div>';
  if (opt_data.hasInstantDepositsEnabled) {
    /** @desc Instant deposit warning */
    var MSG_UNNAMED_1549 = goog.getMsg('Your account has instant deposits enabled. In case you intentionally try to do a "double spending" attack, your account will be frozen, even if your double spending attack is not successful.');
    output += '<div class="alert alert-block">' + MSG_UNNAMED_1549 + '</div>';
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
  var MSG_UNNAMED_1551 = goog.getMsg(' Do you want to enable instant deposits for this address?');
  /** @desc confirm trusted label placeholder */
  var MSG_UNNAMED_1553 = goog.getMsg('Enter a label for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1555 = goog.getMsg('Only enable it if you have the private key for this address.');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1557 = goog.getMsg('Always remember what happened at MtGox');
  /** @desc confirm trusted address dialog msg */
  var MSG_UNNAMED_1559 = goog.getMsg('Never ever under any circumstances leave your Bitcoins deposited at any Exchange, no matter how secure they claim to be. Bitcoins are meant to be with the people and not in the hands of the Exchange operator. We don\'t want to create a "pot of gold" that will attract hackers. The "Instant deposits" technology will allow you to send your bitcoins instantly to trade them in the exchange, thus eliminating the need for you to leave Bitcoins at the exchange in order to negotiate them quickly.');
  output += '<div class="row-fluid"><h3 class="text-center">' + MSG_UNNAMED_1551 + '</h3><h5 class="text-center">' + soy.$$escapeHtml(opt_data.data['Address']) + '</h5><div class="text-center"><input type="text" class="confirm-trusted-address-label" size="30" placeholder="' + MSG_UNNAMED_1553 + '"></input></div><h4 class="text-center">' + MSG_UNNAMED_1555 + '</h4><div class="alert alert-block"><h4>' + MSG_UNNAMED_1557 + '</h4>' + MSG_UNNAMED_1559 + '</div></div>';
  return output;
};


bitex.templates.ConfirmDepositCryptoCurrencyContentDialog = function(opt_data) {
  var output = '';
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1561 = goog.getMsg(' IMPORTANT! ');
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1563 = goog.getMsg(
      ' We will generate a unique {$currencydescription} address that will be valid only for this transaction.',
      {'currencydescription': soy.$$escapeHtml(opt_data.currencydescription)});
  /** @desc deposit done dialog msg */
  var MSG_UNNAMED_1565 = goog.getMsg(' Did you understand? ');
  output += '<div data-deposit-status="confirm"><h5 style="margin-bottom:0;">' + MSG_UNNAMED_1561 + '<br /><br /><div style="font-weight:400;">' + MSG_UNNAMED_1563 + '</div><br />' + MSG_UNNAMED_1565 + '</h5></div>';
  return output;
};


bitex.templates.DepositSlipContentDialog = function(opt_data) {
  return '<div class="row-fluid" data-deposit-status="done"><iframe allowtransparency="true" src="' + soy.$$escapeHtml(opt_data.rest_url) + '/get_deposit?deposit_id=' + soy.$$escapeHtml(opt_data.deposit_id) + '" frameborder="0" style="width: 500px; height: 500px; border: none;" scrolling="yes"></iframe></div>';
};


bitex.templates.FeesFormControls = function(opt_data) {
  var output = '';
  /** @desc Fee label */
  var MSG_UNNAMED_1567 = goog.getMsg('Fees:');
  /** @desc Fee percentage label */
  var MSG_UNNAMED_1569 = goog.getMsg('Percent fee');
  /** @desc Fee fixed label */
  var MSG_UNNAMED_1571 = goog.getMsg('Fixed fee');
  /** @desc Net amount */
  var MSG_UNNAMED_1573 = goog.getMsg('Net amount');
  output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_1567 + '</label><div class="controls"><div class="row-fluid"><div class="span3"><div class="input-append"><input id="' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="text" class="input-mini" size="16"  style="width: 40px;" name="PercentFee" value="' + soy.$$escapeHtml(opt_data.percentFee) + '"><span class="add-on">%</span></div><span style="font-style: italic;">' + MSG_UNNAMED_1569 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">+</span></div><div class="span3"><div class="input-prepend"><span class="add-on">' + soy.$$escapeHtml(opt_data.currencySign) + '</span><input id="' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="text" class="input-mini" size="16" style="width: 40px;" name="FixedFee" value="' + soy.$$escapeHtml(opt_data.fixedFee) + '"></div><span style="font-style: italic;">' + MSG_UNNAMED_1571 + '</span></div><div class="span1" style="margin-top: 4px;margin-bottom: -4px;"><span style="font-weight: bold;">=</span></div><div class="span4"><label id="' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label></div></div></div></div><div class="control-group" style="' + ((opt_data.hideNetValueID) ? 'display:none' : '') + '"><label class="control-label">' + MSG_UNNAMED_1573 + '</label><div class="controls"><label id="' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div></div>';
  return output;
};


bitex.templates.FeesForm = function(opt_data) {
  var output = '';
  /** @desc requested amount */
  var MSG_UNNAMED_1575 = goog.getMsg('Requested Amount');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '"><input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount) + '"><div class="control-group"><label class="control-label">' + MSG_UNNAMED_1575 + '</label><div class="controls"><label class="control-label" style="text-align: left;">' + soy.$$escapeHtml(opt_data.formattedAmount) + '</label></div></div>' + bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: opt_data.percentFeeID, percentFee: opt_data.percentFee, fixedFeeID: opt_data.fixedFeeID, fixedFee: opt_data.fixedFee, totalFeesID: opt_data.totalFeesID, netValueID: opt_data.netValueID, hideNetValueID: true}) + '</form>';
  return output;
};


bitex.templates.DepositWithdrawDialogContent = function(opt_data) {
  var output = '<form class="modal-form" data-deposit-status="prepare" data-uniform-control-holder-class="control-group"><input type="hidden" name="Currency" value="' + soy.$$escapeHtml(opt_data.currency) + '">' + ((opt_data.side == 'broker') ? '<input id="' + soy.$$escapeHtml(opt_data.amountID) + '" type="hidden" name="Amount" value="' + soy.$$escapeHtml(opt_data.amount / 1.0e8) + '">' : '') + '<div class="error"></div>';
  if (! opt_data.force_method) {
    if (opt_data.methods.length > 1) {
      /** @desc method */
      var MSG_UNNAMED_1577 = goog.getMsg('Method');
      output += '<label class="modal-form__label">' + MSG_UNNAMED_1577 + ':</label><select id="' + soy.$$escapeHtml(opt_data.methodID) + '" name="Method" class="withdraw-method-selector">';
      var methodList601 = opt_data.methods;
      var methodListLen601 = methodList601.length;
      for (var methodIndex601 = 0; methodIndex601 < methodListLen601; methodIndex601++) {
        var methodData601 = methodList601[methodIndex601];
        output += '<option ' + ((methodIndex601 == 0) ? 'selected' : '') + ' value="' + soy.$$escapeHtml(methodData601['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData601['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData601['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData601['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">' + soy.$$escapeHtml(methodData601['description']) + '</option>';
      }
      output += '</select>';
    } else {
      var methodList626 = opt_data.methods;
      var methodListLen626 = methodList626.length;
      for (var methodIndex626 = 0; methodIndex626 < methodListLen626; methodIndex626++) {
        var methodData626 = methodList626[methodIndex626];
        output += '<input  id="' + soy.$$escapeHtml(opt_data.methodID) + '" type="hidden" name="Method"  value="' + soy.$$escapeHtml(methodData626['method']) + '" data-net-value="' + soy.$$escapeHtml(methodData626['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" data-percent-fee="' + soy.$$escapeHtml(methodData626['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" data-fixed-fee="' + soy.$$escapeHtml(methodData626['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '">';
      }
    }
  }
  output += '<div class="withdraw-methods">';
  if (opt_data.methods.length == 0) {
    if (opt_data.verificationLevel <= 2) {
      /** @desc Error message when the user is not yet verified. */
      var MSG_UNNAMED_1579 = goog.getMsg(
          'Due to anti-money laundry international laws and government regulations, deposits/withdrawals in the local currency are only available to verified customers.{$break}We are very sorry for the inconvenience.',
          {'break': '<br/>'});
      output += '<div class="alert alert-warning text-left">' + MSG_UNNAMED_1579 + '</div>';
      if (opt_data.verificationLevel == 0) {
        /** @desc get verified message */
        var MSG_UNNAMED_1581 = goog.getMsg(
            'You can verify your account by clicking in {$startLink}Verify your account{$endLink}',
            {'startLink': '<a href="" data-switch-view="verification">',
             'endLink': '</a>'});
        output += MSG_UNNAMED_1581;
      }
    } else {
      /** @desc Error message when the brokers doesn't have deposit methods */
      var MSG_UNNAMED_1583 = goog.getMsg('We are not accepting deposits at this moment. We sorry for the inconvenience.');
      output += '<div class="alert alert-danger text-center">' + MSG_UNNAMED_1583 + '</div>';
    }
  }
  var methodList680 = opt_data.methods;
  var methodListLen680 = methodList680.length;
  for (var methodIndex680 = 0; methodIndex680 < methodListLen680; methodIndex680++) {
    var methodData680 = methodList680[methodIndex680];
    if (opt_data.force_method) {
      if (methodData680['method'] == opt_data.force_method) {
        if (opt_data.side == 'client') {
          /** @desc amount */
          var MSG_UNNAMED_1585 = goog.getMsg('Amount');
          output += '<label class="modal-form__label">' + MSG_UNNAMED_1585 + ' ' + soy.$$escapeHtml(opt_data.currencySign) + ':</label><input id="' + soy.$$escapeHtml(methodData680['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData680['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData680['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData680['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData680['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData680['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" data-uniform-filters="positive_number" type="text" class="withdraw-field input input--full" size="16" value="' + ((opt_data.formattedAmount) ? soy.$$escapeHtml(opt_data.formattedAmount) : '') + '" name="Amount">';
          if (methodData680['limits'][opt_data.verificationLevel]['enabled']) {
            output += '<small>';
            if (methodData680['limits'][opt_data.verificationLevel]['min']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1587 = goog.getMsg(
                  ' Maximum: {$xxx} per day.  ',
                  {'xxx': soy.$$escapeHtml(methodData680['limits'][opt_data.verificationLevel]['formatted_max'])});
              output += MSG_UNNAMED_1587 + '<br>';
            }
            if (methodData680['limits'][opt_data.verificationLevel]['max']) {
              /** @desc amount help block */
              var MSG_UNNAMED_1589 = goog.getMsg(
                  ' Minimum: {$xxx} per transaction.  ',
                  {'xxx': soy.$$escapeHtml(methodData680['limits'][opt_data.verificationLevel]['formatted_min'])});
              output += MSG_UNNAMED_1589;
            }
            output += '</small>';
          }
        }
        var fieldList734 = methodData680['fields'];
        var fieldListLen734 = fieldList734.length;
        for (var fieldIndex734 = 0; fieldIndex734 < fieldListLen734; fieldIndex734++) {
          var fieldData734 = fieldList734[fieldIndex734];
          output += (fieldData734['side'] == opt_data.side) ? '<label class="modal-form__label">' + soy.$$escapeHtml(fieldData734['label']) + ':</label><input class="withdraw-field input input--full" data-uniform-validators="' + soy.$$escapeHtml(fieldData734['validator']) + '" type="' + soy.$$escapeHtml(fieldData734['type']) + '" name="' + soy.$$escapeHtml(fieldData734['name']) + '" label="' + soy.$$escapeHtml(fieldData734['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData734['value']) + '"/>' : '';
        }
        if (opt_data.side == 'client') {
          /** @desc Fee percentage label */
          var MSG_UNNAMED_1591 = goog.getMsg('Fees');
          /** @desc Net amount */
          var MSG_UNNAMED_1593 = goog.getMsg('Net amount');
          output += '<label class="modal-form__label">' + soy.$$escapeHtml(methodData680['disclaimer']) + ':</label><input id="' + soy.$$escapeHtml(methodData680['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData680['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData680['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData680['fixed_fee']) + '"><label class="modal-form__label">' + MSG_UNNAMED_1591 + ':</label><label id="' + soy.$$escapeHtml(methodData680['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label><div ' + ((opt_data.hideNetAmount) ? ' style="display:none;"' : '') + '><label class="modal-form__label">' + MSG_UNNAMED_1593 + ':</label><label id="' + soy.$$escapeHtml(methodData680['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(methodData680['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div>';
        } else {
          output += (opt_data.side == 'broker') ? '<label class="modal-form__label">' + soy.$$escapeHtml(methodData680['disclaimer']) + ':</label>' + ((opt_data.showFeeDataEntry) ? bitex.templates.FeesFormControls({currencySign: opt_data.currencySign, percentFeeID: methodData680['method'] + '_' + opt_data.percentFeeID, percentFee: methodData680['percent_fee'], fixedFeeID: methodData680['method'] + '_' + opt_data.fixedFeeID, fixedFee: methodData680['fixed_fee'], totalFeesID: methodData680['method'] + '_' + opt_data.totalFeesID, netValueID: methodData680['method'] + '_' + opt_data.netValueID}) : '') : '';
        }
      }
    } else {
      /** @desc Fee percentage label */
      var MSG_UNNAMED_1601 = goog.getMsg('Fees:');
      /** @desc Net amount */
      var MSG_UNNAMED_1603 = goog.getMsg('Net amount');
      output += '<div class="withdraw-method" data-withdraw-method="' + soy.$$escapeHtml(methodData680['method']) + '" style="' + ((! (methodIndex680 == 0)) ? 'display:none;' : '') + '">';
      if (opt_data.side == 'client') {
        /** @desc amount */
        var MSG_UNNAMED_1595 = goog.getMsg('Amount');
        output += '<label class="modal-form__label">' + MSG_UNNAMED_1595 + ' ' + soy.$$escapeHtml(opt_data.currencySign) + ':</label><input id="' + soy.$$escapeHtml(methodData680['method']) + '_' + soy.$$escapeHtml(opt_data.amountID) + '" data-uniform-validators="required; validateNumber ' + ((methodData680['limits'][opt_data.verificationLevel]['enabled']) ? ' ' + ((methodData680['limits'][opt_data.verificationLevel]['min']) ? '; validateMin ' + soy.$$escapeHtml(methodData680['limits'][opt_data.verificationLevel]['formatted_min_value']) : '') + ((methodData680['limits'][opt_data.verificationLevel]['max']) ? '; validateMax ' + soy.$$escapeHtml(methodData680['limits'][opt_data.verificationLevel]['formatted_max_value']) + ' ' : '') + ' ' : '') + '" data-uniform-type="number" data-uniform-filters="positive_number" value="' + ((opt_data.formattedAmount) ? soy.$$escapeHtml(opt_data.formattedAmount) : '') + '" type="text" class="withdraw-field input input--full" size="16" name="Amount" ' + ((! (methodIndex680 == 0)) ? 'disabled' : '') + '>';
        if (methodData680['limits'][opt_data.verificationLevel]['enabled']) {
          output += '<small>';
          if (methodData680['limits'][opt_data.verificationLevel]['min']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1597 = goog.getMsg(
                ' Maximum: {$xxx} per day.  ',
                {'xxx': soy.$$escapeHtml(methodData680['limits'][opt_data.verificationLevel]['formatted_max'])});
            output += MSG_UNNAMED_1597 + '<br>';
          }
          if (methodData680['limits'][opt_data.verificationLevel]['max']) {
            /** @desc amount help block */
            var MSG_UNNAMED_1599 = goog.getMsg(
                ' Minimum: {$xxx} per transaction.  ',
                {'xxx': soy.$$escapeHtml(methodData680['limits'][opt_data.verificationLevel]['formatted_min'])});
            output += MSG_UNNAMED_1599;
          }
          output += '</small>';
        }
      }
      output += '<label class="modal-form__label">' + soy.$$escapeHtml(methodData680['disclaimer']) + '</label><input id="' + soy.$$escapeHtml(methodData680['method']) + '_' + soy.$$escapeHtml(opt_data.percentFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData680['percent_fee']) + '"><input id="' + soy.$$escapeHtml(methodData680['method']) + '_' + soy.$$escapeHtml(opt_data.fixedFeeID) + '" type="hidden" value="' + soy.$$escapeHtml(methodData680['fixed_fee']) + '"><label class="modal-form__label">' + MSG_UNNAMED_1601 + '</label><label id="' + soy.$$escapeHtml(methodData680['method']) + '_' + soy.$$escapeHtml(opt_data.totalFeesID) + '" class="control-label" style="text-align: left;"></label><div ' + ((opt_data.hideNetAmount) ? ' style="display:none;" ' : '') + '><label class="modal-form__label">' + MSG_UNNAMED_1603 + ':</label><label id="' + soy.$$escapeHtml(methodData680['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '" class="control-label broker-confirm-deposit-net-amount" style="text-align: left;"></label><input id="' + soy.$$escapeHtml(methodData680['method']) + '_' + soy.$$escapeHtml(opt_data.netValueID) + '_value" type="hidden" value=""></div>';
      var fieldList904 = methodData680['fields'];
      var fieldListLen904 = fieldList904.length;
      for (var fieldIndex904 = 0; fieldIndex904 < fieldListLen904; fieldIndex904++) {
        var fieldData904 = fieldList904[fieldIndex904];
        output += (fieldData904['side'] == opt_data.side) ? '<label class="modal-form__label">' + soy.$$escapeHtml(fieldData904['label']) + ':</label><input class="withdraw-field input input--full" data-uniform-validators="' + soy.$$escapeHtml(fieldData904['validator']) + '" type="' + soy.$$escapeHtml(fieldData904['type']) + '" name="' + soy.$$escapeHtml(fieldData904['name']) + '" label="' + soy.$$escapeHtml(fieldData904['placeholder']) + '" value="' + soy.$$escapeHtml(fieldData904['value']) + '"' + ((! (methodIndex680 == 0)) ? 'disabled' : '') + ' />' : '';
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
  var MSG_UNNAMED_1605 = goog.getMsg('Buy Fee');
  /** @desc label for user sell fee */
  var MSG_UNNAMED_1609 = goog.getMsg('Sell Fee');
  output += '<table class="table table-striped table-condensed"><tbody><tr><td><strong>' + MSG_UNNAMED_1605 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.buy_fee) {
    output += soy.$$escapeHtml(opt_data.buy_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1607 = goog.getMsg('-');
    output += MSG_UNNAMED_1607;
  }
  output += '</span></td></tr><tr><td><strong>' + MSG_UNNAMED_1609 + '</strong></td><td><span class="bitex-model">';
  if (opt_data.sell_fee) {
    output += soy.$$escapeHtml(opt_data.sell_fee);
  } else {
    /** @desc Using broker fee data */
    var MSG_UNNAMED_1611 = goog.getMsg('-');
    output += MSG_UNNAMED_1611;
  }
  output += '</span></td></tr></tbody></table>';
  return output;
};


bitex.templates.YourAccountBalances = function(opt_data) {
  var output = '<table class="table table-striped" style="width: 350px"><tbody>';
  var currencyList952 = opt_data.currencies;
  var currencyListLen952 = currencyList952.length;
  for (var currencyIndex952 = 0; currencyIndex952 < currencyListLen952; currencyIndex952++) {
    var currencyData952 = currencyList952[currencyIndex952];
    /** @desc label for available balance in a currency */
    var MSG_UNNAMED_1613 = goog.getMsg(
        'Available {$code}',
        {'code': soy.$$escapeHtml(currencyData952.code)});
    output += '<tr><td><strong>' + MSG_UNNAMED_1613 + '</strong></td><td><span class="bitex-model" data-model-key="formatted_balance_' + soy.$$escapeHtml(currencyData952.model_key) + '" data-blink-class="balance-info-blink">' + ((currencyData952.balance) ? soy.$$escapeHtml(currencyData952.balance) : '-') + '</span></td></tr>';
  }
  output += '</tbody></table>';
  return output;
};


bitex.templates.AccountOverviewHeaderVerified = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1615 = goog.getMsg('No');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1617 = goog.getMsg('Pending');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1619 = goog.getMsg('Progress');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1621 = goog.getMsg('Yes - Level I ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1623 = goog.getMsg('Yes - Level II ');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1625 = goog.getMsg('Yes - Level III ');
  output += '<select id="id_select_new_verification_level" data-profile-change="Verified" ><option value=0 ' + ((opt_data.msg_customer_detail['Verified'] == 0) ? 'selected' : '') + '>' + MSG_UNNAMED_1615 + '</option><option value=1 ' + ((opt_data.msg_customer_detail['Verified'] == 1) ? 'selected' : '') + '>' + MSG_UNNAMED_1617 + '</option><option value=2 ' + ((opt_data.msg_customer_detail['Verified'] == 2) ? 'selected' : '') + '>' + MSG_UNNAMED_1619 + '</option><option value=3 ' + ((opt_data.msg_customer_detail['Verified'] == 3) ? 'selected' : '') + '>' + MSG_UNNAMED_1621 + '</option><option value=4 ' + ((opt_data.msg_customer_detail['Verified'] == 4) ? 'selected' : '') + '>' + MSG_UNNAMED_1623 + '</option><option value=5 ' + ((opt_data.msg_customer_detail['Verified'] == 5) ? 'selected' : '') + '>' + MSG_UNNAMED_1625 + '</option></select>';
  return output;
};


bitex.templates.AccountOverviewHeaderWithDrawEmailData = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['NeedWithdrawEmail']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1627 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1629 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1627 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1629 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1631 = goog.getMsg('Disabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1633 = goog.getMsg('Enabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1631 + '</span> <a href="#" class="btn btn-primary btn-mini" data-action="SET_WITHDRAW_EMAIL" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1633 + '</a>';
  }
  return output;
};


bitex.templates.AccountOverviewHeaderTwoFactors = function(opt_data) {
  var output = '';
  if (opt_data.msg_customer_detail['TwoFactorEnabled']) {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1635 = goog.getMsg('Enabled');
    /** @desc label on  overview header */
    var MSG_UNNAMED_1637 = goog.getMsg('Disable');
    output += '<span class="label label-success">' + MSG_UNNAMED_1635 + '</span><a href="#" class="btn btn-primary btn-mini" data-action="SET_TWO_FACTOR" data-row="' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '">' + MSG_UNNAMED_1637 + '</a>';
  } else {
    /** @desc label on  overview header */
    var MSG_UNNAMED_1639 = goog.getMsg('Disabled');
    output += '<span class="label label-important">' + MSG_UNNAMED_1639 + '</span>';
  }
  return output;
};


bitex.templates.AccountOverviewHeader = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_1641 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1643 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1645 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1647 = goog.getMsg('State');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1649 = goog.getMsg('Country');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1651 = goog.getMsg('Last login');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1653 = goog.getMsg('Is verified');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1655 = goog.getMsg('Has two step authentication');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1657 = goog.getMsg('Registration date');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1659 = goog.getMsg('Needs email confirmation on withdraw');
  output += '<table class="table table--bordered"><tbody><tr><td><strong>' + MSG_UNNAMED_1641 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1643 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1645 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1647 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['State']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1649 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['CountryCode']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1651 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['LastLogin']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1653 + '</strong></td><td class="account-overview-val account-overview-verified">' + bitex.templates.AccountOverviewHeaderVerified(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1655 + '</strong></td><td class="account-overview-val account-overview-two-factors" >' + bitex.templates.AccountOverviewHeaderTwoFactors(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1657 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Created']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1659 + '</strong></td><td class="account-overview-val account-overview-withdraw-email">' + bitex.templates.AccountOverviewHeaderWithDrawEmailData(opt_data) + '</td></tr></tbody></table>';
  return output;
};


bitex.templates.AccountOverviewUser = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_1661 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1663 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1665 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1667 = goog.getMsg('State');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1669 = goog.getMsg('Country');
  /** @desc label on  overview header */
  var MSG_UNNAMED_1671 = goog.getMsg('Is verified');
  output += '<table class="profile-table table"><tbody><tr><td><strong>' + MSG_UNNAMED_1661 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1663 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1665 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1667 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['State']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1669 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['CountryCode']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_1671 + '</strong></td><td class="account-overview-val account-overview-verified">';
  switch (opt_data.msg_customer_detail['Verified']) {
    case 0:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1673 = goog.getMsg('No');
      output += '<span class="label label-important">' + MSG_UNNAMED_1673 + '</span>';
      break;
    case 1:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1675 = goog.getMsg('Pending');
      output += '<span class="label label-important">' + MSG_UNNAMED_1675 + '</span>';
      break;
    case 2:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1677 = goog.getMsg('Yes');
      output += '<span class="label label-success">' + MSG_UNNAMED_1677 + '</span>';
      break;
    case 3:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1679 = goog.getMsg('Yes - Level II');
      output += '<span class="label label-success">' + MSG_UNNAMED_1679 + '</span>';
      break;
    case 4:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1681 = goog.getMsg('Yes - Level III');
      output += '<span class="label label-success">' + MSG_UNNAMED_1681 + '</span>';
      break;
    case 5:
      /** @desc label on  overview header */
      var MSG_UNNAMED_1683 = goog.getMsg('Yes - Level IV');
      output += '<span class="label label-success">' + MSG_UNNAMED_1683 + '</span>';
      break;
  }
  output += '</td></tr></tbody></table>';
  return output;
};


bitex.templates.EnterVerificationDataDialogContent = function(opt_data) {
  var output = '';
  /** @desc label on  overview header */
  var MSG_UNNAMED_1685 = goog.getMsg('Verification data');
  output += '<form class="form-horizontal" data-deposit-status="prepare"><input type="hidden" name="ClientID" value="' + soy.$$escapeHtml(opt_data.clientID) + '"><div class="control-group"><label class="control-label"> ' + MSG_UNNAMED_1685 + ' </label><div class="controls"><input type="text" class="input-xlarge" size="16" name="VerificationData"></div></div></form>';
  return output;
};


bitex.templates.DataGrid = function(opt_data) {
  var output = '<div ' + ((opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + '  class="fuelux ' + ((opt_data.base_class) ? soy.$$escapeHtml(opt_data.base_class) : '') + '" style="width:100%;"><table class="table table-bordered datagrid datagrid-stretch-header"><thead><tr><th colspan="4" ' + ((! opt_data.title && ! opt_data.show_search) ? 'style="display: none;"' : '') + '><span class="datagrid-header-title"  ' + ((! opt_data.title) ? 'style="display: none;"' : '') + ' ><strong>' + soy.$$escapeHtml(opt_data.title) + '</strong></span><div class="datagrid-header-left" ' + ((! opt_data.show_search) ? 'style="display: none;"' : '') + '><div class="input-append search datagrid-search"><input type="text" class="input-medium" placeholder="' + soy.$$escapeHtml(opt_data.search_placeholder) + '"><button type="button" class="btn"><i class="icon-search"></i></button></div></div><div class="datagrid-header-right">';
  if (opt_data.button_filters) {
    output += '<div class="select filter datagrid-filter" data-resize="auto"><button type="button" data-toggle="dropdown" class="btn dropdown-toggle">';
    var buttonList1207 = opt_data.button_filters;
    var buttonListLen1207 = buttonList1207.length;
    for (var buttonIndex1207 = 0; buttonIndex1207 < buttonListLen1207; buttonIndex1207++) {
      var buttonData1207 = buttonList1207[buttonIndex1207];
      output += (buttonIndex1207 == 0) ? '<span class="dropdown-label" style="width: 111px;">' + soy.$$escapeHtml(buttonData1207['label']) + '</span>' : '';
    }
    output += '<span class="caret"></span></button><ul class="dropdown-menu">';
    var buttonList1215 = opt_data.button_filters;
    var buttonListLen1215 = buttonList1215.length;
    for (var buttonIndex1215 = 0; buttonIndex1215 < buttonListLen1215; buttonIndex1215++) {
      var buttonData1215 = buttonList1215[buttonIndex1215];
      output += '<li data-value="' + soy.$$escapeHtml(buttonData1215['value']) + '"><a href="#">' + soy.$$escapeHtml(buttonData1215['label']) + '</a></li>';
    }
    output += '</ul></div>';
  }
  output += '</div></th></tr></thead></table><div class="datagrid-stretch-wrapper" style="height:' + ((opt_data.wrapper_height) ? soy.$$escapeHtml(opt_data.wrapper_height) : '360') + 'px;"><table class="table table-bordered datagrid"><tbody></tbody></table></div><table class="table table-bordered datagrid datagrid-stretch-footer"><tfoot><tr><th colspan="4"><div class="datagrid-footer-left" style="visibility: visible;"><div class="grid-controls"><span><span class="grid-start"></span> -<span class="grid-end"></span></span></div></div><div class="datagrid-footer-right" style="visibility: visible;"><div class="grid-pager"><button type="button" class="btn grid-prevpage"><i class="icon-chevron-left"></i></button><button type="button" class="btn grid-nextpage"><i class="icon-chevron-right"></i></button></div></div></th></tr></tfoot></table></div>';
  return output;
};
