import { VoteComponent } from './vote.component';
describe('VoteComponent', () => {
  let component ;
  beforeEach(() => {
    component = new VoteComponent();
  });
  it('should increment total votes when upvoted', () => {
   // arrange
   // act
   component.upVote();
   // assert
   expect(component.totalVotes).toBe(1);
  });
  it('should decrement total votes when downvoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);

  });
});
