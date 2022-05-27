export class Employee {
    public ID: number;
    public FName: string;
    public LName: string;
    public Email: string;
    public Password: string;
    public PhoneNo: number;
    public Department: string;

  
    constructor(ID: number, FName: string, LName: string, Email: string, 
        Password: string, PhoneNo: number, Department: string) {
      this.ID = ID;
      this.FName = FName;
      this.LName = LName;
      this.Email = Email;
      this.Password = Password;
      this.PhoneNo = PhoneNo;
      this.Department = Department;

    }
  }
  