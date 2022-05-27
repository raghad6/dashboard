import { Time } from '@angular/common';

export class Forms {
  public ID: number;
  public FName: string;
  public LName: string;
  public PhoneNo: Number;
  public StudentID: Number;
  public Addres: string;
  public Email: string;
  public university: string;
  public Field: string;
  public ExpectedDOGrad: Date;
  public TotalAvg: number;
  public TypeOfTraining: string;
  public DaysAvailable: string;
  public HoursAvailable: Time;
  public ReqTrainingHours: number;
  public SupervisorPhoneNo: number;
  public UniversityDoc: string;
  public CVC: string;

  constructor(
    ID: number,
    FName: string,
    LName: string,
    PhoneNo: number,
    StudentID: number,
    Addres: string,
    Email: string,
    university: string,
    Field: string,
    ExpectedDOGrad: Date,
    TotalAvg: number,
    TypeOfTraining: string,
    DaysAvailable: string,
    HoursAvailable: Time,
    ReqTrainingHours: number,
    SupervisorPhoneNo: number,
    UniversityDoc: string,
    CVC: string
  ) {
    this.ID = ID;
    this.FName = FName;
    this.LName = LName;
    this.PhoneNo = PhoneNo;
    this.StudentID = StudentID;
    this.Addres = Addres;
    this.Email = Email;
    this.university = university;
    this.Field = Field;
    this.ExpectedDOGrad = ExpectedDOGrad;
    this.TotalAvg = TotalAvg;
    this.TypeOfTraining = TypeOfTraining;
    this.DaysAvailable = DaysAvailable;
    this.HoursAvailable = HoursAvailable;
    this.ReqTrainingHours = ReqTrainingHours;
    this.SupervisorPhoneNo = SupervisorPhoneNo;
    this.UniversityDoc = UniversityDoc;
    this.CVC = CVC;
  }
}
