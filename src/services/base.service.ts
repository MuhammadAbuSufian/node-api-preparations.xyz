import { Base } from '../models/entities/base';

export abstract class BaseService {
  genFootprint<T extends Base>(entity: T) {
    entity.createdAt = new Date();
    return entity;
  }
}