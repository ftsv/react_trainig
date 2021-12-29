type PersonProps = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
}

export const makeData:PersonProps[] = [
    {
      firstName: 'FirstName',
      lastName: 'LastName',
      age: 10,
      visits: 10,
      progress: 32,
      status: 'status',
    },
  ]