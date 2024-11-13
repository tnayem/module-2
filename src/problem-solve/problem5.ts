{
    //
    //Problem -1
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    function sumArray(num: number[]): number {
        return num.reduce((acc, curr) => acc + curr, 0);
    }
    // const result = sumArray([1, 2, 3, 4, 5]);
    // console.log(result);
    // Problem-2
    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
    function removeDuplicates(numbers: number[]): number[] {
        return numbers.filter((item, index) => numbers.indexOf(item) === index);
    }
    // const result = removeDuplicates([1, 2, 3, 4, 4, 5, 5, 6]);
    // console.log(result);

    // Problem 3
    // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
    function countWordOccurrences(sentence: string, word: string): number {
        // Convert both sentence and word to lowercase for case-insensitive comparison
        const lowerSentence = sentence.toLowerCase();
        const lowerWord = word.toLowerCase();

        // Split the sentence into an array of words
        const words = lowerSentence.split(' ');

        // Count occurrences using reduce
        return words.reduce((count, currentWord) => {
            return currentWord === lowerWord ? count + 1 : count;
        }, 0);
    }
    // const sentence = "The quick brown fox jumps over the lazy dog and the dog runs away";
    // const word = "the";
    // console.log(countWordOccurrences(sentence, word));

    // Problem 4
    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = {
        shape: 'circle';
        radius: number;
    };

    // Define the Rectangle type 
    type Rectangle = {
        shape: 'rectangle';
        width: number;
        height: number;
    };

    // Union type of both shapes
    type Shape = Circle | Rectangle;

    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === 'circle') {
            return Math.PI * shape.radius * shape.radius;
        } else {
            return shape.width * shape.height;
        }
    }

    // Problem-5
    // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
    // Define the Circle type
    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }

    // Problem-6

    // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
        return {
            ...profile,
            ...updates
        };
    }
    // const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    // console.log(updateProfile(myProfile, { age: 26 }));

    // Problem-7

    // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    // const car = new Car("Honda", "Civic", 2019);
    // console.log(car.getCarAge())

    // Problem-8

    // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
    // function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    //     return keys.every(key => key in obj);
    // }
}