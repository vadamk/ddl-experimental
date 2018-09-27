import { Injectable } from '@angular/core';

import {
  WsoReport,
  WsoReportSection,
  WsoReportQuestion,
  WsoReportUserAssignWithScoreSet,
  WsoTableStructure
} from '../models/wso.model';

@Injectable({
  providedIn: 'root'
})
export class WsoFormalizeService {

  private _result: WsoTableStructure;

  constructor() { }

  public formalize(structure: WsoReport): WsoTableStructure {

    this._result = {
      head: [],
      body: []
    };

    this.formalizeHeader(structure.questionnaireUserAssignWithScoreSets, structure.weightSetName);
    this.formalizeSections(structure.questionnaireSections, 0);

    return this._result;
  }

  private formalizeHeader(users: WsoReportUserAssignWithScoreSet[], weightSetName): any {

    this._result.head = [[], []];

    this._result.head[0] = [
      {
        value: 'Questionnaire Structure',
        rowspan: 2,
        colspan: null
      },
      {
        value: weightSetName,
        rowspan: 2
      }
    ];

    users.forEach(user => {
      this._result.head[0] = [
        ...this._result.head[0],
        {
          value: user.userAssignName,
          colspan: user.questionnaireScoreSets.length * 2
        }
      ];

      user.questionnaireScoreSets.forEach(set => {
        this._result.head[1] = [
          ...this._result.head[1],
          {
            value: set.scoreSetName
          },
          {
            value: 'Weighted score'
          }
        ];
      });
    });
  }

  private formalizeSections(sections: WsoReportSection[], order) {
    sections.forEach(section => {

      let row: any = [
        { value: '' },
      ];

      row[0] = {
        value: `${section.mergedOrder} ${section.name}`,
        order
      };
      row[1] = { value: section.weight };

      section.questionnaireSectionUserAssignWithScoreSets
        .forEach(user => {
          return user.sectionScoreSets.forEach(scoreSet => {
            row = [
              ...row,
              '',
              { value: scoreSet.weightedScore }
            ];
          });
        });

      this._result.body = [...this._result.body, row];

      if (section.doughterSections && section.doughterSections.length) {
        this.formalizeSections(section.doughterSections, order + 1);
      } else if (section.questions && section.questions.length) {
        this.formalizeQuestions(section.questions);
      }

    });
  }

  private formalizeQuestions(questions: WsoReportQuestion[]) {
    questions.map(question => {


      let row: any = [
        { value: '' },
      ];

      row[0] = {
        value: `${question.mergedOrder} ${question.title}`,
        order: 2
      };
      row[1] = {
        value: question.weight
      };

      question.questionUserAssignWithScoreSets
        .forEach(user => {
          return user.questionScoreSets.forEach(scoreSet => {
            row = [
              ...row,
              { value: scoreSet.score },
              { value: scoreSet.weightedScore }
            ];
          });
        });

      this._result.body = [...this._result.body, row];
    });
  }

}
