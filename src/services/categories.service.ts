
//Aqui vamos devolver para o controller quando ele solicitar atravez da routa


import { Category } from '../entities/category.entity';

export class CategoriesService {
  async create(): Promise<Category> {
    const category = new Category({
      title: 'exemplo',
      color: '#a44412',
    });
    return category;
  }
}
