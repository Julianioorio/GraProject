import * as aboutCompanyInfo from '../../templates/aboutCompanyInfo.html';
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.infoUsMain').innerHTML = aboutCompanyInfo.default;
});