var projectList = { "projects" : [
    // projects will be added here
]};


// exposed to cli
module.exports = {
    /* add project */
    add: function(proj){
        console.log("adding"+ proj +"..");
    },
    /* remove project */
    rm: function(proj){
        console.log("removing "+ proj +"..");
    },
    /* list projects */
    ls: function(){
        console.log("list all "+ projectList.projects.length +"projects! ok! working on that..");
    }
};
