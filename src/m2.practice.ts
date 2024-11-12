{
    //

    const welcomeMsg: string = "Hello World, I will complete this course successfully and become a Next level Web Developer!"
    // console.log(welcomeMsg)

    //*********************** */
    // Define a function that takes:
    // name (string)
    // age (number)
    // role (optional, with type 'admin' | 'user' | 'guest')
    // The function should log these values or perform a basic action.
    type EmployeType = {
        name: string,
        age: number,
        role?: 'admin' | 'user' | 'guest',
    }

    const employe1: EmployeType = {
        name: "Md Tasdid Nayem",
        age: 29,
        role: 'admin'
    }

    
    type book={
        title:string,
        author:string,
        yearPublished:number
    }
    const getBookProperty=<T, K extends keyof T>(book:T,key:K)=>{
        return book[key]
    }
    const myBook:book = {
        title:"Learn Typescript",
        author:"Jhankar Mahbub",
        yearPublished:2025
    }
    const author = getBookProperty(myBook,"author")


    //
}