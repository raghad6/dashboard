export class Supervisor {
  public ID: number;
  public UserName: string;
  public Email: string;
  public Password: string;
  public SupervisorName: string;
  public UniName: string;
  public PhoneNo: number;
  public TraineeID: number;


  constructor(ID: number, UserName: string, Email: string, Password: string,
              SupervisorName: string, UniName: string, PhoneNo: number, TraineeID: number) {
    this.ID = ID;
    this.UserName = UserName;
    this.Password = Password;
    this.SupervisorName = SupervisorName;
    this.UniName = UniName;
    this.PhoneNo = PhoneNo;
    this.TraineeID = TraineeID;

  }
}
