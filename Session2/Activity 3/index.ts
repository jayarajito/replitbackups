type UserProfile = {
  name: string;
  email: string;
  age: number;
  logIn() => void;
}

type AdminActions = {
  addUser: (user: userProfile) => void;
  removeUser: (userId: string) => void;
  promoteUser: (userId: string) => void;
}

//Create an admin user type which'll have properties and methods from both UserProfile and AdminActions
