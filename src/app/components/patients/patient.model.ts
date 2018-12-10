export interface Patient{
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  phone: string;
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  numeral: number;
  complement: string;
  congregation: string;
  mobileElder1: string;
  mobileElder2: string;
  phoneElder1: string;
  phoneElder2: string;
  caseDescription: string;
  hospitalId: string;
  hospitalizationDate: Date;
  medicalRelease: Date;
  accommodationId: string;
  infoWho: string;
  report?: any;

}
