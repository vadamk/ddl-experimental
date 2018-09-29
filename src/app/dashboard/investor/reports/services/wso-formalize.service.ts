import { Injectable } from '@angular/core';

import {
  WsoReport,
  WsoReportSection,
  WsoReportQuestion,
  WsoReportUserAssignWithScoreSet,
  WsoTableStructure,
  WsoTableStructureCell
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
      body: [],
      footer: []
    };

    this.formalizeGeneral(structure.questionnaireUserAssignWithScoreSets, structure.weightSetName);
    this.formalizeTreeView(structure.questionnaireSections, 0);

    return this._result;
  }

  private formalizeGeneral(users: WsoReportUserAssignWithScoreSet[], weightSetName): any {

    let firstRow: WsoTableStructureCell[] = [
      {
        value: 'Questionnaire Structure',
        rowspan: 2,
        uppercase: true,
      },
      {
        value: weightSetName,
        rowspan: 2,
      }
    ];

    let secondRow: WsoTableStructureCell[] = [];
    let gwsRow: WsoTableStructureCell[] = [
      {
        value: 'GWS',
        uppercase: true,
      },
      {
        value: '',
      }
    ];

    users.forEach(user => {
      firstRow = [
        ...firstRow,
        {
          value: user.userAssignName,
          colspan: user.questionnaireScoreSets.length * 2,
          uppercase: true,
        }
      ];

      user.questionnaireScoreSets.forEach(set => {
        secondRow = [
          ...secondRow,
          { value: set.scoreSetName },
          { value: 'Weighted score' }
        ];

        gwsRow = [
          ...gwsRow,
          {
            value: set.generalWeightedScore,
            colspan: 2
          }
        ];
      });
    });

    this._result.head = [firstRow, secondRow];
    this._result.footer = [gwsRow];
  }

  private formalizeTreeView(sections: WsoReportSection[], order) {
    sections.forEach(section => {

      let row: any = [
        {
          value: `${section.mergedOrder} ${section.name}`,
          order
        },
        {
          value: section.weight
        }
      ];

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
        this.formalizeTreeView(section.doughterSections, order + 1);
      } else if (section.questions && section.questions.length) {
        this.formalizeQuestions(section.questions);
      }
    });
  }

  private formalizeQuestions(questions: WsoReportQuestion[]) {
    questions.forEach(question => {

      let row: any = [
        {
          value: `${question.mergedOrder} ${question.title}`,
          order: 2
        },
        {
          value: question.weight
        }
      ];

      question.questionUserAssignWithScoreSets
        .forEach(user => {
          return user.questionScoreSets.forEach(scoreSet => {

            // temp
            scoreSet.marking = (() => {
              const n = Math.floor(Math.random() * 3);

              switch (n) {
                case 0:
                  return 'low';
                case 1:
                  return 'middle';
                case 2:
                  return 'high';
                default:
                  return 'high';
              }
            })();

            row = [
              ...row,
              {
                value: scoreSet.score
              },
              {
                value: scoreSet.weightedScore,
                marking: scoreSet.marking
              }
            ];
          });
        });

      this._result.body = [...this._result.body, row];
    });
  }
}
