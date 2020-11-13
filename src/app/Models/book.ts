export interface Book {
    id: String;
    name: String;
    author: String;
    pageNumber: Number;
    publisher: String;
    publicationDate: Date;
    genre: Array<String>; //Cuando llama mas de un genero
}