import { counterReducer } from './counter.reducer';
import { CounterActions } from '../../actions';
import { CounterRecord } from './counter.types';

describe('counter reducer', () => {
  let initState: CounterRecord;

  beforeEach(() => {
    initState = counterReducer(undefined, { type: 'TEST_INIT '});
  });

  it('expect initial state to have 0 value', () => {
    expect(initState.counter).toEqual(0);
  });

  it('should increment state.count on INCREMENT_COUNTER', () => {
    const nextState = counterReducer(
      initState,
      { type: CounterActions.INCREMENT_COUNTER });
    expect(nextState.counter).toEqual(1);
  });

  it('should decrement state.count on DECREMENT_COUNTER', () => {
    const previousValue = initState.counter;
    const nextState = counterReducer(
      initState,
      { type: CounterActions.DECREMENT_COUNTER });
    expect(nextState.counter).toEqual(previousValue - 1);
  });
});
