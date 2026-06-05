// 공통 에러 응답 계약.
// 성공 응답은 BaseResponse<T>(code: number, message, data)를 사용하고,
// 에러 응답은 도메인 에러 코드 문자열(code)과 사람이 읽는 message를 함께 담는다.
export interface ApiErrorResponse {
  success: false;
  status: number;
  code: string;
  message: string;
}
