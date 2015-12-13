var projectList = { "projects" : [
    // projects will be added here
    // { "project-name": "projName", "directory-name": "projName/", "project-silo": "otherProjNameOrDir" }
]};


// exposed to cli
module.exports = {
    /* add project */
    add: function(projName,dirName,projSilo){
        if ( !projName ) {
            console.log("!! fatal error: Declare your project name (e.g. $ projlist add 'project name').");
            return;
        }
        
        if ( !dirName ) {
            console.log("warning: No directory provided, so attempting to use the project name as the directory name, relative to the silo's directory (e.g., $gitlab/project).");
        }
        console.log("adding"+ projName +"..");
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
