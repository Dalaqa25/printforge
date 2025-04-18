import modelsData from "../data/models.json"
import { Model } from './types';

export async function getAllModels() {
    return modelsData;
}