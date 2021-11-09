import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private getUsersUrl = 'https://bookstore-spring-angular.herokuapp.com/users/get';
  private addUsersUrl = 'https://bookstore-spring-angular.herokuapp.com/users/add';
  private deleteUserUrl =   'https://bookstore-spring-angular.herokuapp.com/users/delete';

  private getBooksUrl = 'https://bookstore-spring-angular.herokuapp.com/books/get';
  private addBooksUrl = 'https://bookstore-spring-angular.herokuapp.com/books/add';
  private deleteBooksUrl = 'https://bookstore-spring-angular.herokuapp.com/books/delete';
  private updateBooksUrl = 'https://bookstore-spring-angular.herokuapp.com/books/update';

  constructor(private httpClient:HttpClient) { }

  getUsers()
  {
    console.log('Getting all users');
    return this.httpClient.get<User[]>(this.getUsersUrl);
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>(this.addUsersUrl, newUser);   
  }

  deleteUser(id) {
    return this.httpClient.delete<User>(this.deleteUserUrl + id);
  }

  getBooks(){
    return this.httpClient.get<Book>(this.getBooksUrl);
  }

  addBook(newBook: Book) {
    return this.httpClient.post<Book>(this.addBooksUrl, newBook);
  }

  deleteBook(id) {
    return this.httpClient.delete<Book>(this.deleteBooksUrl + id);
  }

  updateBook(updatedBook: Book) {
    return this.httpClient.put<Book>(this.updateBooksUrl, updatedBook);
  }

}
