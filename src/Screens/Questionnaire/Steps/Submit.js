import React, { useContext } from 'react';
import { store, NEXT_STEP } from '../QuestionnaireContext';
import { createQuestionnaire } from '../../../Services/firestore';

export const Submit = (props) => {
  const { state, dispatch } = useContext(store);

  const submit = () => {
    createQuestionnaire(state.submission);
  }

  return (
    <div>
          <a class="btn btn-primary btn-lg" onClick={submit} href="#" role="button">Submit</a>
    </div>
    );
}