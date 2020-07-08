const todo =[
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
        task: "Practice Problems",
        completeness: false
        },
    
        {
        task: "Revise",
        completeness: true
        }

]

const filter= {
    search: " "
}
const renderFn =function(arr,filter){
    //Filtering the array
    const filteredarr= arr.filter(function(elements){
        return elements.task.toLowerCase().includes(filter.search.toLowerCase())&& !elements.completeness
    
    })
       
    // Removing duplicacy
    document.querySelector("#todos").innerHTML=""

    // Displaying to HTML
    filteredarr.forEach(function(elements){
        const items = document.createElement("p")
        items.textContent= elements.task
        document.querySelector("#todos").appendChild(items)
    })
        
    
}

renderFn(todo,filter)

document.querySelector("#userinput").addEventListener("input",function(e){
    filter.search=e.target.value
    renderFn(todo,filter)
})