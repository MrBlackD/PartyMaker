import React from "react";
import PropTypes from "prop-types";
import EventItem from "../../components/EventItem/EventItem";

class EventFeed extends React.Component {
    render() {
        const { events } = this.props;
        if (!events || events.length === 0) {
            return (
                <div>
                    <button onClick={()=>console.log("Not implemented yet")}>make event</button>
                    <div>There is no events yet.</div>
                </div>
            )
        }
        return (
            <div>
                <button onClick={()=>console.log("Not implemented yet")}>make event</button>
                {events.map(event => <EventItem key={event.id} event={event} />)}
            </div>
        )
    }
}

EventFeed.propTypes = {
    events: PropTypes.array
}

export default EventFeed;