//Storage class for storing/retreiving Projects

class Persistence {
    constructor () {
        //Null constructor for static methods? Probably right.
    }

    static saveProject(project) {
        localStorage.setItem(project.getTitle(), JSON.stringify(project)); //TODO: This should set the key dynamically.
    }

    static loadProjects() {
        if (localStorage.length > 0) {
            const projectList = [];
            for(let i = 0; i < localStorage.length; i++) {
                projectList.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }

            return projectList;
        }
    }

}

export { Persistence };