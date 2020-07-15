import React from 'react';

import {
  TStateContext,
  useStateValue
} from './store/state';

export default function ThemedButton(props: {color: string}) {
  const [{ theme }, dispatch] = useStateValue() as TStateContext;

  const onButtonClick = () => {
    if (theme.primary !== props.color)
      dispatch({
        type: 'changeTheme',
        payload: { primary: props.color }
      });
  }

  return (
    <button
      type="button"
      style={{color: theme.primary}}
      onClick={onButtonClick}
    >
      Make me {props.color}!
    </button>
  );
}
