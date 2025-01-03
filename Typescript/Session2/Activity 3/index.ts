type UserProfile = {
  name: string;
  email: string;
  age: number;
  logIn: () => void;
};

type AdminActions = {
  addUser: (user: UserProfile) => void;
  removeUser: (userId: string) => void;
  promoteUser: (userId: string) => void;
};

//Create an admin user type which'll have properties and methods from both UserProfile and AdminActions

type adminUser = UserProfile & AdminActions;

const AdminUsr: adminUser = {
  name: "Jayaraj",
  email: "jayarajito@gmail.com",
  age: 33,
  logIn: () => console.log("Logged in"),
  addUser: () => console.log("User Added"),
  removeUser: () => console.log("User Removed"),
  promoteUser: () => console.log("User Promoted"),
};

console.log(AdminUsr);
