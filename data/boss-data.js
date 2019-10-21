export const bosses = [
    {
        id: 'boss1',
        name: 'Self-taught programmer',
        imgSrc: 'some-url.',
        correctPct: -1, //-1 indicates purely random
    },
    {
        id: 'boss2',
        name: 'Fellow bootcamper',
        imgSrc: 'some-url.',
        correctPct: 30,
    },
    {
        id: 'boss3',
        name: 'CS degree holder',
        imgSrc: 'some-url.',
        correctPct: 50,
    },
];

// is this the alternative if I want to use objects for storage instead?
export const bossNames = {
    boss1: 'Self-taught programmer',
    boss2: 'Fellow bootcamper',
    boss3: 'CS degree holder',
};

export const bossCorrectPct = {
    boss1: 'Self-taught programmer',
    boss2: 'Fellow bootcamper',
    boss3: 'CS degree holder',
};

export const bossesDict = {
    boss1: {
        name: 'Self-taught programmer',
        imgSrc: 'some-url.',
        correctPct: -1, //-1 indicates purely random
        score: 0,
    },
    boss2: {
        name: 'Fellow bootcamper',
        imgSrc: 'some-url.',
        correctPct: 30,
        score: 0,
    },
    boss3: {
        name: 'CS degree holder',
        imgSrc: 'some-url.',
        correctPct: 50,
        score: 0,
    }
};