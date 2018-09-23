import { MandatesListModule } from './mandates-list.module';

describe('MandatesListModule', () => {
  let mandatesListModule: MandatesListModule;

  beforeEach(() => {
    mandatesListModule = new MandatesListModule();
  });

  it('should create an instance', () => {
    expect(mandatesListModule).toBeTruthy();
  });
});
