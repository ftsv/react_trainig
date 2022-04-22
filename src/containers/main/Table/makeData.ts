
type PersonProps = {
  firstName: string;
  lastName: string;
  age?: any;
  visits: number;
  progress: number;
  status: string;
}

export const makeData:PersonProps[] = [
    {
      firstName: 'FirstName',
      lastName: 'LastName',
      age: 10,
      visits: 100,
      progress: 320,
      status: 'status',
    }, {
      firstName: 'FirstName',
      lastName: 'LastName',
      age: ' \n some data on second str',
      // age: 20,
      visits: 150,
      progress: 342,
      status: 'status',
    },
  ]