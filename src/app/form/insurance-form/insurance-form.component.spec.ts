import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InsuranceFormComponent } from './insurance-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { QuestionService } from 'src/app/service/question.service';
@Component({
  template: '',
})
class DummyComponent {}

describe('InsuranceFormComponent', () => {
  let component: InsuranceFormComponent;
  let fixture: ComponentFixture<InsuranceFormComponent>;
  let service: QuestionService;
  const expectedData: any[] = [
    {
      question_type: 'multiple-choice',
      identifier: 'list_12110962',
      headline: 'Wen möchtest Du versichern?',
      description: null,
      required: false,
      multiple: 'true',
      choices: [
        {
          label: 'Meine Familie mit Kindern',
          value: 'Meine Familie mit Kindern',
          selected: false,
        },
        {
          label: 'Meine Familie ohne Kinder',
          value: 'Meine Familie ohne Kinder',
          selected: false,
        },
        {
          label: 'Mich ohne Kind',
          value: 'Mich ohne Kind',
          selected: false,
        },
        {
          label: 'Mich mit Kind',
          value: 'Mich mit Kind',
          selected: false,
        },
        {
          label: 'Mich und meinen Lebenspartner',
          value: 'Mich und meinen Lebenspartner',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12111610',
      headline: 'Bist Du Beamter oder im öffentlichen Dienst angestellt?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      required: false,
      multiple: 'false',
      choices: [
        {
          label: 'Ja',
          value: 'Ja',
          selected: false,
        },
        {
          label: 'Nein',
          value: 'Nein',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12111777',
      headline: 'Möchtest Du eine Forderungsausfalldeckung absichern?',
      description: null,
      required: true,
      multiple: 'false',
      choices: [
        {
          label: 'Ja',
          value: 'Ja',
          selected: false,
        },
        {
          label: 'Nein',
          value: 'Nein',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12110966',
      headline: 'Wie wichtig ist Dir die Absicherung gegen Mietsachschäden?',
      description: null,
      required: false,
      multiple: 'false',
      choices: [
        {
          label: 'Wichtig',
          value: 'Wichtig',
          selected: false,
        },
        {
          label: 'Unwichtig',
          value: 'Unwichtig',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12110967',
      headline: 'Bist Du Eigentümer einer oder mehrerer Immobilien?',
      description: null,
      required: true,
      multiple: 'false',
      choices: [
        {
          label: 'Ja',
          value: 'Ja',
          selected: false,
        },
        {
          label: 'Nein',
          value: 'Nein',
          selected: false,
        },
      ],
      jumps: [
        {
          conditions: [
            {
              field: 'list_12110967',
              value: 'Ja',
            },
          ],
          destination: {
            id: 'list_12110968',
          },
        },
        {
          conditions: [
            {
              field: 'list_12110967',
              value: 'Nein',
            },
          ],
          destination: {
            id: 'list_12111854',
          },
        },
      ],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12110968',
      headline: 'Gehört Dir eine selbstbewohnte Immobilie?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      required: false,
      multiple: 'false',
      choices: [
        {
          label: 'Ja, im Inland',
          value: 'Ja, im Inland',
          selected: false,
        },
        {
          label: 'Ja, im Ausland',
          value: 'Ja, im Ausland',
          selected: false,
        },
        {
          label: 'Ja, im Inland und Ausland',
          value: 'Ja, im Inland und Ausland',
          selected: false,
        },
        {
          label: 'Nein',
          value: 'Nein',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_13907264',
      headline: 'Hast Du eine oder mehrere vermietete Immobilien?',
      description: null,
      required: false,
      multiple: 'false',
      choices: [
        {
          label: 'Ja, im Inland',
          value: 'Ja, im Inland',
          selected: false,
        },
        {
          label: 'Ja, im Ausland',
          value: 'Ja, im Ausland',
          selected: false,
        },
        {
          label: 'Ja, im Inland und Ausland',
          value: 'Ja, im Inland und Ausland',
          selected: false,
        },
        {
          label: 'Nein',
          value: 'Nein',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12111854',
      headline: 'Möchtest Du in nächster Zeit etwas bauen oder umbauen?',
      description: null,
      required: true,
      multiple: 'false',
      choices: [
        {
          label: 'Ja',
          value: 'Ja',
          selected: false,
        },
        {
          label: 'Nein',
          value: 'Nein',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12110972',
      headline:
        'Wie wichtig ist Dir die Absicherung gegen beruflichen Schlüsselverlust?',
      description: null,
      required: false,
      multiple: 'false',
      choices: [
        {
          label: 'Wichtig',
          value: 'Wichtig',
          selected: false,
        },
        {
          label: 'Unwichtig',
          value: 'Unwichtig',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_13913438',
      headline: 'Möchtest Du den Verlust privater Schlüssel absichern?',
      description: null,
      required: false,
      multiple: 'false',
      choices: [
        {
          label: 'Ja',
          value: 'Ja',
          selected: false,
        },
        {
          label: 'Nein',
          value: 'Nein',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12110969',
      headline: 'Möchtest Du im Ausland abgesichert sein?',
      description: null,
      required: false,
      multiple: 'false',
      choices: [
        {
          label: 'Ja, bis zu einem Monat',
          value: 'Ja, bis zu einem Monat',
          selected: false,
        },
        {
          label: 'Ja, mehrere Monate',
          value: 'Ja, mehrere Monate',
          selected: false,
        },
        {
          label: 'Nein',
          value: 'Nein',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12110970',
      headline: 'Hast Du ein Segelboot?',
      description: null,
      required: false,
      multiple: 'false',
      choices: [
        {
          label: 'Bis 4 m²',
          value: 'Bis 4 m²',
          selected: false,
        },
        {
          label: 'Bis 10 m²',
          value: 'Bis 10 m²',
          selected: false,
        },
        {
          label: 'Bis 15 m²',
          value: 'Bis 15 m²',
          selected: false,
        },
        {
          label: 'Bis 25 m²',
          value: 'Bis 25 m²',
          selected: false,
        },
        {
          label: 'Nein',
          value: 'Nein',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12110971',
      headline: 'Hast Du ein Motorboot?',
      description: null,
      required: false,
      multiple: 'false',
      choices: [
        {
          label: 'Bis 5 PS',
          value: 'Bis 5 PS',
          selected: false,
        },
        {
          label: 'Bis 10 PS',
          value: 'Bis 10 PS',
          selected: false,
        },
        {
          label: 'Bis 15 PS',
          value: 'Bis 15 PS',
          selected: false,
        },
        {
          label: 'Unbegrenzte PS',
          value: 'Unbegrenzte PS',
          selected: false,
        },
        {
          label: 'Nein',
          value: 'Nein',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12110965',
      headline:
        'Möchtest Du bei einem Schadensfall einen Teil selbst bezahlen?',
      description: null,
      required: false,
      multiple: 'false',
      choices: [
        {
          label: 'Nein',
          value: 'Nein',
          selected: false,
        },
        {
          label: 'Ja, bis 150 Euro',
          value: 'Ja, bis 150 Euro',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12111717',
      headline: 'Hast Du aktuell schon eine Privathaftpflichtversicherung?',
      description: null,
      required: false,
      multiple: 'false',
      choices: [
        {
          label: 'Ja',
          value: 'Ja',
          selected: false,
        },
        {
          label: 'Nein',
          value: 'Nein',
          selected: false,
        },
      ],
      jumps: [
        {
          conditions: [
            {
              field: 'list_12111717',
              value: 'Ja',
            },
          ],
          destination: {
            id: 'list_12111755',
          },
        },
        {
          conditions: [
            {
              field: 'list_12111717',
              value: 'Nein',
            },
          ],
          destination: {
            id: 'date_22039590',
          },
        },
      ],
    },
    {
      question_type: 'multiple-choice',
      identifier: 'list_12111755',
      headline:
        'Wie viele Haftpflichtschäden hattest Du in den letzten 5 Jahren?',
      description: null,
      required: false,
      multiple: 'false',
      choices: [
        {
          label: 'Keine',
          value: 'Keine',
          selected: false,
        },
        {
          label: '1',
          value: '1',
          selected: false,
        },
        {
          label: '2',
          value: '2',
          selected: false,
        },
        {
          label: '3',
          value: '3',
          selected: false,
        },
        {
          label: 'Mehr als 3',
          value: 'Mehr als 3',
          selected: false,
        },
      ],
      jumps: [],
    },
    {
      question_type: 'text',
      identifier: 'date_22039590',
      headline:
        'Was wäre Dein Wunschtermin für den Beginn der Privathaftpflichtversicherung?',
      description: null,
      required: true,
      multiline: 'false',
      value: '',
      jumps: [],
    },
    {
      question_type: 'text',
      identifier: 'textarea_12110979',
      headline: 'Hast Du noch weitere Informationen oder Anmerkungen für uns?',
      description: null,
      required: false,
      multiline: 'true',
      value: '',
      jumps: [],
    },
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsuranceFormComponent, DummyComponent],
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'insurance/success', component: DummyComponent },
        ]),
      ],
      providers: [QuestionService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceFormComponent);
    service = TestBed.inject(QuestionService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('#getData should return expected data', (done) => {
    service.getQuestionJSON().subscribe((response) => {
      expect(response?.questionnaire?.questions).toEqual(expectedData);
      done();
    });
  });
  it('should move to next question', async () => {
    spyOn(component, 'nextQuestion');
    let buttonElement =
      fixture.debugElement.nativeElement.querySelector('.btn-next');
    console.log('buttonElement', buttonElement);
    buttonElement.click();
    fixture.detectChanges();
    expect(component.nextQuestion).toHaveBeenCalled();
  });
});
