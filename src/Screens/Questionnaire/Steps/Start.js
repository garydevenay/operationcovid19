import React, { useContext } from 'react';
import { store, NEXT_STEP } from '../QuestionnaireContext';

export const Start = (props) => {
  const { state, dispatch } = useContext(store);

  const next = () => {
    dispatch({type: NEXT_STEP});
  }

  if(state.step === 0 ){
  return (
    <div>
          <a class="btn btn-primary btn-lg" onClick={() => next()} href="#" role="button">Start</a>
    </div>
    );
  }
  return null;
}