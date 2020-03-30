import Project from '../models/Project';

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll();
        res.json({
            data: projects
        });
    } catch (e) {
        console.log(e)
    }
}

export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
        if (newProject) {
            return res.json({
                message: 'Project created Succesfully',
                data: newProject
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}

export async function getOneProject(req,res){
    const { id } = req.params;
    const project = await Project.findOne({
        where:{
            id
        }
    });
    res.json(project);
} 

export async function deleteProject(req,res){
    const { id } = req.params;
    const deteleRowCount = await Project.destroy({
        where:{
            id
        }
    });
    res.json({
        message: 'Project Deleted Succesfully',
        count: deteleRowCount
    });
}

export async function updateProject(req,res){
    const { id } = req.params;
    const {name,priority,description,deliverydate} = req.body;

    const projects = await Project.findAll({
        attributes:['id','name','priority','description','deliverydate'],
        where:{
            id
        }
    });
    if (projects.length > 0) {
        projects.forEach( async project => {
            await project.update({
                name,
                priority,
                description,
                deliverydate
            });
        });
    }
    return res.json({
        message:'Project Update Successfully',
        data:projects
    });
}

