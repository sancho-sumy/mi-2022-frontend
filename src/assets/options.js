const options = {
  limits: [
    {
      nameShort: 'Limit: 5',
      nameFull: '5 items per page',
      value: 5,
    },
    {
      nameShort: 'Limit: 10',
      nameFull: '10 items per page',
      value: 10,
    },
    {
      nameShort: 'Limit: 15',
      nameFull: '15 items per page',
      value: 15,
    },
    {
      nameShort: 'Limit: 20',
      nameFull: '20 items per page',
      value: 20,
    },
  ],
  order: [
    {
      name: 'Random',
      value: '',
    },
    {
      name: 'Descending ',
      value: 'desc',
    },
    {
      name: 'Ascending ',
      value: 'asc',
    },
  ],
  type: [
    {
      name: 'All',
      value: '',
    },
    {
      name: 'Static ',
      value: 'jpg,png',
    },
    {
      name: 'Animated ',
      value: 'gif',
    },
  ],
  breeds: [
    {
      name: 'All breeds',
      value: '',
    },
  ],
  defaultRequest: {
    limit: 5,
  },
  breedsRequest: {
    limit: 5,
  },
  galleryRequest: {
    limit: 5,
  },
};

export default options;
