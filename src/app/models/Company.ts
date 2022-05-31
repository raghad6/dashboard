export class Company {
  public ID: number;
  public Username: string;
  public Password: string;
  public Name: string;
  public Email: string;
  public Description: string;
  public PhoneNo: number;
  public TrainerID: number;
  public SupervisorID: number;

  constructor(ID: number, Username: string, Name: string, Password: string, Email: string, 
       Description: string, PhoneNo: number) {
    this.ID = ID;
    this.Username = Username;
    this.Password = Password;
    this.Name = Name;
    this.Email = Email;
    this.Description = Description;
    this.PhoneNo = PhoneNo;

  }
}
