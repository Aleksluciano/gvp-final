export interface Report{
  id?: string;
  typeReport: string;
  patientId?: string;
  patientName?: string;
  assistantId?: string;
  visitDate: Date;
  gvpId1: string;
  gvpName1: string,
  gvpId2?: string;
  gvpName2?: string;
  description: string;
  code?: string;
}

