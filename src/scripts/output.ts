interface MyType {
  name: string;
  age: number;
  hobbies: (string | number | boolean )[];
  address: {
    street: string;
    city: string;
  };
}
