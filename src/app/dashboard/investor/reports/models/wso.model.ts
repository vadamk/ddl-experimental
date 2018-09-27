export class WsoTableStructure {
  head: {
    value: string,
    colspan?: number,
    rowspan?: number
  }[][];
  body: {
    value: string,
    collspan?: number,
    rowspan?: number,
    order: number
  }[];
}

export class WsoReport {
  id: string;
  createdDate: string;
  isMultipleScoringAllowed: boolean;
  isNotificationRequered: boolean;
  isClarificationAllowed: boolean;
  isShownWeightSet: boolean;
  mandateId?: any;
  mandateStageId?: any;
  modifiedDate: string;
  publishedDate: string;
  questionnaireDeadlineDate: string;
  questionnaireHyperLink?: any;
  createdByCompanyId: string;
  questionnaireDescription: string;
  questionnaireTitle: string;
  status: string;
  visibility: boolean;
  allQuestionsAreMandatory: boolean;
  weightSetId: string;
  weightSetName: string;
  questionnaireUserAssignWithScoreSets: WsoReportUserAssignWithScoreSet[];
  questionnaireSections: WsoReportSection[];
}

export class WsoReportUserAssignWithScoreSet {
  userAssignId: string;
  userAssignName: string;
  questionnaireScoreSets: {
    scoreSetId: string;
    scoreSetName: string;
    scoreSetType: string;
    generalWeightedScore: number;
  }[];
}

export class WsoReportSection {
  id: string;
  name: string;
  description: string;
  order: number;
  mergedOrder: string;
  createdDate: string;
  modifiedDate: string;
  weight: number;
  questionnaireSectionUserAssignWithScoreSets: WsoReportSectionUserAssignWithScoreSet[];
  doughterSections?: WsoReportSection[];
  questions: WsoReportQuestion[];
}

export class WsoReportQuestion {
  id: string;
  createdDate: string;
  description: string;
  isMandatory: boolean;
  modifiedDate: string;
  parentQuestionId?: any;
  order: number;
  mergedOrder: string;
  title: string;
  questionType: string;
  text: string;
  weight: number;
  questionUserAssignWithScoreSets: WsoReportQuestionUserAssignWithScoreSet[];
}

export class WsoReportSectionUserAssignWithScoreSet {
  userAssignId: string;
  sectionScoreSets: {
    scoreSetId: string;
    score: number;
    weightedScore: number;
  }[];
}

export class WsoReportQuestionUserAssignWithScoreSet {
  userAssignId: string;
  questionScoreSets: {
    scoreSetId: string;
    score: number;
    weightedScore: number;
  }[];
}
