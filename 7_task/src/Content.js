import React from 'react';

const Content = ({ love, hate }) => {
   if (love === 0 && hate === 0) {
    return (
        <div className="content">
            <h1>
                Do you love it or hate it? <br />
                Let me know!
            </h1>
        </div>
    );
}
return (
    <div className="content">
        <h1>
            Love: {love} Hate: {hate} <br />
            Total votes: {love + hate }
        </h1>
    </div>
);
};

export default Content;
