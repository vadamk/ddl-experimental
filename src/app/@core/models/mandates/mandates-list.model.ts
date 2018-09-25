export class MandateListItem {
  id: string;
  mandateName: string;
  workFlowName: string;
  createdDate: Date;
  deadlineDate: Date;
  status: string;
  noOfStages: number;
  currentStage: string;
  isDeletable: boolean;
}
