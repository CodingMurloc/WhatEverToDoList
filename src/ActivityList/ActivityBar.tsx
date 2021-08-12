import React from 'react';
import './ActivityBar.css';

type Props = {
    acivityContent: string;
};

const ActivityBar: React.FC<Props> = ({acivityContent}: Props) => {
    return (
        <div className='ActivityBar'>{acivityContent}</div>
    );
}

export default ActivityBar;