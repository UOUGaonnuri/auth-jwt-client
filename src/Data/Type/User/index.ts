export interface UserDetail {
  userId: number;
  userName: string;
  userEmail: string;
  role: string;
}

export interface UserState {
  isLoggedIn: boolean;
  user: UserDetail;
}
