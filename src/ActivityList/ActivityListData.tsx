export type Activities = {
    ActList: ActivityData[] | null;
}

export type ActivityData = {
    ActName: string;
    ActDesc: string | null;
    ActStatus: ActivityStatus | null;
    estimatedTime: number | null;
    duration: number | null;
    importanceDegree: ImportanceDegree | null;
    startDate: string | null;
    lastChangeDate: string | null;
};

export enum ActivityStatus {
    ToDo = 'To Do',
    InProgress = 'In Progress',
    Done = 'Done',
};

export enum ImportanceDegree {
    Lv1 = 'Insignificant',
    Lv2 = 'Deferrable',
    Lv3 = 'Conventional',
    Lv4 = 'Important',
    Lv5 = 'emergency',
}

export const dummyActs:Activities = {
    ActList: [
        {
            ActName: 'Activity One',
            ActDesc: 'Meal',
            ActStatus: ActivityStatus.Done,
            estimatedTime: 1,
            duration: 0.5,
            importanceDegree: ImportanceDegree.Lv2,
            startDate: null,
            lastChangeDate: null,
        },
        {
            ActName: 'Activity Two',
            ActDesc: 'Sleep',
            ActStatus: ActivityStatus.ToDo,
            estimatedTime: 8,
            duration: null,
            importanceDegree: ImportanceDegree.Lv4,
            startDate: null,
            lastChangeDate: null,
        },
        {
            ActName: 'Activity Three',
            ActDesc: 'Coding',
            ActStatus: ActivityStatus.ToDo,
            estimatedTime: 8,
            duration: null,
            importanceDegree: ImportanceDegree.Lv3,
            startDate: null,
            lastChangeDate: null,
        },
        {
            ActName: 'Activity Four',
            ActDesc: 'gaming',
            ActStatus: ActivityStatus.Done,
            estimatedTime: 1,
            duration: 2,
            importanceDegree: ImportanceDegree.Lv1,
            startDate: null,
            lastChangeDate: null,
        },
        {
            ActName: 'Activity Five',
            ActDesc: 'Breathing',
            ActStatus: ActivityStatus.InProgress,
            estimatedTime: 24,
            duration: 12,
            importanceDegree: ImportanceDegree.Lv5,
            startDate: null,
            lastChangeDate: null,
        },
    ]
};
