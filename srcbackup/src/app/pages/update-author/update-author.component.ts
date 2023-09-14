import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/LybSys-services/book-service/book.service';
import { IAuthor } from '../../libSys-interfaces/author';

@Component({
    selector: 'app-update-author',
    templateUrl: './update-author.component.html',
    styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent {
    authorToUpdate = {
        authorId: Number,
        authorName: "",
    };
    authors: any;
    constructor(private service: BookService, private route: ActivatedRoute, private router: Router) {
    }
    ngOnInit() {
        this.authors = this.service.getbookAuthors()
    }
    updateauthors(author: { authorId: NumberConstructor; authorName: string }) {
        this.authorToUpdate = author;
    }
}