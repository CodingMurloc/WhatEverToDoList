import React from 'react';
import './ActivityListSection.css';
import ActivityBar from "./ActivityBar";
import {Activities, ActivityStatus} from "./ActivityListData";

type Props = {
    activities: Activities | null;
};

const ActivityListSection: React.FC<Props> = ({activities}: Props) => {
    const statusList = [
        ActivityStatus.ToDo,
        ActivityStatus.InProgress,
        ActivityStatus.Done,
    ];
    return (
        <div>
            {activities && activities.ActList ?
            (statusList.map((activitysTitle:ActivityStatus) => (
                  <>
                      <h2 className='ActivityListSection-Title'>{activitysTitle}</h2>
                      {activities && activities.ActList ?
                          activities.ActList.map((item, index) => (
                              <ActivityBar acivityContent={item.ActName}></ActivityBar>
                          ))
                          : <></>}
                  </>
                ))
            ) : (<h2>有内鬼, 终止交易</h2>)}
        </div>
    );
};

export default ActivityListSection;