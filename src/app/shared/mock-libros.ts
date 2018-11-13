import { Biblioteca } from "./models/biblioteca";

export const MockLibros : Biblioteca[] = [
    {titulo: "Código Limpio", autor: "Robert C. Martin", copias: 5, categoria: "Informática"},
    {titulo: "Code Complete", autor: "Steve McConnel", copias: 10, categoria: "Informática"},
    {titulo: "Ser Mortal", autor: "Atul Gawande", copias: 60, categoria: "Medicina"},
    {titulo: "Física Universitaria", autor: "Hugh Young", copias: 100, categoria: "Ciencias Exactas"}
];

export const MockCategorias : string[] = [
    "Informática",
    "Medicina",
    "Ciencias Exactas"
]