/**
 * 해더 이벤트 설정
 */
const setHeaderEvent = () => {
  const header = document.querySelector('header');
  setHeaderTitleEvent(header);
  setLogoutButtonEvent(header);
};

/**
 * 헤더 타이들 클릭 이벤트 설정
 * @param header component
 */
const setHeaderTitleEvent = (header) => {
  const headerTitle = header.querySelector('.header__title');
  headerTitle.addEventListener('click', () => {
    window.location.href = `/admin`;
  });
};

/**
 * 헤더 로그아웃 클릭 이벤트 설정
 * @param header component
 */
const setLogoutButtonEvent = (header) => {
  const logoutButton = header.querySelector('.menu__button.logout');
  if (logoutButton !== null) {
    logoutButton.addEventListener('click', () => {
      window.location.href = `/admin/logout`;
    })}
};

export {
  setHeaderEvent
}