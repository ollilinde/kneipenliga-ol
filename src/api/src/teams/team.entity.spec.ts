import { Team } from './team.entity';

describe('Team', () => {
  it('should be defined', () => {
    expect(new Team()).toBeDefined();
  });
});
