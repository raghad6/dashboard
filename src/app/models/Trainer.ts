export class Trainer {
    public ID: number;
    public ProfilePic: any;
    public UserName: string;
    public Email: string;
    public Password: string;
    public PhoneNo: number;
    public Department: string;

  
    constructor(ID: number, ProfilePic: any, UserName: string, Email: string, 
        Password: string, PhoneNo: number, Department: string) {
      this.ID = ID;
      this.ProfilePic = ProfilePic;
      this.UserName = UserName;
      this.Email = Email;
      this.Password = Password;
      this.PhoneNo = PhoneNo;
      this.Department = Department;

    }
  }
  