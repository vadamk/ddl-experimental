import { DashboardLayoutModule } from './dashboard-layout.module';

describe('DashboardLayoutModule', () => {
  let dashboardLayoutModule: DashboardLayoutModule;

  beforeEach(() => {
    dashboardLayoutModule = new DashboardLayoutModule();
  });

  it('should create an instance', () => {
    expect(dashboardLayoutModule).toBeTruthy();
  });
});
