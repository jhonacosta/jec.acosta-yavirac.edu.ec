import { Router } from 'express';
const router = Router();

import { createTask,getTask,deleteTask,updatedTask,getOneTask,getTaskByProject } from '../controllers/task.controller';

// api/tasks/
router.post('/',createTask);
router.get('/',getTask);

// /api/tasks/:id
router.delete('/:id',deleteTask);
router.put('/:id',updatedTask);
router.get('/:id',getOneTask)

// /api/tasks/project/:projectid
router.get('/project/:projectid',getTaskByProject);

export  default router;