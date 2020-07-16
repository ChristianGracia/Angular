import { User } from './user.model';
import { AuthData } from './auth.model';

export class AuthService {
  private user: User;
  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    }
  }
}
