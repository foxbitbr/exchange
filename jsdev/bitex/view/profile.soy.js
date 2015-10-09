// This file was automatically generated from profile.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.view.ProfileView.templates');

goog.require('soy');


bitex.view.ProfileView.templates.ProfileViewChangePasswordPlaceHolder = function(opt_data) {
  return '<div class="span6 well"></div>';
};


bitex.view.ProfileView.templates.AccountOverviewUserEmailLanguage = function(opt_data) {
  var output = '';
  /** @desc English option on email language select */
  var MSG_UNNAMED_107 = goog.getMsg('English');
  /** @desc Brazilian Portuguese option on email language select */
  var MSG_UNNAMED_109 = goog.getMsg('Brazilian Portuguese');
  /** @desc Spanish option on email language select */
  var MSG_UNNAMED_111 = goog.getMsg('Spanish');
  /** @desc Vietnamese option on email language select */
  var MSG_UNNAMED_113 = goog.getMsg('Vietnamese');
  output += '<select id="id_select_new_email_language" data-profile-change="EmailLang" ><option value="en" ' + ((opt_data.msg_customer_detail['EmailLang'] == 'en') ? 'selected' : '') + '>' + MSG_UNNAMED_107 + '</option><option value="pt_BR" ' + ((opt_data.msg_customer_detail['EmailLang'] == 'pt_BR') ? 'selected' : '') + '>' + MSG_UNNAMED_109 + '</option><option value="es" ' + ((opt_data.msg_customer_detail['EmailLang'] == 'es') ? 'selected' : '') + '>' + MSG_UNNAMED_111 + '</option><option value="vi" ' + ((opt_data.msg_customer_detail['EmailLang'] == 'vi') ? 'selected' : '') + '>' + MSG_UNNAMED_113 + '</option></select>';
  return output;
};


bitex.view.ProfileView.templates.AccountOverviewUser = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_115 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_117 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_119 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_121 = goog.getMsg('State');
  /** @desc label on  overview header */
  var MSG_UNNAMED_123 = goog.getMsg('Country');
  /** @desc label on  overview header */
  var MSG_UNNAMED_125 = goog.getMsg('Is verified');
  /** @desc label on  overview header */
  var MSG_UNNAMED_139 = goog.getMsg('Email preferred language');
  output += '<table class="profile-table table"><tbody><tr><td><strong>' + MSG_UNNAMED_115 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_117 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_119 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_121 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['State']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_123 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['CountryCode']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_125 + '</strong></td><td class="account-overview-val account-overview-verified">';
  switch (opt_data.msg_customer_detail['Verified']) {
    case 0:
      /** @desc label on  overview header */
      var MSG_UNNAMED_127 = goog.getMsg('No');
      output += '<span class="label label-important">' + MSG_UNNAMED_127 + '</span>';
      break;
    case 1:
      /** @desc label on  overview header */
      var MSG_UNNAMED_129 = goog.getMsg('Pending');
      output += '<span class="label label-important">' + MSG_UNNAMED_129 + '</span>';
      break;
    case 2:
      /** @desc label on  overview header */
      var MSG_UNNAMED_131 = goog.getMsg('Progress');
      output += '<span class="label label-important">' + MSG_UNNAMED_131 + '</span>';
      break;
    case 3:
      /** @desc label on  overview header */
      var MSG_UNNAMED_133 = goog.getMsg('Yes');
      output += '<span class="label label-success">' + MSG_UNNAMED_133 + '</span>';
      break;
    case 4:
      /** @desc label on  overview header */
      var MSG_UNNAMED_135 = goog.getMsg('Yes - Level II');
      output += '<span class="label label-success">' + MSG_UNNAMED_135 + '</span>';
      break;
    case 5:
      /** @desc label on  overview header */
      var MSG_UNNAMED_137 = goog.getMsg('Yes - Level III');
      output += '<span class="label label-success">' + MSG_UNNAMED_137 + '</span>';
      break;
  }
  output += '</td></tr><tr><td><strong>' + MSG_UNNAMED_139 + '</strong></td><td>' + bitex.view.ProfileView.templates.AccountOverviewUserEmailLanguage(opt_data) + '</td></tr></tbody></table>';
  return output;
};
