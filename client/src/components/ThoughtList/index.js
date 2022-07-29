import React from 'react';

const ThoughtList = ({ thoughts, title }) => {
    if (!thoughts.length) {
        return <h3>No Thoughts Yet</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {/* We conditionally render JSX by checking to see if there's even any data in the thoughts array first. If there's no data, then we return a message stating that. If there is data, then we return a list of thoughts using the .map() method.  */}
            {thoughts &&
                thoughts.map(thought => (
                    // KEY helps React internally track which data needs to be re-rendered if something changes.
                    <div key={thought._id} className="card mb-3">
                        <p className="card-header">
                            {thought.username}
                            thought on {thought.createdAt}
                        </p>
                        <div className="card-body">
                            <p>{thought.thoughtText}</p>
                            <p className="mb-0">
                                {/* Notice how we also check to see the value of thought.reactionCount. We're conditionally displaying a message to contextualize what the call to action should be. If there are no reactions, the user will start the discussion by adding the first reaction. If there are reactions, the user will view or add their own reaction to an existing list. */}
                                Reactions: {thought.reactionCount} || Click to{' '}
                                {thought.reactionCount ? 'see' : 'start'} the discussion!
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ThoughtList;