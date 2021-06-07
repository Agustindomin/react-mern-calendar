import React from 'react';

// Recibe todo el evento
export const CalendarEvent = ({ event }) => {
    // console.log(event);

    // Extraemos los datos del event
    const { title, user } = event;

    return (
        <div>
            <strong> { title } </strong>
            <span>- { user.name } </span>
        </div>
    )
};
