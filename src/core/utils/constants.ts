const API_URL = "https://brainup-api.mazenamir.com/api";

const AUTH_URL = `${API_URL}/auth`;

export const LOGIN_URL = `${AUTH_URL}/login`;
export const REGISTER_URL = `${AUTH_URL}/register`;

export const SEND_CONFIRM_EMAIL_URL = `${AUTH_URL}/confirm-email`;
export const VERIFY_CONFIRM_EMAIL_URL = `${SEND_CONFIRM_EMAIL_URL}/verify-code`;

export const SEND_RESET_PASSWORD_URL = `${AUTH_URL}/forgot-password`;
export const RESET_PASSWORD_URL = `${AUTH_URL}/reset-password`;
export const VERIFY_RESET_PASSWORD_URL = `${RESET_PASSWORD_URL}/verify-code`;
