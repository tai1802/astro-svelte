import { atom } from "nanostores";
export interface IFormData {
  firstname: string;
  lastname: string;
  telephone: string;
  isChecked: boolean;
  options: string;
}

export const formData = atom<IFormData>({ firstname: "", isChecked: false, lastname: "", options: "", telephone: "" });
