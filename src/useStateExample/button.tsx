// no need to declare the type in useState() for Prmitive types as typescript is smart enough to pick this up by the initial value being passed
// However you will have to declare the type when using objects in useState

import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState<number>(2); // no need to declare type number as typesript will pick up due to the initial value passed
  const [text, setText] = useState("Click me!"); // same , i have not used defined the type as string in here, and it still does not give any err
  const [isPrimary, setIsPrimary] = useState(false); // typescript picks up the type is boolean, as false is passed.
}

//example when object type is passed in useState
type User = {
  name: string;
  age: string;
};

const objectExample1 = () => {
  //initially the user object will be null, as most times you fetch the user data from like an API.
  const [user, setUser] = useState(null);

  const name = user.name; //this will give out error as your have defined the user as null so instead you define a user type

  //useState with type
  type User = {
    name: string;
    age: number;
  };
  const [user1, setUser1] = useState<User>(null); // also with this case you will get an error as you are passing null as the initial value for the object but you have defined the User type for it. To fix this see another example
  const name1 = user1?.name;

  //useState type with tuple value (user obj & null)
  const [user2, setUser2] = useState<User | null>(null); // ✅

  const name2 = user2?.name;
};
