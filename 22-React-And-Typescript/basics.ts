let age: number = 22;

let user: string;

user = 'Mike';

let isAdmin: boolean = false;

//Complex types

let hobbies: string[];

hobbies = ['sports', 'games'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Mike',
  age: 22,
};

let people: {
  name: string;
  age: number;
}[];


//Type inference

let course = 'React complete guide';

course = 12345;

//Union types 

let test: string | number = 'Some test string'

test = 12345;