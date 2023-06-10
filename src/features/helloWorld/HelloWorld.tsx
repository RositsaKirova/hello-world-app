import React, {useState, ChangeEvent} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectMessage, update} from './helloWorldSlice';


export const HelloWorld = () => {
    const message = useSelector(selectMessage);
    const dispatch = useDispatch();

    const [potentialMessage, setPotentialMessage] = useState<string>("");

    const updatePotentialMessage = (event: ChangeEvent<HTMLInputElement>) => {
        setPotentialMessage(event.target.value);
    }

    const onUpdateMessage = () => {
        dispatch(update(potentialMessage));
        setPotentialMessage("");
    }

    return (
        <div>
          <div>Message:</div>
          <div>{message}</div>
          <br/>
          <input
            type="text"
            value={potentialMessage}
            placeholder="New message"
            onChange={updatePotentialMessage}
          />
          <button onClick={onUpdateMessage}>Update message</button>
        </div>
    )
}