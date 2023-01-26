import { Request, Response } from "express";

export const createInstance = async (
  repository: any,
  req: Request,
  res: Response
) => {
  try {
    const newInstance = repository.create(req.body);
    await repository.persist(newInstance).flush();

    res.status(201).json(newInstance);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAll = async (
  repository: any,
  populationArray: string[],
  res: Response
) => {
  try {
    const results = await repository.findAll({
      populate: populationArray,
    });

    results.length
      ? res.status(200).json({ results })
      : res.status(404).json({ message: "There is no records in database." });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getInstance = async (
  repository: any,
  filterQuery: Object,
  populationArray: string[],
  req: Request,
  res: Response
) => {
  try {
    const singleInstance = await repository.findOneOrFail(filterQuery, {
      populate: populationArray,
    });

    res.status(200).json(singleInstance);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const updateInstance = async (
  repository: any,
  filterQuery: Object,
  req: Request,
  res: Response
) => {
  try {
    const instance = await repository.findOneOrFail(filterQuery);
    repository.assign(instance, req.body);
    await repository.flush();

    res.status(200).json(instance);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteInstance = async (
  repository: any,
  filterQuery: Object,
  req: Request,
  res: Response
) => {
  try {
    const instance = await repository.findOneOrFail(filterQuery);
    await repository.removeAndFlush(instance);

    res.status(200).json({
      message: `Resource deleted successfully.`,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export default {
  getAll,
  getInstance,
  createInstance,
  deleteInstance,
  updateInstance,
};
