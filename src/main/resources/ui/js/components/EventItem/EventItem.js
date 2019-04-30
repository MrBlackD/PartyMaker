import React from "react";
import PropTypes from "prop-types";

class EventItem extends React.Component{

    render(){
        const {event} =this.props;
        return(
            <div>
                <div>{event.name}</div>
                <div>{event.description}</div>
                <div>{event.date}</div>
                <div>{event.peopleCount}</div>
            </div>
        )
    }
}
EventItem.propTypes = {
    event: PropTypes.object
}
export default EventItem;