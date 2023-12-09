import { IProject } from '../../models/IProject';
import { IProjectRepository } from '../../repositories/IProjectsRepository';

class ProjectByIdUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(id: string): Promise<IProject> {
    return this.projectRepository.ProjectById(id);
  }
}

export default ProjectByIdUseCase;