export class Trainee {
    public ID: number;
    public ProfilePic: string;
    public UserName: string;
    public Email: string;
    public Major: string;
    public Password: string;
    public FName: string;
    public LName: string;
    public SupervisorID: number;
    public DOB: Date;
    public TrainingHours: string;
    public trainer_id: number;


    constructor(ID: number, ProfilePic: string, UserName: string, Email: string, Major: string,
                Password: string, FName: string, LName: string, SupervisorID: number, DOB: Date, TrainingHours: string, trainer_id: number) {
      this.ID = ID;
      this.ProfilePic = ProfilePic;
      this.UserName = UserName;
      this.Email = Email;
      this.Major = Major;
      this.Password = Password;
      this.FName = FName;
      this.LName = LName;
      this.SupervisorID = SupervisorID;
      this.DOB = DOB;
      this.TrainingHours = TrainingHours;
      this.Major = Major;
      this.trainer_id = trainer_id;


    }
  }
