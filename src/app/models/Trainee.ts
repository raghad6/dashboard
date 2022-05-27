export class Trainee {
    public ID: number;
    public ProfilePic: string;
    public UserName: string;
    public Email: string;
    public Password: string;
    public DOB: Date;
    public TrainingHours: string;
    public Major:string

  
    constructor(ID: number, ProfilePic: string, UserName: string, Email: string, 
        Password: string, DOB: Date, TrainingHours: string,Major:string) {
      this.ID = ID;
      this.ProfilePic = ProfilePic;
      this.UserName = UserName;
      this.Email = Email;
      this.Password = Password;
      this.DOB = DOB;
      this.TrainingHours = TrainingHours;
      this.Major =Major;

    }
  }
  