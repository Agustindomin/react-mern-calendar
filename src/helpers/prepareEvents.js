import moment from "moment";


export const prepareEvents = ( events = [] ) => {

    // Convertimos las fechas start y end de formato text a formato Date() para el calendario con moment
    return events.map( e => ({
        ...e,
        start: moment( e.start ).toDate(),
        end: moment( e.end ).toDate()
    }) );

}
