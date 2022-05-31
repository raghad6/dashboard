export class User2 {
  public ID: number;
  public Name: string;
  public Password: string;
  public Email: string;
  // public Role:string

  constructor(ID: number, Name: string, pwd: string, Email: string) {
    this.ID = ID;
    this.Name = Name;
    this.Password = pwd;
    this.Email = Email;
    // this.Role = Role;
  }
}
