import { MandatesModule } from './mandates.module';

describe('MandatesModule', () => {
  let mandatesModule: MandatesModule;

  beforeEach(() => {
    mandatesModule = new MandatesModule();
  });

  it('should create an instance', () => {
    expect(mandatesModule).toBeTruthy();
  });
});
