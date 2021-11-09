import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Book } from '../model/Book';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
	
  baseUrl = environment.API_URL;

  /*private getUsersUrl = 'https:/bookstore-spring-boot-app.herokuapp.com/users/get';
  private addUsersUrl = 'https:/bookstore-spring-boot-app.herokuapp.com/users/add';
  private deleteUserUrl =   'https:/bookstore-spring-boot-app.herokuapp.com/users/delete';
  private getBooksUrl = 'https:/bookstore-spring-boot-app.herokuapp.com/books/get';
  private addBooksUrl = 'https:/bookstore-spring-boot-app.herokuapp.com/books/add';
  private deleteBooksUrl = 'https:/bookstore-spring-boot-app.herokuapp.com/books/delete';
  private updateBooksUrl = 'https:/bookstore-spring-boot-app.herokuapp.com/books/update'; */

  constructor(private httpClient:HttpClient) { }

  getUsers()
  {
    console.log('Getting all users');
    return this.httpClient.get<User[]>(this.baseUrl + 'users/get/');  
  }

  addUser(newUser: User) {
    return this.httpClient.post<User[]>(this.baseUrl + 'users/add/', newUser);     
  }

  deleteUser(id) {
    return this.httpClient.delete<User>(this.baseUrl + 'users/delete/' + id);
  }

  getBooks(){
    return this.httpClient.get<Book>(this.baseUrl + 'books/get/');
  }

  addBook(newBook: Book) {
    return this.httpClient.post<Book>(this.baseUrl + 'books/add/', newBook);
  }

  deleteBook(id) {
    return this.httpClient.delete<Book>(this.baseUrl + 'books/delete/' + id);
  }

  updateBook(updatedBook: Book) {
    return this.httpClient.put<Book>(this.baseUrl + '/books/update/', updatedBook);
  }

}