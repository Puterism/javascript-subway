import { routeTo } from '../../utils/history';
import { $, hideElement } from '../../utils/dom';
import { requestCheckLogin } from '../../services/auth';
import signupTemplate from './template';
import handleValidateSignupForm from './eventHandlers/handleValidateSignupForm';
import handleSignup from './eventHandlers/handleSignup';
import handleCheckEmail from './eventHandlers/handleCheckEmail';

const mountSignup = async () => {
  const isLogin = await requestCheckLogin();

  if (isLogin) {
    routeTo('/');
    return;
  }

  $('#route-container').innerHTML = signupTemplate;
  hideElement($('#nav'));

  $('#email').focus();

  $('#email').addEventListener('input', handleCheckEmail);
  $('#signup-form').addEventListener('input', handleValidateSignupForm);
  $('#signup-form').addEventListener('submit', handleSignup);
};

export default mountSignup;