export const AUTH = Object.freeze({
  INVALID_PASSWORD_CONFIRM: '비밀번호가 일치하지 않습니다. 비밀번호를 다시 확인해주세요.',
  SIGNUP_FAILED: '회원가입에 실패했습니다.',
  LOGIN_FAILED: '로그인에 실패했습니다. 이메일과 비밀번호를 다시 확인해주세요.',
  SIGNUP_SUCCESS: '회원가입 성공! 자동으로 로그인합니다.',
});

export const STATION = Object.freeze({
  INVALID_STATION_NAME: '최소 2자, 최대 20자의 역 이름을 입력해주세요',
  ADD_STATION_FAILED: '역 등록에 실패했습니다.',
  GET_STATION_LIST_FAILED: '역 목록을 가져오지 못했습니다.',
  DUPLICATED_STATION_NAME: '이미 존재하는 역 이름입니다.',
  DELETE_STATION_FAILED: '역 삭제에 실패했습니다.',
  DELETE_STATION_SUCCESS: '역을 삭제했습니다.',
  DELETE_STATION_CONFIRM: '역을 삭제하시겠습니까?',
  EDIT_STATION_FAILED: '역 이름 수정에 실패했습니다',
});

export const LINE = Object.freeze({
  GET_LINE_LIST_FAILED: '노선 목록을 가져오지 못했습니다.',
  ADD_LINE_FAILED: '노선 등록에 실패했습니다.',
});

export const SECTION = Object.freeze({});