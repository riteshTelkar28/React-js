
const printData = (userObj)=>{
    return `Hello ${userObj.name} your email is ${userObj.email} and your id is ${userObj.id}`;
}
const userObj = {
    name :"Andrew Anderson",
    email :"andrew@gmail.com",
    id:123
}

const myResult = <h1>{printData(userObj)}/</h1>

export default myResult;