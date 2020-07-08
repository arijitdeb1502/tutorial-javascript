//Using String("False" will come before "True" as F comes before T)
const todoListS=[
    {
    task: "Learn Java",
    completeness: "True"
    },

    { 
    task: "Learn HTML",
    completeness: "False"
    },

    { 
    task: "Learn CSS",
    completeness: "True"
    },

    { 
    task: "Learn Java Script",
    completeness: "False"
    },

    { 
    task: "Practice problems",
    completeness: "False"
    },

    {
    task: "Revision of chapters",
    completeness: "True"
    }
]

const sortArrayS = function(todoArray){
   todoArray.sort(function(a,b){
        if(a.completeness<b.completeness){
            return -1
        }
        if(a.completeness>b.completeness){
            return 1
        }
        else{
            return 0
        }
        
    }
   )
}

sortArrayS(todoListS)

console.log(todoListS)


// Using Boolean (false will come before true as false=0 and true=1 and 0 comes before 1)
const todoListB=[
    {
    task: "Learn Java",
    completeness: true
    },

    { 
    task: "Learn HTML",
    completeness: false
    },

    { 
    task: "Learn CSS",
    completeness: true
    },

    { 
    task: "Learn Java Script",
    completeness: false
    },

    { 
    task: "Practice problems",
    completeness: false
    },

    {
    task: "Revision of chapters",
    completeness: true
    }
]

const sortArrayB = function(todoArray){
   todoArray.sort(function(a,b){
        if(a.completeness<b.completeness){
            return -1
        }
        if(a.completeness>b.completeness){
            return 1
        }
        else{
            return 0
        }
        
    }
   )
}

sortArrayB(todoListB)

console.log(todoListB)