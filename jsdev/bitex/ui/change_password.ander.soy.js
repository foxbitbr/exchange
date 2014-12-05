// This file was automatically generated from change_password.ander.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.ChangePassword.templates');

goog.require('soy');


bitex.ui.ChangePassword.templates.ChangePassword = function(opt_data) {
  var output = '';
  /** @desc Change password view title on change password component */
  var MSG_UNNAMED_43 = goog.getMsg('Change Your password');
  /** @desc Old Password label on change password component */
  var MSG_UNNAMED_45 = goog.getMsg('Current password');
  /** @desc Password label on change password component */
  var MSG_UNNAMED_47 = goog.getMsg('New password');
  /** @desc Confirm new password label on change password component */
  var MSG_UNNAMED_49 = goog.getMsg('Confirm new password');
  /** @desc change password button on change password component */
  var MSG_UNNAMED_51 = goog.getMsg('Change Password');
  output += '<div class="profile-change-password"><h4 class="profile-change-password__title">' + MSG_UNNAMED_43 + '</h4><!-- .profile-change-password__form --><ul id="' + soy.$$escapeHtml(opt_data.id) + '" class="profile-change-password__form"><li><label class="profile-change-password__label" for="' + soy.$$escapeHtml(opt_data.id) + '_oldpassword">' + MSG_UNNAMED_45 + ':</label><input autocapitalize="off" autocorrect="off" id="' + soy.$$escapeHtml(opt_data.id) + '_oldpassword" class="input input--full" name="username" type="password" ></li><li><label class="profile-change-password__label" for="' + soy.$$escapeHtml(opt_data.id) + '_password">' + MSG_UNNAMED_47 + ':</label><input id="' + soy.$$escapeHtml(opt_data.id) + '_password" class="input input--full" placeholder="" name="password" type="password"></li><li><label class="profile-change-password__label" for="' + soy.$$escapeHtml(opt_data.id) + '_repeat_password">' + MSG_UNNAMED_49 + ':</label><input id="' + soy.$$escapeHtml(opt_data.id) + '_repeat_password" class="input input--full" placeholder="" name="repeat_password" type="password"></li><li><button id="' + soy.$$escapeHtml(opt_data.id) + '_change" class="profile-change-password__btn btn btn--primary">' + MSG_UNNAMED_51 + '</button></li></ul><!-- /.profile-change-password__form --></div>';
  return output;
};
