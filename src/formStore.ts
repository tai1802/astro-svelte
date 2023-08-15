import { atom } from "nanostores";
export interface IFormData {
  firstname: string;
  lastname: string;
  telephone: string;
  isChecked: boolean;
  options: string;
}

/**
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} telephone
 * @property {string} isChecked
 * @property {string} options
 */
export const formData = atom<IFormData>({ firstname: "", isChecked: false, lastname: "", options: "", telephone: "" });
