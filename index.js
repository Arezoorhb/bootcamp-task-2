const notesList = [
    {
        id: 1,
        title: 'Coding JavaScript',
        createdAt: '2024-03-13T20:43:34.067Z',
        completed: false,
    },
    {
        id: 2,
        title: 'Study physics',
        createdAt: '2024-02-13T20:43:34.067Z',
        completed: true,
    },
    {
        id: 3,
        title: 'React.js intervew',
        createdAt: '2024-01-13T20:43:34.067Z',
        completed: true,
    },
    {
        id: 4,
        title: 'Cooking',
        createdAt: '2024-04-13T20:43:34.067Z',
        completed: false,
    },
];

function queryData({ sort = '', filter = '', status = '' }) {
    var notesListQuery = notesList;

    if (filter) {
        notesListQuery = notesListQuery.filter(
            x => x.title.toLowerCase().indexOf(filter.toLowerCase()) > -1
        );
    }
    switch (sort.toLowerCase()) {
        case 'asc':
            notesListQuery.sort(
                (x, y) => new Date(x.createdAt) - new Date(y.createdAt)
            );

            break;
        case 'desc':
            notesListQuery.sort(
                (x, y) => new Date(y.createdAt) - new Date(x.createdAt)
            );
            break;

        default:
            break;
    }
    switch (status.toLowerCase()) {
        case 'completed':
            notesListQuery = notesListQuery.filter(x => x.completed);

            break;
        case 'uncompleted':
            notesListQuery = notesListQuery.filter(x => !x.completed);
            break;

        default:
            break;
    }

    console.log(notesListQuery);
}

queryData({
    sort: 'desc',
    status: 'uncompleted',
    filter: 'coding',
});
