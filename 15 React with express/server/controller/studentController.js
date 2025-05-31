import studentScehma from "../model/studentScehma.js";


export const addStudentController = async(request,response)=>{
    try{
        const res = await studentScehma.create(request.body);
        // console.log("result ",res);
        response.status(201).send({status:true})

    }catch(error){
        console.log("error while adding student ",error);
        response.status(501).send({status:false})
    }
}

export const loginStudentController = async(request,response)=>{
    try{
        const search = {
            $and:[
                {email:request.body.email},
                {password:request.body.password}
            ]
        }

        const res = await studentScehma.findOne(search);
        response.status(201).send({status:true});
    }catch(error){
        console.log("error while login student ",error);
        response.status(501).send({status:false});
    }
}

export const viewStudentController = async(request,response)=>{
    try{
        const studentList = await studentScehma.find();
        // console.log("student list ",studentList);
        response.status(200).send({status:true,studentList:studentList});
    }catch(error){
        console.log("error while view student ",error);
        response.status(501).send({status:false});
    }
}

export const updateStudentController = async(request,response)=>{
    try {
        const res = await studentScehma.updateOne({email:request.body.email},request.body);
        console.log("result ",res);
        response.status(201).send({status:true});
    } catch (error) {
        console.log("error ",error);
        response.status(501).send({status:false})
        
    }
}

export const deleteStudentController = async(request,response)=>{
    try {
        console.log("in server delete student ")
        const result = await studentScehma.deleteOne({email:request.body.email});
        console.log("result ",result);
        response.status(201).send({status:true});
    } catch (error) {
        console.log("error ",error);
        response.status(501).send({status:false});
    }
}